<template>
  <div>
    <breadcrumb :end="$t('register_terms')"></breadcrumb>
    <div class="content  center-xs delivery-box">
      <div class="container delivery">
        <h1 class="title green-underline ml-0px">{{$t('register_terms')}}</h1>
        <br/>

        <div class="about_us_h3">
          <p>{{$t('register_terms_1_1')}}</p>
          <p>{{$t('register_terms_1_2_1')}}{{reward.discount}}{{$t('register_terms_1_2_2')}}</p>
          <br>
          <p>{{$t('register_terms_1_3')}}</p>
        </div>
        <br>


      </div>
    </div>
  </div>
</template>

<script>
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import {mapState} from 'vuex'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"

  export default {
    mixins: [mixinDefaultInit],
    name: 'RegisterTerms',
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('banner/getList'), ctx.store.dispatch('reward/getList')])
    },
    computed: {
      ...mapState('reward', {
        reward: (state) => state.items
      }),
    },
  }
</script>

<style scoped></style>
