<template>
  <div>
    <breadcrumb :end="$t('res')"></breadcrumb>
    <!-- End order step-->
    <div class="order-complete">
      <div class="container">
        <div class="row">
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
            <img src="/images/webs/order_complete.svg" alt="" class="max-width-100pa">
            <h2 class="mt-5 speicail-h2">{{$t('register_success')}}</h2>
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
    name: 'Order-Complete',
    props: {},
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
    data() {
      return {}
    },
    mounted() {
      this.loading = false
      this.loadFadeout()
    }
  }
</script>

<style scoped></style>
