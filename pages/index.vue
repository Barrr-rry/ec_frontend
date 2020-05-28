<template>
  <div id="main">
    <!-- End header-->
    <slider></slider>
    <!-- End slider-->
    <div class="feature-products mb-40px mt-40px mt-80px-md">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row no-gutters-sm">
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

    <!-- End items-category-->
    <div class="feature-products mb-40px mt-40px">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="title mx-auto text-center">
              {{$t('best_sale_goods')}}
            </h1>
          </div>
          <div class="col-12">
            <div class="row no-gutters-sm">
              <div class="col-6 col-md-4 col-lg-3"
                   v-for="product of data.hot_products"
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
    <!-- End feature-products-->
    <div class="banner m0">
      <div class="full-fluid">
        <div class="banner-block">
          <div class="row no-gutters">
            <div class="col-12 col-lg-4">
              <div
                class="banner-block_detail"
                style="background-color: #DCF0C7"
              >
                <img src="images/webs/a-04.png" alt=""/>
                <nuxt-link
                  class="banner-btn normal-btn"
                  to="/delivery-instructions"
                  style="width: 230px;text-align: center"
                >{{$t('delivery_instructions')}}
                </nuxt-link
                >
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div
                class="banner-block_detail"
                style="background-color: #DCF0C7"
              >
                <img src="images/webs/b-04.png" alt=""/>
                <nuxt-link
                  class="banner-btn normal-btn"
                  to="/terms"
                  style="width: 230px;text-align: center"
                >{{$t('product_ordering_instructions')}}
                </nuxt-link
                >
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div
                class="banner-block_detail"
                style="background-color: #DCF0C7"
              >
                <img src="images/webs/c-04.png" alt=""/>
                <nuxt-link
                  class="banner-btn normal-btn"
                  to="/faq"
                  style="width: 230px;text-align: center"
                >{{$t('common_problem')}}
                </nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- End items-category-->
    <div class="feature-products mb-40px mt-40px">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="title mx-auto text-center">{{$t('product_list')}}</h1>
          </div>
          <div class="col-12">
            <div id="tab">
              <ul class="tab-control">
                <li>
                  <a class="active" href="#tab-all">{{$t('all_products')}}</a>
                </li>
                <li
                  v-for="key of tab_keys"
                  :key="key"
                >
                  <a :href="`#tab-${key}`">{{tags_dict[key].name}}</a>
                </li>
              </ul>
              <div id="tab-all">
                <div class="row no-gutters-sm">
                  <div class="col-6 col-md-4 col-lg-3"
                       v-for="product of data.alltag_products"
                       :key="product.id"
                  >
                    <v-product
                      :product="product"
                    />

                  </div>
                </div>
              </div>
              <div :id="`tab-${key}`"
                   v-for="key of tab_keys"
                   :key="key"
              >
                <div class="row no-gutters-sm">
                  <div class="col-6 col-md-4 col-lg-3"
                       v-for="product of data.tags[key]"
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
    </div>
    <!-- End deak of the week-->

    <!-- End partner-->
    <div class="partner">
      <div class="container">
        <div
          class="partner_block d-flex justify-content-between"
          data-slick='{"slidesToShow": 6}'
        >
          <div class="partner--logo" href=""
               v-for="el of bottom_brands"
               :key="el.fake_id"
          >
            <nuxt-link :to="`/products?b=${el.id}`"
            ><img
              style="width: 65px; height: 55px;"
              :src="imageLink(el.image_url)"
              alt="YOOOOO"
            /></nuxt-link>
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
    computed: {
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
      nextSlick() {
        $('.slick-next').trigger('click')
      }
    },
    mounted() {
      setInterval(this.nextSlick, 3000)
    }
  }
</script>
