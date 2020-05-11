<template>
  <div ref="self" class="card-border order-card">
    <div class="order-header relative d-flex">
      <div class="left-btn">
        <button @click="collpase" class="close no-round-btn">
          <i class="increase-icon"></i>
        </button>
      </div>
      <div class="header-content pl-45px d-flex align-items-center">
        {{$t('order_number')}} : {{order.order_number}}
      </div>
      <div v-if="order.pay_status" class="right-content success">{{$t('pay_success')}}</div>
      <div v-else-if="order.pay_type" class="right-content success">{{$t('pay_later')}}</div>
      <div v-else-if="order.take_number" class="right-content success">{{order.payment_type}}</div>
      <div v-else class="right-content fail">{{$t('pay_fail')}}</div>
    </div>
    <div ref="detail" class="order-detail">
      <div class="pl-45px pt-15px">
        <div class="mb-20px">{{$t('order_date')}} : {{order.created_at}}</div>
        <div class="mb-20px">{{$t('order_status')}} : {{order.simple_status_display}}</div>
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
          <a v-if="order.freeshipping_price==0" style="color: #88c74a">${{order.freeshipping_price|commaFormat}}</a>
          <a v-else>${{order.freeshipping_price|commaFormat}}</a>
        </div>
        <div class="mb-20px">{{$t('coupon_used')}} : -${{order.coupon_price|commaFormat}} <a style="color: #88c74a" v-show="order.coupon_discount_code">({{order.coupon_discount_code}})</a>
        </div>
        <div class="mb-20px">{{$t('used_reward')}} : -${{order.reward_price|commaFormat}}</div>
        <div class="mb-20px">{{$t('reward_back')}} : <a style="color: #88c74a">${{order.rewrad[0].point|commaFormat}}</a></div>
        <br>
        <div class="mb-20px">{{$t('total')}} : ${{order.total_price|commaFormat}}</div>
        <div class="mb-20px">{{$t('pay_method')}} : {{order.pay_type?'貨到付款':'線上付款'}}</div>
        <button class="no-round-btn" v-if="!(order.pay_status || order.pay_type)" @click="repay">{{$t('pay_again')}}</button>
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
                style="max-width: 160px;max-height: 170px"
                alt="product image"/>
            </div>
            <div class="row flex-grow-1">
              <div class="t2 col-12 col-sm-3">{{product.name}}</div>
              <div class="t3 col-12 col-sm-3">{{$t('specification')}} : {{product.specification.name}}</div>
              <div class="t4 col-12 col-sm-3">{{$t('count')}} : {{product.quantity}}</div>
              <div class="t5 col-12 col-sm-3 primary-color">
                NT$ {{product.price*product.quantity|commaFormat}}
              </div>
            </div>
          </div>
        </div>
      </card-border>
    </div>
    <div v-html="html"></div>
  </div>
</template>

<script>
  import CardBorder from '@/components/CardBorder'
  import mixinCategory from "@/mixins/mixinCategory"

  export default {
    mixins: [mixinCategory],
    name: 'OrderCard',
    components: {
      CardBorder
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
        html: null
      }
    },
    computed: {
      products() {
        return JSON.parse(this.order.product_shot)
      }
    },
    methods: {
      htmlToEcpay(res) {
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
        this.$api.ecpay.repayment(data).then(res => {
          this.htmlToEcpay(res)
        })
      },
      image(productimages) {
        for (let img of productimages) {
          if (img.main_image) {
            return img.image_url
          }
        }
      },
      collpase() {
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
