<template>
  <div ref="self" class="card-border order-card">
    <div class="order-header relative d-flex">
      <div class="left-btn">
        <button @click="collpase" class="close no-round-btn">
          <i :class="!open?'increase-icon':'decrease-icon'"></i>
        </button>
      </div>
      <div class="header-content pl-45px d-flex align-items-center">
        {{$t('order_number')}} : {{order.order_number}}
      </div>
      <!--      <div v-if="order.pay_status" class="right-content success">{{$t('pay_success')}}</div>-->
      <!--      <div v-else-if="order.pay_type" class="right-content success">{{$t('pay_later')}}</div>-->
      <!--      <div v-else-if="order.take_number" class="right-content success">{{order.payment_type}}</div>-->
      <!--      <div v-else class="right-content fail">{{$t('pay_fail')}}</div>-->
    </div>
    <div ref="detail" class="order-detail">
      <div class="order-detail--main pl-45px pt-15px">
        <div class="mb-20px">{{$t('order_date')}} : {{order.created_at}}</div>
        <div class="mb-20px">{{$t('order_status')}} : {{getText(order,'simple_status_display','en_simple_status_display')}}</div>
        <br>
        <div class="mb-20px">
          {{$t('order_method')}} : {{order.to_store?$t('store'):$t('to_store')}}
        </div>
        <div class="mb-20px" v-show="order.to_store">
          {{$t('store_name')}} : {{order.store_name}}({{order.address}})
        </div>
        <div class="mb-20px" v-show="!order.to_store">
          {{$t('shipping_address')}} : {{order.shipping_area}} {{order.shipping_address}}
        </div>
        <div class="mb-20px">{{$t('shipping_name')}} : {{order.shipping_name}}</div>
        <div class="mb-20px">{{$t('shipping_phonee')}} : {{order.phone}}</div>
        <div class="mb-20px">{{$t('ororder_remarkk')}} : {{order.order_remark}}</div>
        <br>
        <div class="mb-20px">{{$t('order_total')}} : ${{order.product_price|commaFormat}}</div>
        <div class="mb-20px">{{$t('shipping')}} : ＋
          <a v-if="order.freeshipping_price==0" style="color: #0b1d37">${{order.freeshipping_price|commaFormat}}</a>
          <a v-else>${{order.freeshipping_price|commaFormat}}</a>
        </div>
        <div class="mb-20px">{{$t('coupon_used')}} : -${{order.coupon_price|commaFormat}} <a style="color: #0b1d37"
                                                                                             v-show="order.coupon_discount_code">({{order.coupon_discount_code}})</a>
          <div class="mb-20px">{{$t('used_reward')}} : -${{order.reward_price|commaFormat}}</div>
          <div class="mb-20px">{{$t('reward_back')}} : <a
            style="color: #0b1d37">${{target_reward|commaFormat}}</a></div>
          <br>
          <div class="mb-20px">{{$t('total')}} : ${{order.total_price|commaFormat}}</div>
          <div class="mb-20px">{{$t('pay_method')}} : {{order.pay_type?$t('pay_later'):$t('pay_online')}}</div>
          <div class="mb-20px">{{$t('pay_status')}} : {{order_status}}</div>
          <button class="no-round-btn" v-if="!(order.pay_status || order.pay_type || order.shipping_status===400)" @click="repay">{{$t('pay_again')}}
          </button>
        </div>

        <card-border :title="$t('order_detaill')" class="mt-20px">
          <div class="content">
            <div
              class="mb-20px d-flex justify-content-between align-items-center"
              v-for="product of products"
              :key="product.id"
            >
              <div class="t1 img-wrapper">
                <img
                  :src="imageLink(image(product.productimages))"
                  style="width: auto;max-height: 170px"
                  alt="product image"/>
              </div>
              <div class="row flex-grow-1">
                <div class="t2 col-12 col-sm-3">{{product.name}}</div>
                <div class="t3 col-12 col-sm-3">{{$t('specification')}} :
                  {{getSpecName(product.specification_detail)}}
                </div>
                <div class="t4 col-12 col-sm-3">{{$t('count')}} : {{product.quantity}}</div>
                <div class="t5 col-12 col-sm-3 primary-color">
                  NT$ {{product.specification_detail.price*product.quantity|commaFormat}}
                </div>
              </div>
            </div>
          </div>
        </card-border>
        <div class="d-flex mt-10px justify-content-end" v-if="cancel_status">
          <button class="no-round-btn" @click="order_del_modal = true">{{$t('canncel_order')}}</button>
        </div>
      </div>
      <div v-html="html"></div>
    </div>
    <modal v-model="order_del_modal" :title="$t('oOrder_Cancelled')" @ok="ok">
      <CForm
        @submit="submit"
        ref="form"
      >
      </CForm>
    </modal>
  </div>
</template>

<script>
  import CardBorder from '@/components/CardBorder'
  import mixinCategory from "@/mixins/mixinCategory"
  import CForm from "@/components/CForm"
  import langMixin from "@/mixins/langMixin"
  export default {
    mixins: [mixinCategory, langMixin],
    name: 'OrderCard',
    components: {
      CardBorder,
      CForm,
    },
    props: {
      status: {
        type: Boolean,
        default: true
      },
      order: {
        type: Object,
        default: null,
      }
    },
    data() {
      return {
        open:false,
        html: null,
        order_del_modal: false
      }
    },
    computed: {
      cancel_status() {
        return this.order.pay_status === 0 && this.order.simple_status_display !== '已取消' && this.order.shipping_status !== 2 && this.order.simple_status !== 2 && this.order.simple_status_display !== '已出貨' && this.order.simple_status_display !== '待取貨'
      },
      target_reward() {
        // if (this.order.rewrad.length && this.order.rewrad[0].point >= 0) {
        //   return this.order.rewrad[0].point
        // }
        // else if (this.order.rewrad_temp.length){
        // todo check
        if (this.order.rewrad_temp.length){
          return this.order.rewrad_temp[0].point
        }
        else {
          return 0
        }
      },
      order_status() {
        // 根據order status 顯示相對應的文字
        if (this.order.pay_status) {
          return this.$t('pay_success')
        } else if (this.order.pay_type) {
          return this.$t('pay_later')
        } else if (this.order.take_number) {
          return this.order.payment_type
        } else {
          return this.$t('pay_fail')
        }
      },
      products() {
        // 訂單的快照
        return JSON.parse(this.order.product_shot)
      }
    },
    methods: {
      ok() {
        this.$refs.form.submit()
      },
      submit() {
        // 取消訂單 並且重新整理
        this.$api.order.putData(this.order.id, {
          shipping_status: 400
        }).then(() => {
          this.$toast.success(this.$t('Order_Cancelled'))
          this.$router.go()
        })
      },
      cancelOrder() {
        // 取消訂單 並且重新整理
        this.$api.order.putData(this.order.id, {
          shipping_status: 400
        }).then(() => {
          this.$router.go()
        })
      },
      getSpecName(specification_detail) {
        // 組合規格的名字
        let spec1_name = specification_detail.spec1_name
        let spec2_name = specification_detail.spec2_name
        let ret = [spec1_name]
        if (spec2_name) {
          ret.push(spec2_name)
        }
        return ret.join(" - ")
      },
      htmlToEcpay(res) {
        // 取得html 並且更新他會有一個form post 並且觸發submit
        // 這樣才可以觸發綠界金流
        this.html = res.data.html
        this.$nextTick(() => {
          if (document.getElementById("data_set")) {
            document.getElementById("data_set").submit()
          }
        })
      },
      repay() {
        let data = {
          order_id: this.order.id,
          callback_url: location.origin + '/order-complete'
        }
        // 重新付款
        this.$api.ecpay.repayment(data).then(res => {
          this.htmlToEcpay(res)
        })
      },
      image(productimages) {
        for (let img of productimages) {
          // 只抓主畫面的圖片
          if (img.main_image) {
            return img.image_url
          }
        }
      },
      collpase() {
        this.open = !this.open
        // process.client 是只有在client 端才有 用nuxt 需要增加這個if 判斷
        if (process.client) {
          if (this.$refs.detail.style.display === 'block') {
            window.$(this.$refs.detail).slideToggle()
          } else {
            window.$('.card-border .order-detail').each(function () {
              if (this.style.display === 'block') {
                window.$(this).slideToggle()
              }
            })
            window.$(this.$refs.detail).slideToggle()
          }

        }
      }
    }
  }
</script>

<style scoped></style>
