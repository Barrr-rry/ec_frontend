<template>
  <div>
    <breadcrumb :end="$t('loyalty_reward')"></breadcrumb>
    <div class="content center-xs delivery-box">
      <div class="container">
        <h1 class="title green-underline ml-0px">{{$t('loyalty_reward')}}</h1>
        <br/>
        <div class="delivery_block">
          <ol class="">
            <li>{{$t('loyalty_reward_1_1')}}{{reward.discount}}{{$t('loyalty_reward_1_2')}}</li>
            <li>{{$t('loyalty_reward_2_1')}}{{reward.start_day}}{{$t('loyalty_reward_2_2')}}</li>
            <li>{{$t('loyalty_reward_3')}}</li>
            <li>{{$t('loyalty_reward_4_1')}}{{reward.still_day}}{{$t('loyalty_reward_4_2')}}{{reward.still_day}}{{$t('loyalty_reward_4_3')}}</li>
            <li>{{$t('loyalty_reward_5')}}</li>
            <li>{{$t('loyalty_reward_6')}}</li>
            <li>{{$t('loyalty_reward_7')}}</li>
          </ol>
        </div>

        <br/>
        <nuxt-link
          to="/register"
          class="banner-btn normal-btn"
          style="margin-top: 24px"
          v-if="!has_token"
        >{{$t('loyalty_reward_btn1')}}
        </nuxt-link>
        <nuxt-link
          to="/member-centre"
          class="banner-btn normal-btn"
          style="margin-top: 24px"
          v-else
        >{{$t('loyalty_reward_btn2')}}
        </nuxt-link>
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
    name: 'Rewards',
    fetch(ctx) {
      return fetchReturn(ctx, [
        ctx.store.dispatch('reward/getList')
      ])    },
    computed: {
      ...mapState('membertoken', {
        has_token: (state) => state.has_token
      }),
      ...mapState('reward', {
        reward: (state) => state.items
      }),
    }
  }
</script>

<style scoped></style>
