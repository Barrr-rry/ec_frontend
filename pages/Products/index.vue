<template>
  <div>
    <breadcrumb :end="tip_text"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="shop-layout">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="shop-grid-list">
              <div class="shop-products">
                <div class="shop-products_top mini-tab-title underline">
                  <div class="row align-items-center">
                    <div class="col-6 col-xl-4">
                      <h2 class="title ellipsis">{{tip_text}}</h2>
                    </div>
                    <div class="col-6 text-right">
                      <div id="show-filter-sidebar">
                        <h5 class="fz18px">
                          <i class="fas fa-bars"></i>{{$t('filter_set')}}
                        </h5>
                      </div>
                    </div>
                    <div class="col-12 col-xl-8">
                      <div class="product-option">
                        <div class="product-filter">
                          <select class="select-form small-h" name="" @change="changeRouter($event,'order_by')">
                            <option value="-created_at">{{$t('new_post')}}</option>
                            <option value="price">{{$t('low_to')}}</option>
                            <option value="-price">{{$t('hi_to')}}</option>
                          </select>
                          <select class="select-form small-h" name="" @change="changeRouter($event,'limit')">
                            <option value="10">{{$t('get_10')}}</option>
                            <option value="20">{{$t('get_20')}}</option>
                            <option value="30">{{$t('get_30')}}</option>
                          </select>
                        </div>
                        <div class="view-method">
                          <p id="grid-view" class="active">
                            <i class="fas fa-th-large"></i>
                          </p>
                          <p id="list-view"><i class="fas fa-list"></i></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Using column-->
                </div>
                <div class="shop-products_bottom">
                  <div class="row no-gutters-sm" v-if="products.length">
                    <div class="col-6 col-md-4"
                         v-for="product of products"
                    >
                      <v-product
                        :product="product"
                      />
                    </div>
                  </div>
                  <div class="row" v-else>
                    <div class="col-12 justify-content-center align-items-center text-center to-flex-col"
                         ref="no_product_img">
                      <img src="/images/webs/order_fail.svg" alt="" class="max-width-100pa">
                      <h2 class="mt-5 speicail-h2">{{$t('no_find_products')}}</h2>
                    </div>
                  </div>
                </div>
                <pagination
                  v-if="products.length"
                  v-model="current"
                  :total="page_count"
                ></pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PriceFilter from '@/components/PriceFilter'
  import mixinCategory from '@/mixins/mixinCategory'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import VProduct from "@/components/VProduct"
  import Pagination from "@/components/Pagination"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  let mapping = {
    b: 'brand',
    c: 'category',
    t: 'tag',
    k: 'keywords',
    o: 'offset',
    limit: 'limit',
    order_by: 'order_by',
    min_price: 'min_price',
    max_price: 'max_price',
  }
  let filter_default = {
    limit: 10,
    o: 0,
    order_by: '-created_at'
  }

  function get_type(query) {
    let type = null
    for (let key in query) {
      if (['k', 'c', 'b', 't'].includes(key)) {
        let new_key = mapping[key]
        if (!new_key) {
          continue
        }
        type = new_key
      }
    }
    return type
  }

  function getItemAndParents(id, categories) {
    for (let item of categories) {
      if (item.id === id) {
        return {
          id,
          categories,
        }
      }
      if (item.sub_categories.length) {
        let ret = getItemAndParents(id, item.sub_categories)
        if (ret) {
          return ret
        }
      }
    }
  }

  function getFilterParams(filter, query) {
    for (let key in query) {
      let new_key = mapping[key]
      if (!new_key) {
        continue
      }
      filter[new_key] = query[key]
    }
    return filter
  }

  export default {
    name: 'Products',
    mixins: [mixinCategory, mixinDefaultInit],
    components: {
      PriceFilter,
      VProduct,
      Pagination,
    },
    computed: {
      ...mapState('product', {
        products: state => state.items.results,
        page_info: state => state.items
      }),
      page_count() {
        return Math.ceil(this.page_info.count / this.filter.limit)
      },
      ...mapState('brand', {
        brands: state => state.items,
      }),
      ...mapState('category', {
        categories: state => state.items,
      }),
      ...mapState('tag', {
        tags: state => state.items,
      }),
      type_name() {
        let type_name = {
          'brand': '品牌',
          'category': '分類',
          'tag': '標籤',
          'keywords': '關鍵字'
        }
        return type_name[this.type]
      },
      tip_text() {
        let ret = ''
        if (this.type === 'keywords') {
          ret = this.$route.query.k
        }
        if (this.type === 'brand') {
          for (let child of this.brands) {
            for (let obj of child.children) {
              if (parseInt(this.$route.query.b) === obj.id) {
                ret = obj.en_name
                break
              }
            }
          }
        }
        if (this.type === 'tag') {
          for (let obj of this.tags) {
            if (parseInt(this.$route.query.t) === obj.id) {
              ret = obj.name
              break
            }
          }
        }
        if (this.type === 'category') {
          let target = parseInt(this.$route.query.c)

          function categorySearch(obj) {
            if (obj.id === target) {
              return obj
            }

            for (let child of obj.sub_categories) {
              let result = categorySearch(child)
              if (result) {
                return result
              }
            }
          }

          for (let obj of this.categories) {
            let result = categorySearch(obj)
            if (result) {
              ret = result.name
              break
            }
          }
        }
        return ret
      },
      type_links() {
        let ret = []
        if (this.type === 'brand') {
          let id = parseInt(this.$route.query.b)
          for (let brand of this.brands) {
            for (let child of brand.children) {
              if (child.id === id) {
                for (const ch of brand.children) {
                  ret.push({
                    id: ch.id,
                    to: `/products?b=${ch.id}`,
                    name: ch.en_name
                  })
                }
                return ret
              }
            }
          }
        }
        if (this.type === 'category') {
          let id = parseInt(this.$route.query.c)
          let obj = getItemAndParents(id, this.categories)
          if (!obj) {
            return ret
          }
          for (let cata of obj.categories) {
            ret.push({
              id: cata.id,
              to: this.getSubLink(cata),
              name: cata.name
            })
          }
        }
        if (this.type === 'tag') {
          for (let tag of this.tags) {
            ret.push({
              id: tag.id,
              to: `/products?t=${tag.id}`,
              name: tag.name
            })
          }
        }
        return ret
      },
    },
    data() {
      let filter = {...filter_default}
      for (let k of ['o']) {
        if (this.$route.query[k] !== undefined) {
          filter[mapping[k]] = this.$route.query[k]
        }
      }
      let current = this.calcCurrent(filter)
      return {
        filter,
        current,
      }
    },
    asyncData(ctx) {
      let filter = {...filter_default}
      filter.limit = ctx.query.limit || filter.limit
      filter.order_by = ctx.query.order_by || filter.order_by
      let type = get_type(ctx.query)
      return {
        type,
        filter,
      }

    },
    watch: {
      current(val) {
        this.$router.push({
          path: '/products',
          query: {...this.$route.query, o: (val - 1) * this.filter.limit}
        })
      },
      '$route.query': {
        handler(query) {
          this.type = get_type(query)
          this.filter = {...filter_default}
          this.initData()
        },
        deep: true,
        immediate: true
      }
    },
    fetch(ctx) {
      let filter = {...filter_default}
      let obj = getFilterParams(filter, ctx.query)
      return fetchReturn(ctx, [ctx.store.dispatch('product/getList', obj)])
    },
    methods: {
      changeRouter(val, key) {
        this.current = 1
        this.$router.push({
          path: '/products',
          query: {
            ...this.$route.query, ...this.filter,
            [key]: val.target.value,
          }
        })
      },
      calcCurrent(filter) {
        return parseInt(filter.o / filter.limit) + 1
      },
      initDisplayType() {
        let $grid = $('.shop-layout #grid-view')
        let $list = $('.shop-layout #list-view')

        if ($grid.hasClass('active')) {
          $('.shop-products_bottom .product').addClass('grid-view')
          $('.shop-products_bottom--fullwidth .product').addClass('grid-view')

          $('.shop-products_bottom .product').removeClass('list-view fadeInUp').addClass('grid-view animated zoomIn')
          $('.shop-products_bottom--fullwidth .product').removeClass('full-list-view fadeInUp').addClass('grid-view animated zoomIn')
        } else {
          $('.shop-products_bottom .product').removeClass('grid-view zoomIn').addClass('list-view animated fadeInUp')
          $('.shop-products_bottom--fullwidth .product').removeClass('grid-view zoomIn').addClass('full-list-view animated fadeInUp')
        }
        // for no product layout
        if (!this.products.length) {
          $(this.$refs.no_product_img).removeClass('col-6 col-md-4').addClass('col-12')
        }
      },
      initData() {
        // if (process.client) {
        //   $('header .department-dropdown-menu').slideUp()
        // }
        let obj = getFilterParams(this.filter, this.$route.query)
        this.$store.dispatch('product/getList', obj).then(() => {
          if (process.client) {
            this.initDisplayType()
            this.closeMenu()
          }
        })
      },
      initGridList() {
        // 右上角的grid or list button
        let $grid = $('.shop-layout #grid-view')
        let $list = $('.shop-layout #list-view')
        let self = this

        $list.on('click', function (event) {
          event.preventDefault
          $grid.removeClass('active')
          $(this).addClass('active')
          $('.shop-products_bottom .product').removeClass('grid-view zoomIn').addClass('list-view animated fadeInUp')
          $('.shop-products_bottom--fullwidth .product').removeClass('grid-view zoomIn').addClass('full-list-view animated fadeInUp')
          $('.shop-products_bottom .col-6.col-md-4').removeClass('col-6 col-md-4').addClass('col-12')
          $('.shop-products_bottom--fullwidth .col-6.col-md-4.col-xxl-3.col-xxxl').removeClass('col-6 col-md-4 col-xxl-3 col-xxxl').addClass('col-12')
        })

        $grid.on('click', function (event) {
          event.preventDefault
          $list.removeClass('active')
          $(this).addClass('active')
          $('.shop-products_bottom .product').removeClass('list-view fadeInUp').addClass('grid-view animated zoomIn')
          $('.shop-products_bottom--fullwidth .product').removeClass('full-list-view fadeInUp').addClass('grid-view animated zoomIn')
          if (self.products.length) {
            $('.shop-products_bottom .col-12').removeClass('col-12').addClass('col-6 col-md-4')
            $('.shop-products_bottom--fullwidth .col-12').removeClass('col-12').addClass('col-6 col-md-4 col-xxl-3 col-xxxl')
          }
        });

        if ($grid.hasClass('active')) {
          $('.shop-products_bottom .product').addClass('grid-view')
          $('.shop-products_bottom--fullwidth .product').addClass('grid-view')
        }

      }
    },
    mounted() {
      this.initGridList()
    }
  }
</script>

<style scoped></style>
