<template>
  <div class="shop-bottombox mt-5">
    <div class="container">
      <div class="shop-boxes">
        <div class="shop-box">
          <div class="shop-main">
            <h3 class="shop-box--title">{{$t('member')}}{{$t('login')}}</h3>
            <div class="shop-box--form">
              <CForm
                @submit="submit"
                ref="form"
              >
                <CInput
                  :title="$t('acc_e')"
                  :required="true"
                  :placeholder="$t('input_email')"
                  name="account"
                  v-model="account"
                  class="mb-20px"
                />
                <CInput
                  :title="$t('password')"
                  :required="true"
                  type="password"
                  :placeholder="$t('new_pass')"
                  name="password"
                  v-model="password"
                  class="mb-20px"
                />
                <div class="shop-box--form-row">
                  <div class="row">
                    <div class="col-12 col-md-6">
                      <label for="keep-infor" class="label-checbox">
                        <input type="checkbox" name="" id="keep-infor" v-model="savepass">
                        <i class="checkbox-icon"></i>
                        <span>{{$t('keep_login')}}</span>
                      </label>
                    </div>
                    <div class="col-12 col-md-6" style="text-align: right">
                      <nuxt-link to="/forgotpassword" class="forgot-password">{{$t('forget_password')}}</nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="account-function">
                  <button class="no-round-btn">{{$t('login')}}
                  </button
                  >
                </div>
              </CForm>

            </div>
          </div>
        </div>
        <div class="shop-box">
          <div class="shop-main">
            <h3 class="shop-box--title">{{$t('register')}}{{$t('member')}}</h3>
            <div class="shop-box--msg">
              <p>{{$t('register_terms_1_1')}}</p>
              <p>{{$t('register_terms_1_2_1')}}{{reward.discount}}{{$t('register_terms_1_2_2')}}</p>
              <p style="color: #dc5555;">{{$t('register_terms_1_3')}}</p>
            </div>
          </div>
          <div class="shop-box--btn" style="text-align: center;">
            <nuxt-link to="/register">
              <button class="no-round-btn" style="min-width: 200px;">{{$t('register')}}</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CInput from "@/components/CInput"
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import CForm from "@/components/CForm"
  import validator from "@/mixins/validator"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import {getCookieCart} from "@/assets/js/localCart"
  import {mapState} from "vuex";

  export default {
    name: 'Login',
    mixins: [validator, mixinDefaultInit],
    components: {
      CInput,
      CForm,
    },
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('banner/getList'), ctx.store.dispatch('reward/getList')])
    },
    computed: {
      ...mapState('reward', {
        reward: (state) => state.items
      }),
    },
    data() {
      return {
        savepass: false,
        account: null,
        password: null,
      }
    },
    methods: {
      loginSuccessProcess() {
        if (/^http/.test(this.$store.state.previous_url)) {
          this.$router.push('/')
          return
        }
        let other_urls = ['register', 'forgotpassword', 'password', 'login']
        for (let url_part of other_urls) {
          if (this.$store.state.previous_url.includes(url_part)) {
            this.$router.push('/')
            return
          }
        }
        this.$router.push(this.$store.state.previous_url)
      },
      setLoginVariable(token) {
        // change cookie & store
        this.$store.commit('setToken', token)
        this.$store.commit('membertoken/changeValue', {key: 'has_token', value: true})
        this.$cookies.set('savepass', this.savepass)
        if (this.savepass) {
          this.$cookies.set('account', this.account)
          this.$cookies.set('password', this.password)
        } else {
          this.$cookies.set('account', null)
          this.$cookies.set('password', null)
        }
      },
      async addTOCart() {
        /**
         * 確認原本購物車有沒有資料 如果有的話就不要新增
         * */
        await this.$store.dispatch('cart/getCount')
        if (this.$store.state.cart.count) {
          return
        }
        let cart = getCookieCart()
        let promist_list = []
        for (let values of cart) {
          promist_list.push(this.$api.cart.postData(values))
        }
        await Promise.all(promist_list)
        this.$cookies.set('cart', [])

      },
      async submit(val) {
        try {
          let res = await this.$api.member.login(val)
          this.setLoginVariable(res.data.token)
          await this.addTOCart()
          this.loginSuccessProcess()
        } catch (e) {
          console.log('catch:', e)
          if (this.$refs.form) {
            this.$refs.form.setError({
              password: [this.$t('acc_error')]
            })
          }
        }

      }
    },
    created() {
      let savepass = this.$cookies.get('savepass')
      let account = this.$cookies.get('account')
      let password = this.$cookies.get('password')
      try {
        savepass = JSON.parse(savepass)
      } catch (e) {
      }
      if (savepass) {
        this.savepass = savepass
        this.account = account
        this.password = password
      }
      this.loading = false
    }
  }
</script>

<style scoped></style>
