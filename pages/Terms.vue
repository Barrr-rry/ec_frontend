<template>
  <div>
    <breadcrumb :end="$t('company_terms')"></breadcrumb>
    <div class="content center-xs">
      <div class="container">
        <h1 class="title green-underline ml-0px">{{$t('company_terms')}}</h1>

        <h3>{{$t('company_terms_1')}}</h3>
        <br/>
        <div class="terms-li">
          <li>{{$t('company_terms_2')}}</li>
          <li>
            {{$t('company_terms_3')}}
          </li>
          <li>{{$t('company_terms_4')}}</li>
          <li>{{$t('company_terms_11')}}</li>
          <li>{{$t('company_terms_5')}}</li>
          <li>{{$t('company_terms_6')}}</li>
        </div>
        <br/>
        <h3>{{$t('company_terms_12')}}</h3>
        <br/>
        <div class="terms-li">
          <li>
            <div>
              <div>{{$t('company_terms_7')}}</div>
              <div>
                {{$t('company_terms_8')}}
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>{{$t('company_terms_9')}}</div>
              <div>{{$t('company_terms_10')}}</div>
            </div>
          </li>
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
