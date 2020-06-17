<template>
  <div>
    <breadcrumb :centers="product_parents"
                :end="product.name"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="shop-layout">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="shop-detail">
              <div class="row">
                <div class="col-12">
                  <div id="show-filter-sidebar">
                    <h5 class="fz18px"><i class="fas fa-bars"></i>{{$t('category')}}</h5>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="shop-detail_img" style="height: 800px">
                    <div class="big-img fill-height">
                      <div class="big-img_block fill-height"
                           v-for="image of no_specifications_productimages"
                           :key="image.id"
                      >
                        <img
                          :src="imageLink(image.image_url)"
                          alt="product image"
                          style="max-height: 800px; width: auto; contain;transform:translateY(0px)"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="img_control"></div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="shop-detail_info">
                    <h2 class="product-name mb-20px">{{product.name}}</h2>
                    <p class="delivery-status fz16px">{{$t('over')}} {{lowest_freeshipping}}
                      {{$t('free_shipping_3000')}}</p>
                    <div class="activity mb-20px">
                      <div class="activity-box" v-if="product &&product.activity">{{product.activity_detail.ch_name}}
                      </div>
                    </div>
                    <div class="price-rate">
                      <h3 class="product-price">
                        <del v-if="fake_price">{{getProcessPrice(fake_price)}}
                        </del>
                        {{getProcessPrice(price)}}
                      </h3>
                    </div>
                    <div class="quantity-select d-flex" style="margin-bottom: 10px">
                      <div style="padding-top: 4px">
                        <label class="fz16px">{{product.level1_title}} :</label>
                      </div>
                      <div>
                        <VSelectButton
                          v-for="el of spec_level1_list"
                          :key="el.id"
                          :option="el.id"
                          v-model="choose_level1"
                          :disabled="isSelectDisabled(el)"
                        >{{el.name}}
                        </VSelectButton>
                      </div>
                    </div>
                    <div class="quantity-select d-flex" style="margin-bottom: 10px"
                         v-if="has_spec_level2"
                    >
                      <div style="padding-top: 4px">
                        <label class="fz16px">{{product.level2_title}} :</label>
                      </div>
                      <div>
                        <VSelectButton
                          v-for="el of spec_level2_list"
                          :key="el.id"
                          :option="el.id"
                          v-model="choose_level2"
                          :disabled="isSelectDisabled(el)"
                        >{{el.name}}
                        </VSelectButton>
                      </div>
                    </div>


                    <div class="quantity-select d-flex align-items-center">
                      <label class="fz16px">{{$t('count')}} :</label>
                      <counter v-model="quantity"
                               :max="max_quantity"
                               :disabled="!choose_specification_detail"
                      ></counter>
                      <span class="col-6 pl-5px gray-text ml-10px">{{stock_display_text}}</span>
                    </div>
                    <div class="product-select mb-0px row pl-15px pr-15px">
                      <button class="add-to-cart normal-btn outline col-12" @click="toCart">
                        <i class="fab shop-cart-icon"></i>
                        {{$t('add_cart')}}
                      </button>
                      <button
                        class="add-to-compare normal-btn outline mb-10px col-12"
                        :class="[wish_active?'love-active':'']"
                        @click="toWish"
                      >
                        <i class="function-icon icon_heart_alt"></i>
                        {{$t('add_favourite')}}
                      </button>
                    </div>
                    <div class="product-share mb-25px">
                      {{$t('shere_products')}} ：
                      <i class="small fab fb-share" @click="share('facebook')"></i>
                      <i class="small fab line-share" @click="share('line')"></i>
                      <i class="small fab twitter-share" @click="share('twitter')"></i>
                    </div>
                    <div class="slide-img">
                      <div class="slide-img_block"
                           v-for="image of no_specifications_productimages"
                           :key="image.id"
                      >
                        <img
                          :src="imageLink(image.image_url)"
                          alt="product image"
                          style="max-height: 252px; object-fit: contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-40px">
                  <div class="shop-detail_more-info mb-40px">
                    <div id="tab-so3">
                      <ul class="mb-0">
                        <li class="active"><a class="fill-width" href="#tab-1">{{$t('products_description')}}</a></li>
                      </ul>
                      <div id="tab-1">
                        <div class="custom-desc">
                          <div
                            id="tab-description"
                            class="tab-content pr-20px"
                            style="display: block;"
                            v-html="product.product_info"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <h3>{{$t('company_terms_1')}}</h3>
                  <div class="terms-li">
                    <li>{{$t('company_terms_2')}}</li>
                    <li>
                      {{$t('company_terms_3')}}
                    </li>
                    <li>{{$t('company_terms_4')}}</li>
                    <li>{{$t('company_terms_11')}}</li>
                    <li>{{$t('company_terms_5')}}</li>
                    <li>{{$t('company_terms_6')}}</li>
                  </div>

                  <br/><br/>

                  <h3>{{$t('company_terms_12')}}</h3>
                  <div class="terms-li">
                    <li>
                      <div>
                        <div>{{$t('company_terms_7')}}</div>
                        <div>
                          {{$t('company_terms_8')}}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>{{$t('company_terms_9')}}</div>
                        <div>{{$t('company_terms_10')}}</div>
                      </div>
                    </li>
                  </div>
                  <br/><br/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from '@/components/Counter'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import mixinCategory from "@/mixins/mixinCategory"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import mixinToWish from "@/mixins/mixinToWish"
  import {addTOCart} from '@/assets/js/localCart'
  import mixinProduct from "@/mixins/mixinProduct"
  import VSelectButton from "@/components/VSelectButton"

  export default {
    mixins: [mixinCategory, mixinDefaultInit, mixinToWish, mixinProduct],
    components: {
      Counter,
      VSelectButton
    },
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('product/getRead', ctx.params.id),
        ctx.store.dispatch('freeshipping/getList')
      ])
    },
    data() {
      return {
        specification: null,
      }
    },
    computed: {
      ...mapState('product', {
        product: state => state.item
      }),
      ...mapState('freeshipping', {
        lowest_freeshipping(state) {
          let ret = null
          for (let el of state.items) {
            if (ret === null) {
              ret = el.role
            }
            if (ret > el.role) {
              ret = el.role
            }
          }
          return ret
        }
      }),
      ...mapState('category', {
        categories: state => state.items
      }),
      no_specifications_productimages() {
        return this.product.productimages.filter(x => !x.specification)
      },
      product_parents() {
        let ret = []
        // category
        if (this.$route.query.c) {
          for (let el of this.product.categories) {
            if (el.id === parseInt(this.$route.query.c)) {
              ret.push({name: el.name, url: `/products?c=${el.id}`})
            }
          }
        } else {
          ret.push({name: this.product.brand_en_name, url: `/products?b=${this.product.brand}`})
        }
        return ret
      },
    },
    methods: {
      currencyChange(val) {
        return parseFloat(val * this.$store.state.price.item[this.$store.state.currency].toFixed(2))
      },
      share(social) {
        const webTitle = `${this.product.name} | EZGO`,
          webUrl = location.href
        let shareUrl = (social === 'line') ? `快來看看${this.product.name}：${webUrl}?openExternalBrowser=1` : webUrl
        window.open('https://www.addtoany.com/add_to/' + social + '?linkurl=' + shareUrl + '&amp;linkname=' + encodeURI(webTitle))
      },
      toCartAPI(values) {
        if (!this.$store.state.membertoken.has_token) {
          addTOCart(values, this.$store)
          return Promise.resolve()
        }
        return this.$api.cart.postData(values).then(() => {
          this.$store.dispatch('cart/getCount')
          this.$store.dispatch('cart/getTotal')
        })
      },
      toCart() {
        if (!this.choose_done) {
          this.$toast.warning('請先選擇規格')
          return
        }
        let values = {
          product: this.product.id,
          specification_detail: this.choose_specification_detail.id,
          quantity: this.quantity,
        }
        this.toCartAPI(values).then(() => {
          this.$toast.success(this.$t('to_cart'))
        })
      },
    },
    mounted() {
      this.specification = this.product.specifications[0].id
    }
  }
</script>

<style scoped lang="sass">
  /*.slick-list*/
  /*  **/
  /*    height: 100%*/
  /*.big-img_block.slick-active*/
  /*  height: 100%*/
</style>
