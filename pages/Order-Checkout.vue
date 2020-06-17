<template>
  <div>
    <breadcrumb :end="$t('write')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="order-step">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="order-step_block">
              <div class="row no-gutters">
                <div class="col-12 col-md-4">
                  <div class="step-block">
                    <div class="step">
                      <h2>{{$t('cart')}}</h2><span>01</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="step-block active">
                    <div class="step">
                      <h2>{{$t('write_data')}}</h2><span>02</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="step-block">
                    <div class="step">
                      <h2>{{$t('order_final')}}</h2><span>03</span>
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
    <div class="shop-checkout">
      <div class="container">
        <CForm
          @submit="submit"
          ref="form"
        >
          <div class="row">
            <div class="col-12 col-lg-8">

              <h2 class="form-title">{{$t('order_method')}}</h2>
              <!--運送方式-->
              <div class="form-group" v-if="!loading">
                <CInput
                  title="運送國籍"
                  placeholder=""
                  :input_has_bg="true"
                  class="input-radio-display"
                >
                  <!--台灣-->
                  <label for="taiwan" class="custom-label inline-row ml-10px mr-20px">
                    <input type="radio" id="taiwan" :value="1" v-model="location">
                    <div class="radio-icon"></div>
                    <span>台灣</span>
                  </label>
                  <!--海外-->
                  <label for="oversea" class="custom-label inline-row">
                    <input v-if="cash_on_delivery_weight_ok" type="radio" id="oversea" :value="2"
                         v-model="location">
                    <div class="radio-icon"></div>
                    <span v-if="cash_on_delivery_weight_ok">海外（Oversea）</span>
                  </label>

                </CInput>
              </div>
              <div class="form-group" v-if="!loading">
                <CInput
                  :title="$t('pay_method')"
                  placeholder=""
                  :input_has_bg="true"
                  class="input-radio-display"
                >
                  <!--線上付款-->
                  <label for="payradio_1" class="custom-label inline-row ml-10px mr-20px">
                    <input type="radio" id="payradio_1" :value="0" v-model="pay_type">
                    <div class="radio-icon"></div>
                    <span>{{$t('pay_online')}}</span>
                  </label>

                  <!--貨到付款-->
                  <label for="payradio_2" class="custom-label inline-row ml-10px mr-20px" v-if="delivery_ok&&location!==2">
                    <input  type="radio" id="payradio_2" :value="1" v-model="pay_type">
                    <div class="radio-icon"></div>
                    <span for="payradio_2">{{$t('pay_later')}}</span>
                  </label>
                </CInput>
              </div>
              <!--運送方式-->
              <div class="form-group" v-if="!loading">
                <CInput
                  :title="$t('order_method')"
                  placeholder=""
                  :input_has_bg="true"
                  class="input-radio-display"
                >
                <span v-for="(el,key) of in_weight_and_location_freeshippings" class="ml-5px">
                  <label :for="`radio_${el.id}`" class="custom-label inline-row ml-5px mr-20px">
                    <input type="radio" :id="`radio_${el.id}`" :value="el.id" v-model="freeshipping_id"
                          :disabled="pay_type===1&&!el.cash_on_delivery">
                    <div class="radio-icon"></div>
                    <span :class="pay_type===1&&!el.cash_on_delivery?'disabled':''">{{el.frontend_name}}</span>
                  </label>
                </span>
                </CInput>
              </div>
              <!--常用地址 button-->
              <div class="form-group" v-if="freeshipping_target&&!freeshipping_target.cash_on_delivery">
                <button class="no-round-btn" type="button" @click="address_modal=true">{{$t('common_address')}}
                </button>
              </div>
              <!--國內地址-->
              <div v-if="freeshipping_target&&!freeshipping_target.cash_on_delivery&&location==1">
                <div class="form-group">
                  <CInput
                    :placeholder="$t('shipping_code')+'*'"
                    :required="true"
                    name="shipping_area"
                    :input_has_bg="true"
                  />
                </div>
                <div class="form-group">
                  <CInput
                    :placeholder="$t('address')+'*'"
                    :required="true"
                    name="shipping_address"
                    :input_has_bg="true"
                  />
                </div>
                <div class="form-group">
                  <CInput
                    :placeholder="$t('shipping_name')+'*'"
                    :required="true"
                    name="shipping_name"
                    :input_has_bg="true"
                    :validators="[recieveName]"
                  />
                </div>
                <div class="form-group">
                  <CInput
                    title="稱謂"
                    placeholder=""
                    :input_has_bg="true"
                    class="input-radio-display"
                  >
                    <!--台灣-->
                    <label for="sir" class="custom-label inline-row ml-0px mr-20px">
                      <input type="radio" id="sir" :value="1" v-model="location">
                      <div class="radio-icon"></div>
                      <span>先生</span>
                    </label>

                    <!--海外-->
                    <label for="sis" v-if="cash_on_delivery_weight_ok" class="custom-label inline-row">
                      <input v-if="cash_on_delivery_weight_ok" type="radio" id="sis" :value="2"
                           v-model="location">
                      <div class="radio-icon"></div>
                      <span>小姐</span>
                    </label>

                    
                    
                  </CInput>
                </div>
                <div class="form-group">
                  <CInput
                    :placeholder="$t('shipping_phonee')+'*'"
                    :required="true"
                    name="phone"
                    :input_has_bg="true"
                    :validators="[checkPhone]"
                  />
                </div>
                <div class="form-group">
                  <div class="input-radio-display">
                    <input id="check_address_location1" type="checkbox" v-model="check_address">
                    <label for="check_address_location1">{{$t('save_address')}}</label>
                  </div>
                </div>
              </div>

              <!--海外地址-->
              <div v-if="freeshipping_target&&!freeshipping_target.cash_on_delivery&&location===2">
                <div class="form-group">
                  <CInput
                    title="Country"
                    placeholder=""
                    :required="false"
                    name="country"
                    :input_has_bg="true"
                  >
                    <select
                      v-model="country" class="custom-select mt-10px"
                    >
                      <option :value="el"
                              v-for="el of country_list"
                              :key="el"
                      >{{el}}
                      </option>
                    </select>
                  </CInput>
                </div>
                <div class="form-group">
                  <CInput
                    title="Gender"
                    placeholder=""
                    :input_has_bg="true"
                    class="input-radio-display"
                  >
                    <!--台灣-->
                    <label for="radio_location1" class="custom-label inline-row ml-10px mr-20px">
                      <input type="radio" id="radio_location1" :value="1" v-model="location">
                      <div class="radio-icon"></div>
                      <span>Mr.</span>
                    </label>
                    <!--海外-->
                    <label for="radio_location2" class="custom-label inline-row" v-if="cash_on_delivery_weight_ok" >
                      <input v-if="cash_on_delivery_weight_ok" type="radio" id="radio_location2" :value="2"
                           v-model="location">
                      <div class="radio-icon"></div>
                      <span>Mrs.</span>
                    </label>
                  </CInput>
                </div>
                <!--姓名：first name/last name-->
                <div class="row">
                  <div class="form-group col-6">
                    <CInput
                      placeholder="First name*"
                      :required="true"
                      name="first_name"
                      :input_has_bg="true"
                      :validators="[recieveName]"
                    />
                  </div>
                  <div class="form-group col-6">
                    <CInput
                      placeholder="Last name*"
                      :required="true"
                      name="last_name"
                      :input_has_bg="true"
                      :validators="[recieveName]"
                    />
                  </div>
                </div>
                <!--地址:Address-->
                <div class="form-group">
                  <CInput
                    placeholder="Address*"
                    :required="true"
                    name="shipping_address"
                    :input_has_bg="true"
                  />
                </div>
                <!--大樓名字-->
                <div class="form-group">
                  <CInput
                    placeholder="Apartment /Suite /  Building( Optional )"
                    :required="false"
                    name="building"
                    :input_has_bg="true"
                  />
                </div>
                <!--公司名字-->
                <div class="form-group">
                  <CInput
                    placeholder="Company name( Optional )"
                    :required="false"
                    name="company_name"
                    :input_has_bg="true"
                  />
                </div>
                <!--城市/郵遞區號: City/Postal Code-->
                <div class="row">
                  <div class="form-group col-6">
                    <CInput
                      placeholder="City*"
                      :required="true"
                      name="city"
                      :input_has_bg="true"
                    />
                  </div>
                  <div class="form-group col-6">
                    <CInput
                      placeholder="Postal code*"
                      :required="true"
                      name="postal_code"
                      :input_has_bg="true"
                    />
                  </div>
                </div>

                <!--電話-->
                <div class="form-group">
                  <CInput
                    placeholder="Phone number*"
                    :required="true"
                    name="phone"
                    :input_has_bg="true"
                    :validators="[checkPhone]"
                  />
                </div>
                <div class="form-group"
                     v-if="selected_memberstores.length!==0||!freeshipping_target.use_ecpay_delivery">
                  <div class="row">
                    <div class="col-6">
                      <CInput
                        placeholder="Height"
                        :required="false"
                        name="phone"
                        :input_has_bg="true"
                        :validators="[checkPhone]"
                        style="width: 360px"
                        suffix="RMB"
                      />
                    </div>
                    <div class="col-6">
                      <CInput
                        placeholder="Weight"
                        :required="false"
                        name="phone"
                        :input_has_bg="true"
                        :validators="[checkPhone]"
                        style="width: 360px"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group"
                     v-if="selected_memberstores.length!==0||!freeshipping_target.use_ecpay_delivery">
                  <CInput
                    placeholder="Birthday"
                    :required="false"
                    name="phone"
                    :input_has_bg="true"
                    :validators="[checkPhone]"
                  />
                </div>
                <!--儲存常用地址-->
                <div class="form-group">
                  <div class="input-radio-display">
                    <input id="check_address" type="checkbox" v-model="check_address">
                    <label for="check_address">{{$t('save_address')}}</label>
                  </div>
                </div>
              </div>
              <!--貨到付款-->
              <div v-if="freeshipping_target&&freeshipping_target.cash_on_delivery">
                <div v-for="el of selected_memberstores" :key="el.id" class="input-radio-display">
                  <label :for="`memberstore_radio_${el.id}`" class="custom-label inline-row ml-0px mr-20px">
                    <input type="radio" :id="`memberstore_radio_${el.id}`" :value=el.id v-model="memberstore_id">
                    <div class="radio-icon"></div>
                    <span>{{el.store_name}}</span>
                  </label>
                </div>
                <button class="no-round-btn mt-20px mb-20px" type="button" @click="createNewAddress">
                  {{selected_memberstores.length?$t('rechoose_store'):$t('choose_store')}}
                </button>
                <div class="form-group" v-if="!freeshipping_target.use_ecpay_delivery">
                  <CInput
                    :required="true"
                    placeholder="分店名稱*"
                    name="store_name"
                    :input_has_bg="true"
                  />
                </div>
                <div class="form-group" v-if="!freeshipping_target.use_ecpay_delivery">
                  <CInput
                    placeholder="分店店號*"
                    :required="true"
                    name="store_id"
                    :input_has_bg="true"
                  />
                </div>
                <div class="form-group"
                     v-if="selected_memberstores.length!==0||!freeshipping_target.use_ecpay_delivery">
                  <CInput
                    :placeholder="$t('shipping_name')+'*'"
                    :required="true"
                    name="shipping_name"
                    :input_has_bg="true"
                    :validators="[recieveName]"
                  />
                </div>
                <div class="form-group">
                  <CInput
                    title="稱謂"
                    placeholder=""
                    :input_has_bg="true"
                    class="input-radio-display"
                  >
                    <!--台灣-->
                    <a class="col-8"></a>
                    <input type="radio" id="radio_location1" :value="1" v-model="location">
                    <label for="radio_location1" class="col-3">先生</label>
                    <!--海外-->
                    <input v-if="cash_on_delivery_weight_ok" type="radio" id="radio_location2" :value="2"
                           v-model="location">
                    <label v-if="cash_on_delivery_weight_ok" for="radio_location2" class="col-3">小姐</label>
                  </CInput>
                </div>
                <div class="form-group"
                     v-if="selected_memberstores.length!==0||!freeshipping_target.use_ecpay_delivery">
                  <CInput
                    :placeholder="$t('shipping_phonee')+'*'"
                    :required="true"
                    name="phone"
                    :input_has_bg="true"
                    :validators="[checkPhone]"
                  />
                </div>
                <div class="form-group"
                     v-if="selected_memberstores.length!==0||!freeshipping_target.use_ecpay_delivery">
                  <div class="row">
                    <div class="col-6">
                      <CInput
                        placeholder="身高"
                        :required="false"
                        name="phone"
                        :input_has_bg="true"
                        :validators="[checkPhone]"
                        style="width: 360px"
                        suffix="RMB"
                      />
                    </div>
                    <div class="col-6">
                      <CInput
                        placeholder="體重"
                        :required="false"
                        name="phone"
                        :input_has_bg="true"
                        :validators="[checkPhone]"
                        style="width: 360px"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group"
                     v-if="selected_memberstores.length!==0||!freeshipping_target.use_ecpay_delivery">
                  <CInput
                    placeholder="生日"
                    :required="false"
                    name="phone"
                    :input_has_bg="true"
                    :validators="[checkPhone]"
                  />
                </div>
              </div>
              <!--    先做好 但暫時不需要發票資訊          -->

              <!--              <h2 class="form-title">發票資訊</h2>-->
              <!--              <div class="form-group">-->
              <!--                <CInput-->
              <!--                  title="付款方式"-->
              <!--                  placeholder=""-->
              <!--                  :input_has_bg="true"-->
              <!--                  class="input-radio-display"-->
              <!--                >-->
              <!--                  <input type="radio" id="other_id_1" :value="0" v-model="other_info">-->
              <!--                  <label for="other_id_1">個人</label>-->
              <!--                  <input type="radio" id="other_id_2" :value="1" v-model="other_info">-->
              <!--                  <label for="other_id_2">公司</label>-->
              <!--                </CInput>-->
              <!--              </div>-->

              <!--              <div class="row">-->
              <!--                <div class="col-6 form-group" v-if="other_info===1">-->
              <!--                  <CInput-->
              <!--                    title="統編"-->
              <!--                    placeholder=""-->
              <!--                    name="bussiness_number"-->
              <!--                    :input_has_bg="true"-->
              <!--                  />-->
              <!--                </div>-->
              <!--                <div class="col-6 form-group" v-if="other_info===1">-->
              <!--                  <CInput-->
              <!--                    title="抬頭（公司名稱）"-->
              <!--                    placeholder=""-->
              <!--                    name="company_title"-->
              <!--                    :input_has_bg="true"-->
              <!--                  />-->
              <!--                </div>-->
              <!--              </div>-->

              <div class="form-group">
                <CInput
                  :placeholder="$t('ororder_remark')"
                  :input_has_bg="true"
                >
                  <textarea class="textarea-form-bg" name="" cols="30" rows="7" v-model="order_remark"
                  ></textarea>
                </CInput>
              </div>

            </div>
            <div class="col-12 col-md-12 col-lg-4">
              <h2 class="form-title">{{$t('order_detail')}}</h2>
              <div class="shopping-cart">
                <div class="cart-total_block">
                  <table class="table border">
                    <colgroup>
                      <col span="1" style="width: 50%">
                      <col span="1" style="width: 50%">
                    </colgroup>
                    <tbody>
                    <tr v-for="cart of carts"
                        :id="cart.id"
                    >
                      <th class="name gray-text2">{{cart.product.name}} x {{cart.quantity}}</th>
                      <td class="price black" style="border-top: 0"
                          v-if="$store.state.currency==='tw'"
                      >${{cart.specification_detail.price*cart.quantity|commaFormat}}
                      </td>
                      <td class="price black" style="border-top: 0"
                          v-else
                      >${{currencyChange(cart.specification_detail.price*cart.quantity)|commaFormat}}
                        ($NT{{cart.specification_detail.price*cart.quantity|commaFormat}})
                      </td>
                    </tr>
                    <tr>
                      <th class="gray-text2">{{$t('order_total')}}</th>
                      <td class="price"
                          v-if="$store.state.currency==='tw'"
                      >${{total|commaFormat}}
                      </td>
                      <td class="price"
                          v-else
                      >${{currencyChange(total)|commaFormat}} ($NT{{total|commaFormat}})
                      </td>
                    </tr>
                    <tr v-show="coupon&&coupon.status&&coupon.role<=total">
                      <th>{{$t('coupon_used')}}</th>
                      <td>
                        <div class="primary-color text-right"
                             v-if="$store.state.currency==='tw'"
                        >-${{coupon_discount|commaFormat}}
                        </div>
                        <div class="primary-color text-right"
                             v-else
                        >-${{currencyChange(coupon_discount)|commaFormat}} (-$NT{{coupon_discount|commaFormat}})
                        </div>
                      </td>
                    </tr>
                    <!--活動折抵-->
                    <tr v-for="el in in_activity_obj" :key="el.activity_id">
                      <td colspan="2">
                        <div class="mb-20px text-align: left;"><span style="color: #0b1d37;">組合優惠折抵</span></div>
                        <div class="d-flex align-items-center">
                          <div class="gray-text2" style="flex:50%; text-align: left;">{{el.activity_detail.ch_name}}</div>
                          <div style="flex:50%;">
                            <div class="primary-color text-right"
                                v-if="$store.state.currency==='tw'"
                            >-${{activitySave(el)|commaFormat}}
                            </div>
                            <div class="primary-color text-right"
                                v-else
                            >-${{currencyChange(activitySave(el))|commaFormat}} (-$NT{{activitySave(el)|commaFormat}})
                            </div>
                          </div>
                        </div>
                      </td>
                      
                    </tr>

                    <tr v-show="reward_discount">
                      <th class="gray-text2">{{$t('reward_used')}}</th>
                      <td>
                        <div class="primary-color text-right"
                             v-if="$store.state.currency==='tw'"
                        >-${{reward_discount|commaFormat}}
                        </div>
                        <div class="primary-color text-right"
                             v-else
                        >-${{currencyChange(reward_discount)|commaFormat}} (-$NT{{reward_discount|commaFormat}})
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="gray-text2">{{$t('shipping')}}</th>
                      <td>
                        <div class="text-right"
                             v-if="$store.state.currency==='tw'"
                        >+${{freeshipping_price|commaFormat}}
                          {{freeshipping_price>0?'':'0'}}
                        </div>
                        <div class="text-right"
                             v-else
                        >+${{currencyChange(freeshipping_price)|commaFormat}} (+$NT{{freeshipping_price|commaFormat}})
                          {{freeshipping_price>0?'':$t('over_freeshipping')}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="gray-text2">{{$t('total')}}</th>
                      <td class="total"
                          v-if="$store.state.currency==='tw'"
                      >${{total_count|commaFormat}}
                      </td>
                      <td class="total"
                          v-else
                      >${{currencyChange(total_count)|commaFormat}} ($NT{{total_count|commaFormat}})
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="checkout-method">
                  <button class="normal-btn no-round-btn submit-btn" @click="ok">{{$t('next')}}
                  </button>
                </div>

                <br>
                <div class="text-align-center mt-30px">{{$t('pay_get')}}
                  <span class="primary-color" v-if="$store.state.currency==='tw'">{{reward}}</span>
                  <span class="primary-color" v-else>{{currencyChange(reward)}} ($NT{{reward}})</span>
                  {{$t('point_reward')}}
                </div>
              </div>
            </div>
          </div>
        </CForm>
      </div>
      <div v-html="html"></div>
      <OrderAddressModal v-model="address_modal" :myself="myself" :location="location"
                         @ok="updateFields"></OrderAddressModal>
    </div>
  </div>
</template>

<script>
  import CInput from "@/components/CInput"
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import CForm from "@/components/CForm"
  import validator from "@/mixins/validator"
  import {mapState} from 'vuex'
  import OrderAddressModal from "@/components/OrderAddressModal"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  const cookieparser = process.server ? require('cookieparser') : undefined

  export default {
    name: 'Order-Checkout',
    components: {
      CInput,
      CForm,
      OrderAddressModal
    },
    mixins: [validator, mixinDefaultInit],
    data() {
      return {
        country: null,
        location: 1,
        check_address: false,
        other_info: 0,
        address_modal: false,
        order_remark: null,
        html: null,
        freeshipping_id: null,
        memberstore_id: null,
        default_memberaddress: null,
        pay_type: 0,
        reward: 0,
        reward_discount: 0,
      }
    },
    computed: {
      delivery_ok() {
        // 允許貨到付款
        if (!this.cash_on_delivery_weight_ok) {
          return false
        }
        let ret = false
        for (let el of this.in_weight_and_location_freeshippings) {
          if (this.pay_type !== 1 || el.cash_on_delivery) {
            ret = true
            break
          }
        }
        return ret
      },
      ...mapState('member', {
        myself: state => state.item
      }),
      ...mapState('country', {
        country_list: state => state.items
      }),
      ...mapState('freeshipping', {
        freeshippings: state => state.items
      }),
      ...mapState('memberstore', {
        items: state => state.items
      }),
      ...mapState('coupon', {
        coupon: state => state.item
      }),
      ...mapState('cart', {
        carts: state => state.items,
      }),
      in_activity_obj() {
        let in_activity_obj = {}
        for (let cart of this.carts) {
          let activity_detail = cart.product.activity_detail
          if (!activity_detail) {
            continue
          }
          let activity_id = activity_detail.id
          if (!in_activity_obj.hasOwnProperty(activity_id)) {
            in_activity_obj[activity_id] = {
              activity_id,
              activity_detail: activity_detail,
              save_count: 0,// 省下商品數量
              product_count: 0,// 確認商品數量
              limit_count: activity_detail.buy_count + activity_detail.give_count,
              price_list: [],
            }
          }
          for (let i = 0; i < cart.quantity; i++) {
            in_activity_obj[activity_id].price_list.push(cart.specification_detail.price)
            in_activity_obj[activity_id].product_count += 1
          }
          in_activity_obj[activity_id].save_count = parseInt(
            in_activity_obj[activity_id].product_count / in_activity_obj[activity_id].limit_count
          ) * activity_detail.give_count

          in_activity_obj[activity_id].price_list.sort()
        }
        let ret = {}
        for (let key in in_activity_obj) {
          let el = in_activity_obj[key]
          if (el.save_count) {
            ret[key] = {...el}
          }
        }
        return ret
      },
      sub_type() {
        return this.freeshipping_target ? this.freeshipping_target.sub_type : null
      },
      in_weight_and_location_freeshippings() {
        // 只顯示沒有超重的運送方式
        return this.freeshippings.filter(x => x.weight > this.total_weight && x.location === this.location)
      },
      cash_on_delivery_weight_ok() {
        // 貨到付款 裡面只要有一個人的重量符合標準 則等於 true
        let ret = false
        for (let el of this.freeshippings) {
          if (!el.cash_on_delivery) {
            continue
          }
          if (el.weight > this.total_weight) {
            ret = true
            break
          }
        }
        return ret
      },
      coupon_discount() {
        if (this.coupon && this.coupon.status && this.coupon.role <= this.total) {
          if (this.coupon.method === 1) {
            return this.coupon.discount
          } else {
            return parseInt(this.coupon.discount * this.total / 100)
          }
        } else {
          return 0
        }
      },

      freeshipping_price() {
        if (!this.freeshipping_target) {
          return null
        }
        if (this.freeshipping_target.weight >= this.total_weight) {
          let price = this.freeshipping_target.price
          if (this.freeshipping_target.role <= this.total) {
            price = 0
          }
          return price
        }
        return null
      },
      freeshipping_target() {
        let items = this.freeshippings.filter(x => x.id === this.freeshipping_id)
        return items.length ? items[0] : null
      },
      selected_memberstores() {
        /**
         * 該店家所選擇的店家資訊
         * */
        let ret = []
        ret = this.items.filter(x => x.sub_type === this.sub_type)
        return ret
      },
      total() {
        let total = 0
        for (let cart of this.carts) {
          total += cart.specification_detail.price * cart.quantity
        }
        return total
      },
      total_count() {
        let activity = 0
        for (let key in this.in_activity_obj) {
          let el = this.in_activity_obj[key]
          activity += this.activitySave(el)
        }
        let ret = this.total - activity - this.coupon_discount - this.reward_discount + this.freeshipping_price
        return ret > 0 ? ret : 0
      },
      total_weight() {
        let weight = 0
        for (let cart of this.carts) {
          weight += cart.specification_detail.weight * cart.quantity
        }
        return Math.round(weight * 100) / 100
      },
    },
    watch: {
      location(val) {
        if (val === 2) {
          this.pay_type = 0
        }
      },
      delivery_ok(val) {
        if (!val && this.pay_type === 1) {
          this.pay_type = 0
        }
      },
      'country_list.length'(val) {
        if (val.length) {
          this.country = val[0]
        }
      },
      freeshippings() {
        this.initFreeshippingId()
      },
      pay_type(val) {
        /**
         * 如果選擇 貨到付款做以下判斷
         * 如果本來就是選擇貨到付款的話就不更動 反之 則選到超商的第一筆資料
         * **/
        if (val === 1) {
          let items = this.freeshippings.filter(x => x.cash_on_delivery && x.id === this.freeshipping_id)
          if (items.length) {
            return
          }
          for (let el of this.freeshippings) {
            if (el.cash_on_delivery) {
              this.freeshipping_id = el.id
              break
            }
          }
        }
      },
      total_count() {
        this.getReward()
      }
    },
    created() {
      this.reward_discount = this.$cookies.get('reward_discount')
      try {
        this.reward_discount = parseInt(this.reward_discount)
      } catch (e) {

      }
      this.getReward()
      this.default_memberaddress = this.myself.default_memberaddress

      this.initFreeshippingId()
      if (this.$route.query.freeshipping_id) {
        this.freeshipping_id = parseInt(this.$route.query.freeshipping_id)
        this.$nextTick(() => {
          this.memberstore_id = this.selected_memberstores.length ? this.selected_memberstores[0].id : null
        })
      }
      if (this.$route.query.pay_type !== undefined) {
        this.pay_type = this.$route.query.pay_type
      }
    },
    methods: {
      activitySave(el) {
        let count = el.save_count
        let ret = 0
        let price_list = [...el.price_list]
        while (count) {
          count -= 1
          ret += price_list.shift()
        }
        return ret
      },
      ok() {
      },
      initFreeshippingId() {
        if (this.freeshippings.length) {
          this.freeshipping_id = this.freeshippings[0].id
        }
      },
      createNewAddress() {
        // 如果ECPAY 就選店家 map
        if (this.freeshipping_target.use_ecpay_delivery) {
          let obj = {
            callback_url: location.origin + `/order-checkout?freeshipping_id=${this.freeshipping_id}&pay_type=${this.pay_type}`,
            sub_type: this.sub_type
          }
          this.$api.ecpay.get_store(obj).then(res => {
            this.htmlToEcpay(res)
            this.$nextTick(() => {
              this.$refs.form.resetError()
            })
          })
          // 如果不是ECPAY 店家 EX: OK 超商
        } else {
          window.open('https://www.okmart.com.tw/convenient_shopSearch')
        }

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
      htmlToEcpay(res) {
        this.html = res.data.html
        this.$nextTick(() => {
          if (document.getElementById("data_set")) {
            document.getElementById("data_set").submit()
          }
        })
      },
      submit(val) {
        val.location = this.location
        // 海外
        if (this.location === 2) {
          val.country = this.country ? this.country : this.country_list[0]
        }
        val.order_remark = this.order_remark
        val.pay_type = this.pay_type
        val.check_address = this.check_address
        val.reward_discount = this.reward_discount
        val.freeshipping_id = this.freeshipping_target.id
        if (this.coupon && this.coupon.id && this.coupon.status) {
          val.coupon_id = this.coupon.id
        }

        // remove e
        this.$cookies.set('coupon', null)
        if (this.freeshipping_target.cash_on_delivery) {
          val.store_type = this.sub_type
          val.to_store = true
          val.memberstore_id = this.memberstore_id
          let memberstore = this.selected_memberstores.filter(x => x.id === this.memberstore_id)[0]
          if (memberstore) {
            val.store_name = memberstore.store_name
          }
        } else {
          let memberaddress = this.myself.memberaddress.filter(x => x.id === this.default_memberaddress)[0]
          if (memberaddress) {
            val.shipping_address = memberaddress.shipping_address
            val.shipping_area = memberaddress.shipping_area
          }

        }
        this.loading = true
        if (this.pay_type === 0 || this.pay_type === '0') {
          val.callback_url = location.origin + '/order-complete'
          let lang = this.$cookies.get('lang')
          if (lang === 'en') {
            val.lang = 'ENG'
          }
          this.$api.ecpay.payment(val).then(res => {
            if (res.data.html) {
              this.htmlToEcpay(res)
            } else {
              this.$router.push(`/order-complete?order=${res.data.id}`)
            }
          }).catch(() => {
            this.$router.push('/order-fail')
          })
        } else {
          this.$api.ecpay.shipping(val).then((res) => {
            this.$router.push(`/order-complete?order=${res.data.id}`)
          }).catch(() => {
            this.$router.push('/order-fail')
          })
        }

      },
      updateFields(obj) {
        this.$refs.form.setFields(obj)
        this.country = obj.country
      }
    },
    mounted() {
      if (process.client) {
        window.vm = this
      }
      if (this.country_list.length) {
        this.country = this.country_list[0]
      }
    },
    fetch(ctx) {
      let $cookies = ctx.app.$cookies
      let coupon = $cookies.get('coupon')
      if (coupon === 'null') {
        coupon = null
      }
      let ret = [
        ctx.store.dispatch('memberstore/getList'),
        ctx.store.dispatch('cart/getList'),
        ctx.store.dispatch('member/info'),
        ctx.store.dispatch('freeshipping/getList'),
        ctx.store.dispatch('country/getList'),
        ctx.store.dispatch('rewardrecord/getList')]
      if (coupon) {
        ret.push(ctx.store.dispatch('coupon/getRead', coupon))
      }
      return fetchReturn(ctx, ret)
    },

  }
</script>

<style scoped></style>
