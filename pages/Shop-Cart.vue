<template>
  <div>
    <breadcrumb :end="$t('cartt')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="order-step" v-if="items.length">
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
                  <td style="text-align: right">
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

    <!-- 會員未登入顯示的區塊 -->
    <div class="shop-bottombox mt-5" v-if="!has_token">
      <div class="container">
        <div class="shop-boxes">
          <div class="shop-box">
            <div class="shop-main">
              <h3 class="shop-box--title">{{$t('member')}}{{$t('login')}}</h3>
              <div class="shop-box--form">
                <CForm
                  @submit="submit"
                  ref="form"
                >
                  <CInput
                    :title="$t('acc_e')"
                    :required="true"
                    :placeholder="$t('input_email')"
                    name="account"
                    v-model="account"
                    class="mb-20px"
                  />
                  <CInput
                    :title="$t('password')"
                    :required="true"
                    type="password"
                    :placeholder="$t('new_pass')"
                    name="password"
                    v-model="password"
                    class="mb-20px"
                  />
                  <div class="shop-box--form-row">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <label for="keep-infor" class="label-checbox">
                          <input type="checkbox" name="" id="keep-infor" v-model="savepass">
                          <i class="checkbox-icon"></i>
                          <span>{{$t('keep_login')}}</span>
                        </label>
                      </div>
                      <div class="col-12 col-md-6" style="text-align: right">
                        <nuxt-link to="/forgotpassword" class="forgot-password">{{$t('forget_password')}}</nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="account-function">
                    <button class="no-round-btn">{{$t('login')}}
                    </button
                    >
                  </div>
                </CForm>

              </div>
            </div>
          </div>
          <div class="shop-box">
            <div class="shop-main">
              <h3 class="shop-box--title">{{$t('register')}}{{$t('member')}}</h3>
              <div class="shop-box--msg">
                <p>{{$t('register_terms_1_1')}}</p>
                <p>{{$t('register_terms_1_2_1')}}{{reward_2.discount}}{{$t('register_terms_1_2_2')}}</p>
                <p style="color: #dc5555;">{{$t('register_terms_1_3')}}</p>
              </div>
            </div>
            <div class="shop-box--btn" style="text-align: center;">
              <nuxt-link to="/register">
                <button class="no-round-btn" style="min-width: 200px;">{{$t('register_checkout')}}</button>
              </nuxt-link>
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
  import CInput from "@/components/CInput"
  import CForm from "@/components/CForm"


  export default {
    name: 'ShopCart',
    mixins: [RewardMixin, couponMixin, mixinCategory, mixinDefaultInit],
    components: {
      CartProduct,
      ValidateModal,
      CartSpecificationModal,
      CInput,
      CForm,
    },
    fetch(ctx) {
      let $cookies = ctx.app.$cookies
      return fetchReturn(ctx, [
        ctx.store.dispatch('cart/getList', {cart: JSON.stringify($cookies.get('cart'))}),
        ctx.store.dispatch('rewardrecord/getList'),
        ctx.store.dispatch('freeshipping/getList'),
        ctx.store.dispatch('member/info'),
        ctx.store.dispatch('reward/getList')
      ])
    },
    data() {
      let cartVm = createVm(this)

      return {
        // login parameter
        savepass: false,
        account: null,
        password: null,

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
      ...mapState('reward', {
        reward_2: (state) => state.items
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
      any_off_product() {
        // 判斷有沒下架
        for (let el of this.$refs.cart_products) {
          if (!el.item.product.status) {
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
        // 判斷如果下架就不做後面的事
        if (this.any_off_product()) {
          this.$toast.warning('您的購物車有下架商品，請點擊「X」按鈕，刪除後再進行購買！')
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

      // login methods
      loginSuccessProcess() {
        if (/^http/.test(this.$store.state.previous_url)) {
          this.$router.push('/')
          return
        }
        let other_urls = ['register', 'forgotpassword', 'password', 'login']
        for (let url_part of other_urls) {
          if (this.$store.state.previous_url.includes(url_part)) {
            this.$router.push('/')
            return
          }
        }
        this.$router.push(this.$store.state.previous_url)
      },
      setLoginVariable(token) {
        // change cookie & store
        this.$store.commit('setToken', token)
        this.$store.commit('membertoken/changeValue', {key: 'has_token', value: true})
        this.$cookies.set('savepass', this.savepass)
        if (this.savepass) {
          this.$cookies.set('account', this.account)
          this.$cookies.set('password', this.password)
        } else {
          this.$cookies.set('account', null)
          this.$cookies.set('password', null)
        }
      },
      async addTOCart() {
        /**
         * 確認原本購物車有沒有資料 如果有的話就不要新增
         * */
        await this.$store.dispatch('cart/getCount')
        if (this.$store.state.cart.count) {
          return
        }
        let cart = getCookieCart()
        let promist_list = []
        for (let values of cart) {
          promist_list.push(this.$api.cart.postData(values))
        }
        await Promise.all(promist_list)
        this.$cookies.set('cart', [])

      },
      async submit() {
        let val = {
          account: this.account,
          password: this.password
        }
        try {
          let res = await this.$api.member.login(val)
          this.setLoginVariable(res.data.token)
          await this.addTOCart()
          this.loginSuccessProcess()
        } catch (e) {
          this.$toast.error(this.$t('acc_error'))
        }

      }
    },
    created() {
      let savepass = this.$cookies.get('savepass')
      let account = this.$cookies.get('account')
      let password = this.$cookies.get('password')
      try {
        savepass = JSON.parse(savepass)
      } catch (e) {
      }
      if (savepass) {
        this.savepass = savepass
        this.account = account
        this.password = password
      }
    },
    mounted() {
    }
  }
</script>

<style scoped></style>
