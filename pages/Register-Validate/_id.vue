<template>
  <div>
    <breadcrumb :end="$t('res')"></breadcrumb>
    <!-- End order step-->
    <!--    <div class="order-complete">-->
    <!--      <div class="container">-->
    <!--        <div class="row">-->
    <!--          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">-->
    <!--            <img src="/images/webs/order_complete.svg" alt="" class="max-width-100pa">-->
    <!--            <h2 class="mt-5 speicail-h2">{{$t('register_success')}}</h2>-->
    <!--            <nuxt-link to="/login"-->
    <!--                       class="banner-btn normal-btn mt-4 special-btn-width text-align-center">{{$t('back_login')}}-->
    <!--            </nuxt-link>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
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
      return {}
    },
    mounted() {
      this.preload()
      let val = {
        validate_code: this.$route.params.id
      }
      this.$api.member.register_validate(val).then((res) => {
        this.$router.push({
          path: '/register-status',
          query: {
            status: res.data.code,
            validate_code: this.$route.params.id
          }
        })
      }).catch(() => {
      })
    }
  }
</script>

<style scoped></style>
