<template>
  <div>
    <breadcrumb end="404 找不到網頁"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="error-404">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5 content-404">
            <h1>{{$t('not_found')}}</h1>
            <p class="content-color">{{$t('sorry')}}</p>
            <nuxt-link class="normal-btn"
                       to="/">{{$t('back_index')}}
            </nuxt-link>
          </div>
          <div class="col-12 col-md-7"><img src="/images/pages/404_img.png" alt="404 image"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"

  export default {
    components: {},
    props: ['error'],
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
    created() {
      let ctx = {store:this.$store}
      fetchReturn(ctx,[])
    }
  }
</script>
