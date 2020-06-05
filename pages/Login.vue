<template>
  <div>
    <breadcrumb :end="$t('login')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="account">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto">
            <h1 class="title">{{$t('member')}}{{$t('login')}}</h1>
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
              />
              <CInput
                :title="$t('password')"
                :required="true"
                type="password"
                :placeholder="$t('new_pass')"
                name="password"
                v-model="password"
              />
              <div class="account-method">
                <div class="account-save input-radio-display">
                  <input id="savepass" type="checkbox" v-model="savepass"/>
                  <label for="savepass">{{$t('keep_login')}}</label>
                </div>
                <div class="account-forgot">
                  <nuxt-link to="/forgotpassword">{{$t('forget_password')}}</nuxt-link>
                </div>
              </div>
              <div class="account-function">
                <button class="no-round-btn">{{$t('login')}}
                </button
                >
                <nuxt-link class="create-account" to="/register">{{$t('to_register')}}</nuxt-link>
              </div>
            </CForm>
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

  export default {
    name: 'Login',
    mixins: [validator, mixinDefaultInit],
    components: {
      CInput,
      CForm,
    },
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('banner/getList')])
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
