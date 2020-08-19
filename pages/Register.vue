<template>
  <div>
    <breadcrumb :end="$t('register')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="account">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto">
            <h1 class="title">{{$t('register')}}</h1>
            <CForm
              @submit="submit"
              ref="form"
            >
              <CInput
                :placeholder="$t('acc_e')"
                :required="true"
                name="account"
                :validators="[validateEmail]"
                class="mb-3"
              />
              <CInput
                :placeholder="$t('password') + '*'"
                :required="true"
                type="password"
                :validators="[validatePassword]"
                name="password"
                class="mb-3"
              />
              <CInput
                :placeholder="$t('check_Opassword') + '*'"
                :required="true"
                type="password"
                :validators="[validateConfirmPassword]"
                name="password_confirm"
                class="mb-3"
              />
              <CInput
                :placeholder="$t('member_name') + '*'"
                :required="true"
                name="name"
                class="mb-3"
              />
              <CInput
                :placeholder="$t('cellphone') + '*'"
                :required="true"
                name="cellphone"
                :validators="[validateCellPhone, checkPhone]"
                class="mb-3"
              />
              <div class="d-flex mb-20px">
                <div class="d-flex flex-grow-1 align-content-center row">
                  <div class="col-4 d-flex">
                    <CInput
                      :required="false"
                      :placeholder="$t('phone_code')"
                      name="area"
                      v-model="area"
                    />
                  </div>
                  <div class="col-4 d-flex">
                    <CInput
                      :required="false"
                      :placeholder="$t('phone')"
                      name="local"
                      v-model="local"
                    />
                  </div>
                  <div class="col-4 d-flex">
                    <CInput
                      :required="false"
                      :placeholder="$t('phone_a')"
                      name="ext"
                      v-model="ext"
                    />
                  </div>
                </div>
              </div>
              <CInput
                :placeholder="$t('input_line')"
                name="line_id"
                class="mb-3"
              />
              <CInput
                :placeholder="$t('verification_code') + '*'"
                :required="true"
                name="code"
                :validators="[validateCode]"
                class="mb-3"
              />
              <div class="d-flex align-items-center">
                <Identify :identifyCode="code" class="pointer" @click="reDraw" ref="identify"></Identify>
                <i class="fas fa-sync-alt pointer ml-20px" @click="reDraw"></i>
                <span class="ml-10px pointer hover-li" @click="reDraw">{{$t('cant_see')}}</span>
              </div>

              <div class="account-function">
                <button class="no-round-btn" @click="">{{$t('register')}}</button>
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
    name: 'Register',
    mixins: [validator, mixinDefaultInit],
    ...headerFetch,
    components: {
      CInput,
      CForm,
      Identify,
    },
    data() {
      return {
        phone: {
          area: '',
          local: '',
          ext: ''
        },
        code: this.generateCode()
      }
    },
    watch: {
      phone: {
        handler(val) {
          if (this.$refs.phone) {
            this.$refs.phone.input = val
          }
        },
        deep: true,
        immediate: true
      }
    },
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
        val.phone = ''
        if(val.local && val.area && val.ext){
          val.phone = `${val.area}-${val.local}#${val.ext}`
        }
        else if(val.local && val.area){
          val.phone = `${val.area}-${val.local}`
        }
        else if(val.ext && val.local){
          val.phone = `${val.local}#${val.ext}`
        }
        else {
          val.phone = `${val.local}`
        }
        this.loading = true
        this.$api.member.register(val).then(() => {
          this.$router.push('/register-success')
        }).catch((err) => {
          if (this.$refs.form) {
            this.loadFadeout()
            this.$refs.form.setError(err.response.data)
          }
        })
      }
    },
  }
</script>

<style scoped></style>
