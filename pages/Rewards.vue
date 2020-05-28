<template>
  <div>
    <breadcrumb :end="$t('loyalty_reward')"></breadcrumb>
    <div class="content center-xs delivery-box">
      <div class="container">
        <h1 class="title green-underline ml-0px">{{$t('loyalty_reward')}}</h1>
        <br/>

        <p class="delivery_title">{{$t('loyalty_reward_1')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            {{$t('loyalty_reward_2')}}
          </p>
        </div>

        <br/>
        <p class="delivery_title">{{$t('loyalty_reward_3')}}</p>
        <br/>
        <div class="delivery_block">
          <p>{{$t('loyalty_reward_4')}}</p>
        </div>
        <br/>
        <p class="delivery_title">{{$t('loyalty_reward_5')}}</p>
        <br/>
        <div class="delivery_block">
          <p>
            我們通常在訂購日後的 {{reward.start_day}} 天內將獎勵金發放至會員中心。包含處理取消訂單、撤單拒付、產品退貨或其他相關問題所必需的時間。有效期 {{reward.still_day}} 天，將於獎勵金發放至您的帳戶後開始計算。
          </p>
        </div>

        <br/>
        <p class="delivery_title">{{$t('loyalty_reward_7')}}</p>
        <br/>
        <div class="delivery_block">
          <p>獎勵金將於發放至您的帳戶後 {{reward.still_day}} 天過期。</p>
        </div>
        <br/>
        <nuxt-link
          to="/register"
          class="banner-btn normal-btn"
          style="margin-top: 24px"
          v-if="!has_token"
        >{{$t('loyalty_reward_9')}}
        </nuxt-link>
        <nuxt-link
          to="/member-centre"
          class="banner-btn normal-btn"
          style="margin-top: 24px"
          v-else
        >{{$t('loyalty_reward_10')}}
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
