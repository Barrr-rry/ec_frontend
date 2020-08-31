<template>
  <div>
    <breadcrumb :end="$t('for_business')"></breadcrumb>
    <div class="content  center-xs delivery-box">
      <div class="container delivery">
        <h1 class="title green-underline ml-0px">{{$t('for_business')}}</h1>
        <div class="about_us_h3">
          <p>
            {{$t('for_business_txt1_1')}} 
            <br>
            {{$t('for_business_txt1_2')}} 
            <br><br>
            {{$t('for_business_txt2')}} 
          </p>
        </div>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    name: 'ForBusiness',
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
  }
</script>

<style scoped></style>
