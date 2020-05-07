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
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
            <img src="/images/webs/order_fail.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2">{{$t('order_fail')}}</h2>
            <a
              href="#"
              class="pointer banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('back_member_center')}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import {mapState} from 'vuex'
  import {api} from '@/api'

  export default {
    mixins: [mixinDefaultInit],
    name: 'Order-Fail',
    props: {},
    middleware: [
      'hasToken'
    ],
    fetch(ctx) {
      let ret = []
      return fetchReturn(ctx, ret)
    },
    data() {
      return {}
    },
    computed: {},
    methods: {},
    mounted() {
      this.loading = false
      this.loadFadeout()
    }
  }
</script>

<style scoped></style>
