<template>
  <div>
    <breadcrumb :end="$t('delivery_instructions')"></breadcrumb>
    <div class="content  center-xs delivery-box">
      <div class="container delivery">
        <h1 class="title green-underline ml-0px">{{$t('delivery_instructions')}}</h1>
        <div class="about_us_h3">
          <p>
            {{$t('delivery_rule_txt1')}} <br>
            {{$t('delivery_rule_txt2')}} 
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('delivery_rule_0')}}</p>
        <br/>
        <div class="about_us_h3">
          <ol class="ol-number">
            <li>{{$t('delivery_rule_0_1_0')}}</li>
            <li>{{$t('delivery_rule_0_2_0')}}</li>
            <li>{{$t('delivery_rule_0_3_0')}}</li>
          </ol>
        </div>
        <br/>

        <p class="delivery_title">{{$t('delivery_rule_1')}}</p>
        <br/>
        <div class="about_us_h3">
          <p>{{$t('delivery_rule_1_1_0')}}</p>
        </div>
        <br/>

        <p class="delivery_title">{{$t('delivery_rule_2')}}</p>
        <br/>
        <div class="about_us_h3">
          <ol class="ol-number">
            <li>{{$t('delivery_rule_2_1_0')}}</li>
            <li>{{$t('delivery_rule_2_2_0')}}</li>
          </ol>
        </div>
        <br/>


        <!--
        <p class="delivery_title">{{$t('instructions')}}:</p>
        <br/>
        <div class="about_us_h3">
          <p>
            {{$t('delivery_instruction_1')}}
          </p>
          <p>
            {{$t('delivery_instructions_2')}}
          </p>
          <p>
            {{$t('delivery_instructions_4')}}
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('delivery_instructions_5')}}</p>
        <br/>
        <div class="about_us_h3">
          <p>
            {{$t('delivery_instructions_6')}}
          </p>
          <p>
            {{$t('delivery_instructions_7')}}
          </p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('delivery_instructions_8')}}</p>
        <br/>
        <div class="about_us_h3">
          <p>
            {{$t('delivery_instructions_9')}}
          </p>
          <p>
            {{$t('delivery_instructions_10')}}
          </p>
          <p>{{$t('delivery_instructions_11')}}</p>
        </div>
        <br/>

        <p class="delivery_title">{{$t('delivery_instructions_12')}}</p>
        <br/>

        <div class="about_us_h3">
          <p>
            {{$t('delivery_instructions_13')}}
          </p>
        </div>
        <br/>

        <p class="delivery_title">{{$t('delivery_instructions_14')}}</p>
        <br/>

        <p>{{$t('delivery_instructions_15')}}</p>
        <br/>

        <div class="about_us_h3">
          <p>{{$t('delivery_instructions_16')}}</p>
          <p>
            {{$t('delivery_instructions_17')}}
          </p>
          <p>
            {{$t('delivery_instructions_18')}}
          </p>
          <p>{{$t('delivery_instructions_19')}}</p>
          <p>
            {{$t('delivery_instructions_20')}}
          </p>
          <p>
            {{$t('delivery_instructions_21')}}
          </p>
        </div>

        <br/>
        <p>{{$t('delivery_instructions_22')}}</p>
        <br/>
        <div class="about_us_h3">
          <p>{{$t('delivery_instructions_23')}}</p>
          <p>{{$t('delivery_instructions_24')}}</p>
          <p>
            {{$t('delivery_instructions_25')}}
          </p>
          <div>
            {{$t('delivery_instructions_26')}}
          </div>
        </div>

        <br/>
        <p class="delivery_title">{{$t('delivery_instructions_27')}}</p>
        <br/>

        <div class="about_us_h3">
          <p>
            {{$t('delivery_instructions_28')}}
          </p>
          <p>
            {{$t('delivery_instructions_29')}}
          </p>
        </div>

        <br/>
        <p class="delivery_title">{{$t('delivery_instructions_30')}}</p>
        <br/>

        <div class="about_us_h3">
          <p>
            {{$t('delivery_instructions_31')}}
          </p>
          <p>
            {{$t('delivery_instructions_32')}}
          </p>
          <p>
            {{$t('delivery_instructions_33')}}
          </p>
          <p>
            {{$t('delivery_instructions_34')}}
          </p>
          <p>{{$t('delivery_instructions_35')}}</p>
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    name: 'DeliveryInstructions',
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
  }
</script>

<style scoped></style>
