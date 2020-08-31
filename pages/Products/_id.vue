<template>
  <div>
    <breadcrumb :end="getText(product,'name','en_name')"></breadcrumb>
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
                  <div class="shop-detail_img">
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
                  <div class="shop-detail_info flex-order">
                    <div class="flex-order--item order-mob-2">
                      <h2 class="product-name mb-20px">{{getText(product,'name','en_name')}}</h2><br/>
                      <h2 class="product-describe mb-20px">{{getText(product,'sub_title','en_sub_title')}}</h2>
                      <p class="delivery-status fz16px">{{$t('over')}} {{lowest_freeshipping}}
                        {{$t('free_shipping_3000')}}</p>
                      <div class="activity mb-20px">
                        <div class="activity-box" v-if="product.activity != null">{{getText(product.activity_detail,'ch_name','en_name')}}
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
                          <label class="fz16px">{{getText(product,'level1_title','level1_en_title')}} :</label>
                        </div>
                        <div>
                          <VSelectButton
                            v-for="el of spec_level1_list"
                            :key="el.id"
                            :option="el.id"
                            v-model="choose_level1"
                            :disabled="isSelectDisabled(el)"
                          >{{getText(el,'name','en_name')}}
                          </VSelectButton>
                        </div>
                      </div>
                      <div class="quantity-select d-flex" style="margin-bottom: 10px"
                           v-if="has_spec_level2"
                      >
                        <div style="padding-top: 4px">
                          <label class="fz16px">{{getText(product,'level2_title','level2_en_title')}} :</label>
                        </div>
                        <div>
                          <VSelectButton
                            v-for="el of spec_level2_list"
                            :key="el.id"
                            :option="el.id"
                            v-model="choose_level2"
                            :disabled="isSelectDisabled(el)"
                          >{{getText(el,'name','en_name')}}
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
                    </div>
                    <div class="flex-order--item order-mob-1" style="width:100%; max-width: 100vw;">
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
                </div>
                <div class="col-12 mt-sm-0 mt-40px">
                  <div class="shop-detail_more-info mb-40px">
                    <div id="tab-so3">
                      <ul class="mb-0">
                        <li class="active"><a class="fill-width" href="#tab-1">{{$t('products_description')}}</a></li>
                      </ul>
                      <div id="tab-1">
                        <div class="custom-desc">
                          <div
                            id="tab-description"
                            class="tab-content pr-20px msgHtmlBox"
                            style="display: block;"
                            v-html="product.product_info"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12">

                  <div v-if="$i18n.locale == 'tw'">
                    <h3 class="terms-title">{{$t('product_terms_1')}}</h3>
                    <div class="terms-li">
                      <ol class="ol-number">
                        <li>{{$t('product_terms_1_1')}}</li>
                        <li>{{$t('product_terms_1_2')}}</li>
                        <li>{{$t('product_terms_1_3')}}</li>
                        <li>{{$t('product_terms_1_4')}}</li>
                      </ol>
                    </div>
                    <br><br>

                    <h3 class="terms-title">{{$t('product_terms_2')}}</h3>
                    <div class="terms-li">
                      <ol class="ol-number">
                        <li>{{$t('product_terms_2_1')}}</li>
                        <li>{{$t('product_terms_2_2')}}</li>
                        <li>{{$t('product_terms_2_3')}}</li>
                      </ol>
                    </div>

                    <br><br>

                    <h3 class="terms-title">{{$t('product_terms_3')}}</h3>
                    <div class="terms-li">
                      <ol class="ol-number">
                        <li>{{$t('product_terms_3_1')}}</li>
                        <li>{{$t('product_terms_3_2')}}</li>
                        <li>{{$t('product_terms_3_3')}}</li>
                        <li>{{$t('product_terms_3_4')}}</li>
                        <li>{{$t('product_terms_3_5')}}</li>
                        <li>{{$t('product_terms_3_6')}}</li>
                      </ol>
                    </div>

                  </div>

                  <div v-else>
                    <h3 class="terms-title">{{$t('product_terms_1')}}</h3>
                    <div class="terms-li">
                      <ol class="ol-number">
                        <li>{{$t('product_terms_1_1')}}</li>
                        <li>{{$t('product_terms_1_2')}}</li>
                        <li>{{$t('product_terms_1_3')}}</li>
                        <li>{{$t('product_terms_1_4')}}</li>
                        <li>{{$t('product_terms_1_5')}}</li>
                      </ol>
                    </div>
                    <br>

                    <h3 class="terms-title">{{$t('product_terms_2')}}</h3>
                    <div class="terms-li">
                      <p>{{$t('product_terms_2_1')}}</p>
                      <p>{{$t('product_terms_2_2')}}</p>
                      <p>{{$t('product_terms_2_3')}}</p>
                      <i class="gray-text2"><p>{{$t('product_terms_2_4')}}</p></i>
                    </div>
                    <br>

                    <h3 class="terms-title">{{$t('product_terms_3')}}</h3>
                    <div class="terms-li">
                      <p>{{$t('product_terms_3_1')}}<b>{{$t('product_terms_3_2')}}</b></p>
                    </div>

                  </div>


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
import { fetchReturn } from '@/mixins/fetch/headerFetch'
import { mapState } from 'vuex'
import mixinCategory from '@/mixins/mixinCategory'
import mixinDefaultInit from '@/mixins/mixinDefaultInit'
import mixinToWish from '@/mixins/mixinToWish'
import { addTOCart } from '@/assets/js/localCart'
import mixinProduct from '@/mixins/mixinProduct'
import VSelectButton from '@/components/VSelectButton'
import langMixin from '@/mixins/langMixin'
import axios from 'axios'

export default {
  mixins: [
    mixinCategory,
    mixinDefaultInit,
    mixinToWish,
    mixinProduct,
    langMixin
  ],
  components: {
    Counter,
    VSelectButton
  },
  fetch(ctx) {
    return fetchReturn(ctx, [
      ctx.store.dispatch('product/getRead', ctx.params.id),
      ctx.store.dispatch('freeshipping/getList')
    ])
  },
  data() {
    return {
      specification: null,
      title: "HaveFun Men's Underwear | 男性內褲",
      img:
        'https://li1871-48.members.linode.com/media/3408413256-康闓_HFMU_OTIMG_chloe_2020805.jpg',
      keywords:
        "HaveFun Men's Underwear、男性內褲、男內褲、三角內褲、四角內褲、比基尼三角、提臀內褲、四角褲、三角褲、男性內著、貼身衣物、男內褲model、同志內褲、gay內褲、後空內褲、HaveFun Underwear"
    }
  },
  watch: {
    // choose_level1() {
    //   this.no_specifications_productimages = this.product.productimages.filter(x => x.specification===this.choose_level1)
    //   debugger
    // }
  },
  computed: {
    ...mapState('product', {
      product: (state) => state.item
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
      categories: (state) => state.items
    }),
    no_specifications_productimages: {
      get() {
        let ret = this.product.productimages
        if (this.choose_level1) {
          ret = this.product.productimages.filter(
            (x) => x.specification === this.choose_level1
          )
          let rett = this.product.productimages.filter(
            (x) => x.specification !== this.choose_level1
          )
          for (let re of rett) {
            ret.push(re)
          }
        }
        return ret
      },
      set(newName) {
        return newName
      }

      // return this.product.productimages.filter(x => x.specification===this.choose_level1)
    },
    product_parents() {
      let ret = []
      // category
      if (this.$route.query.c) {
        for (let el of this.product.categories) {
          if (el.id === parseInt(this.$route.query.c)) {
            ret.push({ name: el.name, url: `/products?c=${el.id}` })
          }
        }
      } else {
        ret.push({
          name: this.product.brand_en_name,
          url: `/products?b=${this.product.brand}`
        })
      }
      return ret
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          property: 'og:title',
          content: this.title
        },
        {
          property: 'og:img',
          content: this.img
        },
        {
          name: 'keywords',
          content: this.keywords
        }
      ]
    }
  },
  asyncData(ctx) {
    let img_href = ctx.env.VUE_APP_API_URL.replace('/api', '')
    return axios
      .get(`${ctx.env.VUE_APP_API_URL}product/${ctx.params.id}/`)
      .then((res) => {
        return {
          title: res.data.name + " | HaveFun Men's Underwear",
          img: `${img_href}media/${res.data.productimages[0].image_url}`,
          keywords:
            res.data.name +
            "、HaveFun Men's Underwear、男性內褲、男內褲、三角內褲、四角內褲、比基尼三角、提臀內褲、四角褲、三角褲、男性內著、貼身衣物、男內褲model、同志內褲、gay內褲、後空內褲、HaveFun Underwear"
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    currencyChange(val) {
      return parseFloat(
        val *
          this.$store.state.price.item[this.$store.state.currency].toFixed(2)
      )
    },
    share(social) {
      const webTitle = `${this.product.name} | HaveFun Men’s Underwear`,
        webUrl = location.href
      let shareUrl =
        social === 'line' ? `${webUrl}?openExternalBrowser=1` : webUrl
      window.open(
        'https://www.addtoany.com/add_to/' +
          social +
          '?linkurl=' +
          shareUrl +
          '&amp;linkname=' +
          encodeURI(webTitle)
      )
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
        quantity: this.quantity
      }
      this.toCartAPI(values).then(() => {
        this.$toast.success(this.$t('to_cart'))
      })
    }
  },
  mounted() {
    this.specification = this.product.specifications[0].id
  }
}
</script>

<style scoped>
/*.slick-list*/
/*  **/
/*    height: 100%*/
/*.big-img_block.slick-active*/
/*  height: 100%*/
.msgHtmlBox >>> img {
  max-width: 100%;
}
</style>
