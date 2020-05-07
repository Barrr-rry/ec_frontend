<template>
  <div>
    <breadcrumb :end="$t('res')"></breadcrumb>
    <!-- End order step-->
    <div class="order-complete" v-if="status===1">
      <div class="container">
        <h2 style="text-align: center">{{$t('member_success')}}</h2>
        <div class="row">
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
            <img src="/images/webs/order_complete.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2">{{$t('member_success_1')}}</h2>
            <nuxt-link to="/login"
                       class="banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('login_now')}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="order-complete" v-if="status===2">
      <div class="container">
        <h2 style="text-align: center">{{$t('member_fail')}}</h2>
        <div class="row">
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
            <img src="/images/webs/order_fail.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2">{{$t('member_fail_1')}}</h2>
            <nuxt-link to="/login"
                       class="banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('login_now')}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="order-complete" v-if="status===3">
      <div class="container">
        <h2 style="text-align: center">{{$t('member_fail')}}</h2>
        <div class="row">
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
            <img src="/images/webs/order_fail.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2">{{$t('member_fail_2')}}</h2>
            <a href="#"
               @click="registerResend"
               class="banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('send_again')}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="order-complete" v-if="status===4">
      <div class="container">
        <h2 style="text-align: center">{{$t('member_fail')}}</h2>
        <div class="row">
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
            <img src="/images/webs/order_fail.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2">{{$t('member_fail_2')}}</h2>
            <nuxt-link to="/login"
                       class="banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('login_now')}}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    props: {},
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
    data() {
      let status = this.$route.query.status || 1
      let validate_code = this.$route.query.validate_code
      return {
        status,
        validate_code
      }
    },
    computed: {},
    methods: {
      registerResend() {
        this.loding = true
        this.$api.member.register_resend({validate_code: this.validate_code}).then(() => {
          this.loadFadeout()
          this.$toast.success(this.$t('send_mail_again'))
        }).catch(() => {
          this.loadFadeout()
          this.$toast.error(this.$t('send_mail_error'))
        })
      }
    },
    mounted() {
      this.loading = false
      this.loadFadeout()
    }
  }
</script>

<style scoped></style>
