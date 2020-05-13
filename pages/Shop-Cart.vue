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
            <div class="product-table">
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
                  <th class="product-iamge" scope="col">{{$t('product_iamge')}}</th>
                  <th
                    class="product-name"
                    scope="col"
                    style="min-width: 150px;"
                  >
                    {{$t('name_specification')}}
                  </th>
                  <th
                    class="product-name"
                    scope="col"
                    style="min-width: 150px;"
                  >
                    {{$t('specification')}}
                  </th>
                  <th class="product-price" scope="col">{{$t('price')}}</th>
                  <th
                    class="product-quantity"
                    scope="col"
                    style="min-width: 250px"
                  >
                    {{$t('count')}}
                  </th>
                  <th class="product-total" scope="col">{{$t('little_total')}}</th>
                  <th class="product-clear" scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <CartProduct
                  v-for="item of items"
                  :key="item.id"
                  :item="item"
                  @remove="remove"
                  @update="changeCart"
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
                :placeholder="$t('coupon_code')"
                v-model="coupon"
                style="width: 200px"
              />
              <button class="no-round-btn" @click="changeCoupon">{{$t('use_coupon')}}</button>
            </div>
            <div style="color: red">{{this.coupon_message}}</div>
            <div class="coupon mt-20px">
              <input
                class="no-round-input coupon-input"
                type="number"
                :placeholder="$t('used_coupon')"
                v-model="reward_discount_temp"
                style="width: 200px"
                :disabled="getInfo()"
              />
              <button class="no-round-btn"
                      @click="reward_discount= reward_discount_temp>total?total:reward_discount_temp"
                      :disabled="reward_discount_temp>info.rewards || getInfo()">{{$t('use_reward')}}
              </button>
              <div style="color: red" v-if="info.rewards<reward_discount_temp">{{$t('use_reward_now')}}</div>
            </div>
            <div class="coupon-msg"
                 v-if="$store.state.currency==='tw'"
                 v-show="info.member_number"
            >
              {{$t('have_now')}} <span class="primary-color">{{info.rewards}}</span>
              {{$t('point_reward')}}
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
              <h2>{{$t('price_detail')}}</h2>
              <table class="table">
                <colgroup>
                  <col span="1" style="width: 50%"/>
                  <col span="1" style="width: 50%"/>
                </colgroup>
                <tbody>
                <tr>
                  <th>{{$t('total_weight')}}</th>
                  <td>{{weight}} kg</td>
                </tr>
                <tr>
                  <th>{{$t('order_total')}}</th>
                  <td
                    v-if="$store.state.currency==='tw'"
                  >${{total|commaFormat}}
                  </td>
                  <td
                    v-else
                  >${{currencyChange(total)|commaFormat}} (NT${{total|commaFormat}})
                  </td>
                </tr>
                <tr v-if="coupon_instance&&coupon_instance.status&&coupon_instance.role<=total">
                  <th>{{$t('coupon_used')}}</th>
                  <td>
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
                  <td
                    v-if="$store.state.currency==='tw'"
                  >${{total_count|commaFormat}}
                  </td>
                  <td
                    v-else
                  >${{currencyChange(total_count) |commaFormat}} ($NT{{total_count|commaFormat}})
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="checkout-method">
                <button
                  class="normal-btn"
                  @click="checkOrder"
                >
                  {{$t('next_write')}}
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


  export default {
    name: 'ShopCart',
    mixins: [mixinCategory, mixinDefaultInit],
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
      return {
        cart: {},
        timout_instance: null,
        coupon: null,
        coupon_message: '',
        coupon_instance: null,
        total: 0,
        weight: 0,
        weight_message: '',
        reward: 0,
        reward_discount: 0,
        reward_discount_temp: 0,
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
      coupon_discount() {
        if (this.coupon_instance && this.coupon_instance.status && this.coupon_instance.role <= this.total) {
          if (this.coupon_instance.method === 1) {
            return parseInt(this.coupon_instance.discount)
          } else {
            return parseInt(this.coupon_instance.discount * this.total / 100)
          }
        } else {
          return 0
        }
      },
      total_count() {
        let ret = this.total - this.coupon_discount - this.reward_discount
        return ret > 0 ? ret : 0
      }
    },
    watch: {
      coupon_discount() {
        let sum = this.total - this.coupon_discount
        if (sum < this.reward_discount) {
          this.reward_discount = sum
        }
      },
      total() {
        let sum = this.total - this.coupon_discount
        if (sum < this.reward_discount) {
          this.reward_discount = sum
        }
      },
      total_count() {
        this.getReward()
      }
    },
    methods: {
      getInfo() {
        if (this.info.rewards) {
          return false
        }
        return true
      },
      currencyChange(val) {
        let ret = val * this.$store.state.price.item[this.$store.state.currency]
        return parseFloat(ret.toFixed(2))
      },
      getReward() {
        this.$api.ecpay.calc_reward(this.total_count).then(res => {
          this.reward = res.data.reward
        })
      },
      checkOrder() {
        this.weight_message = ''
        if (this.coupon_instance && this.coupon_instance.status && this.coupon_instance.role <= this.total) {
          this.$cookies.set('coupon', this.coupon_instance.discount_code)
        } else {
          this.$cookies.set('coupon', null)
        }
        this.$cookies.set('reward_discount', this.reward_discount)
        let max_wieght = 0
        for (let freeshipping of this.freeshippings) {
          if (freeshipping.weight > max_wieght) {
            max_wieght = freeshipping.weight
          }
        }
        if (this.weight > max_wieght) {
          // todo 跳轉還是怎樣
          this.weight_message = `超出最大重量 ${max_wieght} 公斤`
        } else {
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

        }
      },
      noCouponMessage() {
        this.coupon_message = this.$t('no_coupon')
      },
      changeCoupon() {
        this.coupon_instance = null
        this.$api.coupon.getRead(this.coupon).then(res => {
          if (res.data.status) {
            if (res.data.role > this.total) {
              // todo
              return this.coupon_message = this.$t('cant_use_coupon')
            }
            this.coupon_instance = res.data
            this.coupon_message = ''
          } else {
            this.noCouponMessage()
          }
        }).catch(() => {
          this.noCouponMessage()
        })
      },
      changeCart(id, value) {
        this.cart[id] = value
        this.getTotal()
        this.getWeight()
      },
      apiRemove(id) {
        this.$api.cart.deleteData(id).then(() => {
          let removed_items = this.items.filter(x => x.id !== id)
          this.$store.commit('cart/changeValue', {
            key: 'items',
            value: removed_items
          })
          this.getTotal()
          this.getWeight()
        })
      },
      remove(id) {
        if (this.has_token) {
          this.apiRemove(id)
        } else {
          this.getTotal()
          this.getWeight()
        }
      },
      getTotal() {
        let total = 0
        for (let item of this.items) {
          total += item.product.price * this.cart[item.id].quantity
        }
        this.total = total
      },
      getWeight() {
        let weight = 0
        for (let item of this.items) {
          weight += item.product.weight * this.cart[item.id].quantity
        }
        this.weight = Math.round(weight * 100) / 100
      }
    },
    created() {
      this.getReward()
      this.cart = {}
      for (let item of this.items) {
        this.cart[item.id] = {
          quantity: item.quantity,
          specification: item.specification,

        }
      }
      this.getTotal()
      this.getWeight()
    },
    mounted() {
      this.reward_discount_temp = this.info.rewards > this.total ? this.total : this.info.rewards
      this.reward_discount = this.info.rewards > this.total ? this.total : this.info.rewards
    }
  }
</script>

<style scoped></style>
