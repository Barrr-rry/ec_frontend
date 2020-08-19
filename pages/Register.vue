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
              <div class="d-flex mb-10px mt-105px">
                <div class="d-flex flex-grow-1 align-content-center">
                  <CInput
                    :title="$t('member_addr')"
                    class="flex-grow-1 input-radio-display mb-20px"
                    :required="false"
                    name="local"
                    error_class=""
                    v-model="local"
                  >
                    <!--台灣-->
                    <div class="mb-40px">
                      <label for="radio_location1" class="custom-label inline-row mr-50px">
                        <input class="mb-0px mr-15px" type="radio" id="radio_location1" :value="1" v-model="local">
                        <div class="radio-icon"></div>
                        <a for="radio_location1" >{{$t('tw')}}</a>
                      </label>
                      <label for="radio_location2" class="custom-label inline-row">
                        <input class="mb-0px mr-15px" type="radio" id="radio_location2" :value="2" v-model="local">
                        <div class="radio-icon"></div>
                        <a for="radio_location2">{{$t('Oversea')}}</a>
                      </label>
                    </div>
                  </CInput>
                </div>
              </div>
              <CInput
                class="mb-20px"
                :title="$t('acc_e')"
                :required="true"
                :placeholder="$t('input_email')"
                name="account"
                :validators="[validateEmail]"
              />
              <CInput
                class="mb-20px"
                :title="$t('check_acc')"
                :required="true"
                :placeholder="$t('acc_aga')"
                name="account_confirm"
                :validators="[validateConfirmEmail]"
              />
              <CInput
                class="mb-20px"
                :title="$t('password')"
                :required="true"
                type="password"
                :placeholder="$t('new_pass')"
                :validators="[validatePassword]"
                name="password"
              />
              <CInput
                class="mb-20px"
                :title="$t('check_Opassword')"
                :required="true"
                type="password"
                :placeholder="$t('pass_aga')"
                :validators="[validateConfirmPassword]"
                name="password_confirm"
              />
              <CInput
                :title="$t('member_addr')"
                :required="false"
                name="email_status"
                v-model="email_status"
              >
                <div class="account-save input-radio-display mb-30px">
                  <input type="checkbox" class="mb-0px" v-model="email_status">
                  <a>{{$t('allow_report')}}</a>
                </div>
              </CInput>
              <div class="account-save input-radio-display mb-40px">
                <input type="checkbox" class="mb-0px" v-model="agree" :required="true" oninvalid="setCustomValidity('您尚未同意會員條款')" onchange="this.setCustomValidity('')" >
                {{$t('agree_pact_1')}}
                <nuxt-link to="/register-terms" style="text-decoration:underline;">{{$t('agree_pact_2')}}</nuxt-link>
                {{$t('agree_pact_3')}}
              </div>
              <CInput
                class="mb-20px"
                :title="$t('verification_code')"
                :required="true"
                :placeholder="$t('ver')"
                name="code"
                :validators="[validateCode]"
              />
              <div class="d-flex align-items-center">
                <Identify :identifyCode="code" class="pointer" @click="reDraw" ref="identify"></Identify>
                <i class="fas fa-sync-alt pointer ml-20px" @click="reDraw"></i>
                <span class="ml-10px pointer hover-li" @click="reDraw">{{$t('cant_see')}}</span>
              </div>

              <div class="account-function mt-40px">
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
        code: this.generateCode(),
        local: 1,
        agree: false,
        email_status: true
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
        this.loading = true
        this.$api.member.register(val).then(() => {
          this.$router.push('/')
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
