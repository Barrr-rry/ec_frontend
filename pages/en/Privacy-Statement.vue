<template>
  <div>
    <breadcrumb :end="$t('privacy_statement')"></breadcrumb>
    <div class="content container center-xs">
      <div class="privacy">
        <h1 class="title green-underline ml-0px">{{$t('privacy_statement')}}</h1>
        <br/>

        <p>
          {{$t('privacy_statement_1')}}
        </p>

        <br/>
        <p class="delivery_title">{{$t('privacy_statement_2')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('privacy_statement_3')}}
          </p>
        </div>

        <br/>
        <p class="delivery_title">{{$t('privacy_statement_4')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('privacy_statement_6')}}
          </p>

          <p>
            {{$t('privacy_statement_7')}}
          </p>

          <p>
            {{$t('privacy_statement_8')}}
          </p>

          <p>
            {{$t('privacy_statement_9')}}
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('privacy_statement_10')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('privacy_statement_11')}}
          </p>

          <p>
            {{$t('privacy_statement_12')}}
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('privacy_statement_13')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('privacy_statement_14')}}
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('privacy_statement_15')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('privacy_statement_16')}}
          </p>

          <p>{{$t('privacy_statement_17')}}</p>

          <p>{{$t('privacy_statement_18')}}</p>

          <p>{{$t('privacy_statement_19')}}</p>

          <p>{{$t('privacy_statement_20')}}</p>

          <p>
            {{$t('privacy_statement_21')}}
          </p>

          <p>
            {{$t('privacy_statement_22')}}
          </p>

          <p>{{$t('privacy_statement_23')}}</p>

          <p>
            {{$t('privacy_statement_24')}}
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('privacy_statement_25')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('privacy_statement_26')}}
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('privacy_statement_27')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('privacy_statement_28')}}
          </p>
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
    name: 'PrivacyStatement',
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
  }
</script>

<style scoped></style>
