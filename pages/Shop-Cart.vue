<template>
  <div>
    <breadcrumb :end="$t('cartt')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="order-step mb-80px" v-if="items.length">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="order-step_block">
              <div class="row no-gutters">
                <div class="col-12 col-md-4">
                  <div class="step-block active">
                    <div class="step">
                      <h2>{{$t('cart')}}</h2>
                      <span>01</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="step-block">
                    <div class="step">
                      <h2>{{$t('write_data')}}</h2>
                      <span>02</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="step-block">
                    <div class="step">
                      <h2>{{$t('order_final')}}</h2>
                      <span>03</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End order step-->
    <div class="shopping-cart " v-if="items.length">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="product-table mb-40px">
              <table class="table table-responsive">
                <colgroup>
                  <col span="1" style="width: 15%"/>
                  <col span="1" style="width: 30%"/>
                  <col span="1" style="width: 15%"/>
                  <col span="1" style="width: 15%"/>
                  <col span="1" style="width: 15%"/>
                  <col span="1" style="width: 10%"/>
                </colgroup>
                <thead>
                <tr>
                  <th class="product-iamge min-180" scope="col">{{$t('product_iamge')}}</th>
                  <th
                    class="product-name min-w210"
                    scope="col"
                  >
                    {{$t('name_specification')}}
                  </th>
                  <th
                    class="product-name min-w210"
                    scope="col"
                  >
                    {{$t('size')}}
                  </th>
                  <th class="product-price min-w150" scope="col">{{$t('price')}}</th>
                  <th
                    class="product-quantity min-w150"
                    scope="col"
                  >
                    {{$t('count')}}
                  </th>
                  <th class="product-total min-w150" scope="col">{{$t('little_total')}}</th>
                  <th class="product-clear" scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <CartProduct
                  v-for="item of items"
                  :key="item.id"
                  :item="item"
                  :cartVm="cartVm"
                  @remove="remove"
                  ref="cart_products"
                />
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-12">
            <div class="coupon">
              <input
                class="no-round-input coupon-input"
                type="text"
                :placeholder="$t('use_coupon_code')"
                v-model="coupon"
                style="width: 312px"
              />
              <button class="no-round-btn" @click="changeCoupon" style="width: 230px">{{$t('use_coupon')}}</button>
            </div>
            <div class="primary-color coupon-msg-sm mt-10px">{{this.coupon_message}}</div>
            <div class="coupon mt-20px">
              <input
                class="no-round-input coupon-input"
                type="number"
                :placeholder="$t('used_coupon')"
                v-model="reward_discount_temp"
                style="width: 312px"
                :disabled="!info_reward_total"
              />
              <button class="no-round-btn" style="width: 230px"
                      @click="useReward"
                      :disabled="reward_discount_temp>info.rewards || !info_reward_total">{{$t('use_reward')}}
              </button>
              <div style="color: red" v-if="info.rewards<reward_discount_temp">{{$t('use_reward_now')}}</div>
            </div>
            <div class="red-color coupon-msg-sm mt-10px"
                 v-if="$store.state.currency==='tw'"
                 v-show="info_reward_total>0"
            >
              {{$t('have_now')}} <span class="primary-color">{{info_reward_total}}</span>
              {{$t('point_reward')}}
              <a v-if="info.reward&&info.reward[0]">
                {{$t('to')}}{{info.reward[0].end_date}}{{$t('overr')}}
              </a>
            </div>
            <div class="coupon-msg"
                 v-else
                 v-show="info.member_number"
            >
              {{$t('have_now')}} <span class="primary-color">
              {{info.rewards}}{{$t('point')}} ($NT{{info.rewards}})</span>
              {{$t('reward')}}
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="cart-total_block">
              <h2 class="mb-20px">{{$t('price_detail')}}</h2>
              <table class="table mb-20px">
                <colgroup>
                  <col span="1" style="width: 50%"/>
                  <col span="1" style="width: 50%"/>
                </colgroup>
                <tbody>
                <tr>
                  <th>{{$t('order_total')}}</th>
                  <td style="text-align: right"
                      v-if="$store.state.currency==='tw'"
                  >${{cartVm.product_total|commaFormat}}
                  </td>
                  <td style="text-align: right"
                      v-else
                  >${{currencyChange(cartVm.product_total)|commaFormat}} (NT${{cartVm.product_total|commaFormat}})
                  </td>
                </tr>
                <!--活動折抵-->
                <tr v-for="el in cartVm.in_activity_obj" :key="el.activity_id">
                  <td colspan="2">
                    <div class="mb-20px"><span style="color: #0b1d37;">組合優惠折抵</span></div>
                    <div class="d-flex align-items-center">
                      <div style="flex: 50%"><p>{{el.activity_detail.ch_name}}</p></div>
                      <div style="flex: 50%; text-align: right">
                        <p class="primary-color"
                          v-if="$store.state.currency==='tw'"
                        >-${{cartVm.activitySave(el)|commaFormat}}</p>
                        <p class="primary-color"
                          v-else
                        >-${{currencyChange(cartVm.activitySave(el))|commaFormat}}
                          (-$NT{{cartVm.activitySave(el)|commaFormat}})</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr v-if="coupon_instance&&coupon_instance.status&&coupon_instance.role<=cartVm.product_total">
                  <th>{{$t('coupon_used')}}</th>
                  <td style="text-align: right">
                    <p class="primary-color"
                       v-if="$store.state.currency==='tw'"
                    >-${{coupon_discount|commaFormat}}</p>
                    <p class="primary-color"
                       v-else
                    >-${{currencyChange(coupon_discount)|commaFormat}} (-$NT{{coupon_discount|commaFormat}})</p>
                  </td>
                </tr>
                <tr v-if="reward_discount">
                  <th>{{$t('reward_used')}}</th>
                  <td>
                    <p class="primary-color"
                       v-if="$store.state.currency==='tw'"
                    >-${{reward_discount|commaFormat}}</p>
                    <p class="primary-color"
                       v-else
                    >-${{currencyChange(reward_discount)|commaFormat}} (-$NT{{reward_discount|commaFormat}})</p>
                  </td>
                </tr>
                <tr>
                  <th>{{$t('total')}}</th>
                  <td style="text-align: right"
                      v-if="$store.state.currency==='tw'"
                  >${{cartVm.total_count|commaFormat}}
                  </td>
                  <td style="text-align: right"
                      v-else
                  >${{currencyChange(cartVm.total_count) |commaFormat}} ($NT{{cartVm.total_count|commaFormat}})
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="checkout-method">
                <button
                  class="no-round-btn"
                  @click="checkOrder"
                >
                  {{$t('next')}}
                </button>
                <div style="color: red">{{weight_message}}</div>
              </div>
              <div class="text-align-center mt-30px">
                {{$t('pay_get')}} <span class="primary-color">{{reward}}</span> {{$t('point_reward')}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-layout" v-if="!items.length">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="shop-sidebar">
              <button class="no-round-btn" id="filter-sidebar--closebtn">{{$t('back_member_center')}}</button>
              <div class="shop-sidebar_department">
                <div class="department_top mini-tab-title underline">
                  <h2 class="title">{{$t('member_center')}}</h2>
                </div>
                <div class="department_bottom">
                  <ul>
                    <li>
                      <nuxt-link class="department-link" to="/member-centre"
                      >{{$t('account_detail')}}
                      </nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="department-link" to="/wishlist"
                      >{{$t('my_favourite')}}
                      </nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="department-link" to="/ordertracking"
                      >{{$t('order_record')}}
                      </nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>


            </div>
            <div class="filter-sidebar--background" style="display: none"></div>
          </div>
          <div class="col-xl-9 p0">
            <div class="shopping-cart">
              <div class="container">
                <div class="product-table" style="margin-top: 9px">

                  <div class="row">
                    <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
                      <img src="images/webs/shop_cart_nodata.svg" alt="" class="max-width-100pa">
                      <h2 class="mt-5 speicail-h2">{{$t('cart_no_product')}}</h2>
                      <nuxt-link to="/"
                                 class="banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('to_buy')}}
                      </nuxt-link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ValidateModal v-model="no_validate_modal"></ValidateModal>
    <CartSpecificationModal></CartSpecificationModal>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import mixinCategory from "@/mixins/mixinCategory"
  import CartProduct from "@/components/CartProduct"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import ValidateModal from "@/components/ValidateModal"
  import CartSpecificationModal from "@/components/CartSpecificationModal"
  import {createVm} from "@/assets/js/cartVm"
  import {couponMixin, RewardMixin} from "@/mixins/shopCartMixin"


  export default {
    name: 'ShopCart',
    mixins: [RewardMixin, couponMixin, mixinCategory, mixinDefaultInit],
    components: {
      CartProduct,
      ValidateModal,
      CartSpecificationModal
    },
    fetch(ctx) {
      let $cookies = ctx.app.$cookies
      return fetchReturn(ctx, [
        ctx.store.dispatch('cart/getList', {cart: JSON.stringify($cookies.get('cart'))}),
        ctx.store.dispatch('rewardrecord/getList'),
        ctx.store.dispatch('freeshipping/getList'),
        ctx.store.dispatch('member/info')
      ])
    },
    data() {
      let cartVm = createVm(this)

      return {
        cartVm,
        cart: {},
        timout_instance: null,
        coupon: null,
        coupon_message: '',
        coupon_instance: null,
        product_total: 0,//商品總金額
        weight: 0,
        weight_message: '',
        reward: 0, // 預計獲得的忠誠點數
        reward_discount: 0,
        reward_discount_temp: 0, // temp 是放在input 不能讓他輸入超過被放入reward_discount
        no_validate_modal: false
      }
    },
    computed: {
      ...mapState('cart_specification_modal', {
        cart_spec_modal: state => state.modal,
      }),
      ...mapState('membertoken', {
        has_token: state => state.has_token
      }),
      ...mapState('cart', {
        items: state => state.items
      }),
      ...mapState('freeshipping', {
        freeshippings: state => state.items
      }),
      ...mapState('member', {
        info: state => state.item
      }),
    },
    watch: {},
    methods: {
      currencyChange(val) {
        // 轉換金額
        let ret = val * this.$store.state.price.item[this.$store.state.currency]
        return parseFloat(ret.toFixed(2))
      },
      any_out_of_stock() {
        // 判斷有沒缺貨
        for (let el of this.$refs.cart_products) {
          if (el.stock_display_text === '缺貨') {
            return true
          }
        }
        return false
      },
      checkOrder() {
        // 判斷如果缺貨就不做後面的事
        if (this.any_out_of_stock()) {
          this.$toast.warning('商品缺貨請確認')
          return
        }

        this.setCopupon2Cookie()
        this.setReward2Cookie()
        this.weight_message = ''
        let max_weight = this.cartVm.getAllowMaxWeight()
        if (this.weight > max_weight) {
          this.weight_message = `超出最大重量 ${max_weight} 公斤`
          return
        }

        // 沒有登入 跳進去登入頁面
        if (!this.has_token) {
          this.$router.push('/login')
          return
        }

        // to next page
        if (this.info.validate) {
          this.$router.push('/order-checkout')
        } else {
          this.no_validate_modal = true
        }
      },
      remove(id) {
        if (this.has_token) {
          this.apiRemove(id)
        }
      },
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped></style>
