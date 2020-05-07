<template>
  <div>
    <breadcrumb :end="$t('not_found_404')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="error-404">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5 content-404">
            <h1>{{$t('not_found')}}</h1>
            <p class="content-color">{{$t('sorry')}}</p><a class="normal-btn" href="index.html">{{$t('back_index')}}</a>
          </div>
          <div class="col-12 col-md-7"><img src="/images/pages/404_img.png" alt="404 image"></div>
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
    name: '404',
    props: {},
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
    data() {
      return {}
    },
    created() {
      this.loading = false
      this.loadFadeout()
    }
  }
</script>

<style scoped></style>
