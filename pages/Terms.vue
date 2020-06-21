<template>
  <div>
    <breadcrumb :end="$t('company_terms')"></breadcrumb>
    <div class="content  center-xs delivery-box">
      <div class="container delivery">
        <h1 class="title green-underline ml-0px">{{$t('company_terms')}}</h1>
        <br/>

        <div v-if="$i18n.locale == 'tw'">
          <div class="about_us_h3">
            <p>{{$t('company_terms_txt_1')}}</p>
            <p>{{$t('company_terms_txt_2')}}</p>
          </div>
          <br>

          <h3>{{$t('company_terms_1_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <p>{{$t('company_terms_1_1')}}</p>
            <p>{{$t('company_terms_1_2')}}</p>
            <p>{{$t('company_terms_1_3')}}</p>
            <p>{{$t('company_terms_1_4')}}</p>
          </div>
          <br>

          <h3>{{$t('company_terms_2_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <ol class="ol-number">
              <li><p>{{$t('company_terms_2_1')}}</p></li>
              <li><p>{{$t('company_terms_2_2')}}</p></li>
              <li><p>{{$t('company_terms_2_3')}}</p></li>
              <li><p>{{$t('company_terms_2_4')}}</p></li>
              <li><p>{{$t('company_terms_2_5')}}</p></li>
            </ol>
          </div>
          <br>

          <h3>{{$t('company_terms_3_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <ol class="ol-number">
              <li><p>{{$t('company_terms_3_1')}}</p></li>
              <li><p>{{$t('company_terms_3_2')}}</p></li>
              <li><p>{{$t('company_terms_3_3')}}</p></li>
            </ol>
          </div>
          <br>

          <h3>{{$t('company_terms_4_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <ol class="ol-number">
              <li><p>{{$t('company_terms_4_1')}}</p></li>
              <li><p>{{$t('company_terms_4_2')}}</p></li>
            </ol>
          </div>
          <br>

          <h3>{{$t('company_terms_5_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <ol class="ol-number">
              <li><p>{{$t('company_terms_5_1')}}</p></li>
              <li><p>{{$t('company_terms_5_2')}}</p></li>
              <li><p>{{$t('company_terms_5_3')}}</p></li>
              <li><p>{{$t('company_terms_5_4')}}</p></li>
            </ol>
          </div>
          <br>
        </div>


        <div v-else>
          <div class="about_us_h3">
            <p>{{$t('company_terms_txt_1')}}</p>
            <p>{{$t('company_terms_txt_2')}}</p>
          </div>
          <br>

          <h3>{{$t('company_terms_1_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <p>{{$t('company_terms_1_1')}}</p>
            <p>{{$t('company_terms_1_2')}}</p>
            <p>{{$t('company_terms_1_3')}}</p>
            <p>{{$t('company_terms_1_4')}}</p>
          </div>
          <br>

          <h3>{{$t('company_terms_2_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <p>{{$t('company_terms_2_1')}}</p>
            <p>{{$t('company_terms_2_2')}}</p>
            <p>{{$t('company_terms_2_3')}}</p>
            <p>{{$t('company_terms_2_4')}}</p>
            <p>{{$t('company_terms_2_5')}}</p>
          </div>
          <br>

          <h3>{{$t('company_terms_3_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <p>{{$t('company_terms_3_1')}}</p>
            <p>{{$t('company_terms_3_2')}}</p>
            <p>{{$t('company_terms_3_3')}}</p>
          </div>
          <br>

          <h3>{{$t('company_terms_4_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <p>{{$t('company_terms_4_1')}}</p>
            <p>{{$t('company_terms_4_2')}}</p>
          </div>
          <br>

          <h3>{{$t('company_terms_5_title')}}</h3>
          <br/>
          <div class="about_us_h3">
            <p>{{$t('company_terms_5_1')}}</p>
            <p>{{$t('company_terms_5_2')}}</p>
            <p>{{$t('company_terms_5_3')}}</p>
            <p>{{$t('company_terms_5_4')}}</p>
          </div>
          <br>
        </div>
        



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
    name: 'Terms',
    fetch(ctx) {
      return fetchReturn(ctx, [
        [ctx.store.dispatch('freeshipping/getList')]
      ])
    },
    computed: {
      ...mapState('freeshipping', {
        items: state => state.items
      }),
      mail(){
        let items = this.items.filter(x=>x.logistics_type===2)
        return items[0]
      },
      home(){
        let items = this.items.filter(x=>x.logistics_type===3)
        return items[0]
      },
      store(){
        let items = this.items.filter(x=>x.logistics_type===1)
        return items[0]
      },
    },
  }
</script>

<style scoped></style>
