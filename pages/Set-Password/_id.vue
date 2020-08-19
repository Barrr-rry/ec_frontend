<template>
  <div>
    <breadcrumb :end="$t('set_password')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="account">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto">
            <h1 class="title">{{$t('set_password_title')}}</h1>
            <CForm
              @submit="submit"
              ref="form"
            >
              <CInput
                :required="true"
                type="password"
                :placeholder="$t('new_pass') + '*'"
                :validators="[validatePassword]"
                name="new_password"
              />
              <CInput
                :required="true"
                type="password"
                :placeholder="$t('new_pass_again') + '*'"
                :validators="[validateConfirmPassword]"
                name="password_confirm"
                class="mt-3 mb-3"
              />
              <CInput
                :required="true"
                :placeholder="$t('ver') + '*'"
                name="code"
                :validators="[validateCode]"
                class="mb-3"
              />
              <div class="d-flex align-items-center">
                <Identify :identifyCode="code" class="pointer" @click="reDraw" ref="identify"></Identify>
                <i class="fas fa-sync-alt pointer ml-20px" @click="reDraw"></i>
              </div>

              <div class="account-function">
                <button class="no-round-btn" @click="">{{$t('set_password')}}</button>
                <!--                <nuxt-link class="create-account" to="/login">或前往登入</nuxt-link>-->
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
  import headerFetch from "@/mixins/fetch/headerFetch"
  import CForm from "@/components/CForm"
  import validator from "@/mixins/validator"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import Identify from "@/components/Identify"

  export default {
    mixins: [validator, mixinDefaultInit],
    ...headerFetch,
    components: {
      CInput,
      CForm,
      Identify,
    },
    async asyncData(ctx) {
      let values = {
        validate_code: ctx.params.id
      }
      try {
        await ctx.app.$api.member.validate_expired(values)
      } catch (e) {
        ctx.redirect('/')
      }
      return {}
    },
    data() {
      return {
        code: this.generateCode()
      }
    },
    watch: {},
    methods: {
      reDraw() {
        this.code = this.generateCode()
        this.$refs.identify.drawPic()
      },
      generateCode() {
        let code = ''
        while (code.length < 4) {
          code += Math.floor(Math.random() * 10)
        }
        return code

      },
      submit(val) {
        val['validate_code'] = this.$route.params.id
        this.$api.member.forgotpassword_setpassword(val).then(() => {
          this.$toast.success(this.$t('chg_password_suc'))
          setTimeout(() => {
            this.$router.push('/login')
          }, 3000)
        }).catch((err) => {
          if (this.$refs.form) {
            this.$refs.form.setError(err.response.data)
          }
        })
      }
    },
  }
</script>

<style scoped></style>
