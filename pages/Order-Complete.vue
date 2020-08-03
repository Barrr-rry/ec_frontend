<template>
  <div>
    <breadcrumb :end="$t('order_f')"></breadcrumb>
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
                  <div class="step-block">
                    <div class="step">
                      <h2>{{$t('write_data')}}</h2><span>02</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-4">
                  <div class="step-block active">
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
    <div class="order-complete">
      <div class="container">
        <div class="row">
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col" v-if="correct_status">
            <img src="/images/webs/order_complete.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2">{{$t('order_complete')}}</h2>
            <nuxt-link to="/ordertracking"
                       class="banner-btn normal-btn mt-4 special-btn-width text-align-center">
              {{$t('check_order')}}
            </nuxt-link>
          </div>
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col" v-else>
            <img src="/images/webs/order_fail.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2"
            >{{pay_fail?$t('order_fail_repay'):$t('order_fail')}}</h2>
            <a
              v-if="pay_fail"
              href="#"
              @click="repay"
              class="pointer banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('pay_again')}}
            </a>
            <nuxt-link
              v-else
              to="/member-centre"
              class="pointer banner-btn normal-btn mt-4 special-btn-width text-align-center">
              {{$t('back_member_center')}}
            </nuxt-link>
          </div>
        </div>
        <div v-html="html"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import {mapState} from 'vuex'

  export default {
    mixins: [mixinDefaultInit],
    name: 'Order-Complete',
    props: {},
    middleware: [
      'inMaintain', 'hasToken'
    ],
    fetch(ctx) {
      let order = ctx.query.order
      let ret = []
      if (order) {
        ret = [ctx.store.dispatch('order/getRead', ctx.query.order)]
      }

      return fetchReturn(ctx, ret)
    },
    data() {
      return {
        html: null
      }
    },
    computed: {
      ...mapState('order', {
        order: state => state.item
      }),
      correct_status() {
        if (!this.order) {
          return false
        }
        return this.order.pay_status || this.order.shipping_status === 300 || this.order.pay_type || this.order.take_number == 1
      },
      pay_fail() {
        // todo
        return true
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
    },
    mounted() {
      this.loading = false
      this.loadFadeout()

    }
  }
</script>

<style scoped></style>
