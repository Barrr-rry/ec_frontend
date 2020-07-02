<template>
  <div id="main">
    <!-- End header-->
    <slider></slider>
    <!--Search Input-->
    <div class="navigation-filter mt-30px-sm mt-40px-md mt-30px">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-4 col-xl-3 order-1">
            <div class="department-menu_block mb-30px-sm mb-0px-md mb-30px mobile-hide">
              <div
                class="department-menu d-flex justify-content-between align-items-center white-color"
              >
                <i class="fas fa-bars"></i>{{$t('chose_buy')}}<span
              ><i class="arrow_carrot-down"></i
              ></span>
              </div>
              <div v-show="init_slideup" class="department-dropdown-menu">
                <ul>
                  <li v-for="tag of tags"
                      :id="tag.id"
                  >
                    <nuxt-link :to="`/products?t=${tag.id}`">{{tag.name}}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-8 col-xl-9 order-2">
            <div class="website-search">
              <div class="row no-gutters">
                <div class="col-9 col-md-8 col-lg-9 col-xl-10">
                  <div class="search-input">
                    <input
                      :placeholder="$t('please_input_brand_or_prodcut_name')"
                      class="no-round-input no-border"
                      type="text"
                      v-model="search_input"
                      @keyup.enter="search"
                      :maxlength="40"
                    />
                  </div>
                </div>
                <div class="col-3 col-md-4 col-lg-3 col-xl-2">
                  <button class="no-round-btn" style="height: 50px"
                          @click="search"
                  >
                    {{$t('search')}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End slider-->
    <div class="feature-products mt-40px-sm mt-40px-md mt-30px">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-6 col-md-4 col-lg-3"
                   v-for="product of data.new_products"
                   :key="product.id"
              >
                <v-product
                  :product="product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import Slider from "@/components/Slider"
  import VProduct from "@/components/VProduct"
  import {mapState} from 'vuex'
  import mixinCategory from "@/mixins/mixinCategory"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"


  export default {
    mixins: [mixinCategory, mixinDefaultInit],
    name: 'index_page',
    components: {
      Slider,
      VProduct,
    },
    async asyncData({app}) {
      const {data} = await app.$api.product.index_page()
      return {
        data
      }
    },
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('banner/getList')])
    },
    data() {
      return {
        init_slideup: false,
        search_input: '',
      }
    },
    computed: {
      ...mapState('tag', {
        tags: (state) => state.items
      }),
      tab_keys() {
        let keys = []

        for (let key in this.data.tags) {
          keys.push(key)
        }
        return keys
      },
      ...mapState('brand', {
        bottom_brands: state => {
          let temp = []
          for (let item of state.items) {
            for (let child of item.children) {
              if (child.index) {
                temp.push(child)
              }
            }
          }
          while (temp.length < 8) {
            temp.push(temp[(Math.floor(Math.random() * temp.length))])
          }
          let index = 0
          let ret = []
          for (let el of temp) {
            let obj = {...el}
            obj.fake_id = index++
            ret.push(obj)
          }
          return ret
        }
      }),
      ...mapState('tag', {
        tags_dict: state => {
          let ret = {}
          for (let item of state.items) {
            ret[item.id] = item
          }
          return ret
        }
      })
    },
    methods: {
      search() {
        this.$router.push(`/products?k=${this.search_input.trim()}`)
      },
      nextSlick() {
        $('.slick-next').trigger('click')
      }
    },
    mounted() {
      setInterval(this.nextSlick, 3000)
    }
  }
</script>
