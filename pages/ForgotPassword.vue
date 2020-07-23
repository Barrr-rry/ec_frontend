<template>
  <div>
    <breadcrumb :end="$t('forget_password')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="account">
      <div class="container">
        <div class="row forgot">
          <div class="col-12 col-md-6 mx-auto">
            <h1 class="title">{{$t('forget_password')}}</h1>
            <CForm
              @submit="submit"
              ref="form"
            >
              <CInput
                :placeholder="$t('acc')+`( Email )`"
                :required="true"
                name="account"
                :validators="[validateEmail]"
                class="mb-3"

              />
              <CInput
                :placeholder="$t('verification_code')"
                :required="true"
                name="code"
                :validators="[validateCode]"
                class="mb-3"

              />
              <div class="account-method">
                <div class="d-flex align-items-center">
                  <Identify :identifyCode="code" class="pointer" @click="reDraw" ref="identify"></Identify>
                  <i class="fas fa-sync-alt pointer ml-20px" @click="reDraw"></i>
                  <span class="ml-10px pointer hover-li" @click="reDraw">{{$t('cant_see')}}</span>
                </div>
              </div>
              <div class="content content-color text-align-center">
                {{$t('mail_to')}}
              </div>
              <div class="account-function">
                <button class="no-round-btn">{{$t('submit')}}
                </button
                >
                <nuxt-link class="create-account" to="/login">{{$t('back_login')}}</nuxt-link>
              </div>
            </CForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import Identify from "@/components/Identify"
  import CInput from "@/components/CInput"
  import CForm from "@/components/CForm"
  import validator from "@/mixins/validator"

  export default {
    mixins: [mixinDefaultInit, validator],
    name: 'ForgotPassword',
    components: {
      Identify,
      CInput,
      CForm,
    },
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
    data() {
      return {
        code: this.generateCode()
      }
    },
    methods: {
      reDraw() {
        this.code = this.generateCode()
        this.$refs.identify.drawPic()
      },
      submit(val) {
        this.$api.member.forgotpassword(val).then(() => {
          this.$toast.success(this.$t('send_mail'))
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        }).catch((err) => {
          if (this.$refs.form) {
            this.$refs.form.setError(err.response.data)
          }
        })
      },
      generateCode() {
        let code = ''
        while (code.length < 4) {
          code += Math.floor(Math.random() * 10)
        }
        return code

      }
    },
  }
</script>

<style scoped></style>
