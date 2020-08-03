<template>
  <div>
    <breadcrumb :end="$t('maintenance')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="error-404">
      <div class="container">
        <div class="row">
          <div style="margin:0px auto;width: 468px;height: 45px;;font-size: 32px;font-family: PingFangTC;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: 7px;text-align: center;color: #636363;">{{$t('good')}}</div>
          <div class="col-12 justify-content-center align-items-center text-center to-flex-col">
            <img src="/images/pages/maintenance.svg" alt="" class="max-width-100pa">
            <h1 class="mt-5 speicail-h2">{{$t('maintenance')}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import {mapState} from "vuex";

  export default {
    mixins: [mixinDefaultInit],
    name: 'maintenance',
    props: {},

    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
    computed: {
      ...mapState('configsetting', {
        configsetting: state => state.item
      }),
    },
    data() {
      return {}
    },
    created() {
      this.loading = false
      this.loadFadeout()
    },
    mounted () {
      if (!this.configsetting.in_maintenance) {
        this.$router.push({path: '/'})
      }
    },
  }
</script>

<style scoped></style>
