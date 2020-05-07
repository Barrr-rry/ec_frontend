<template>
  <modal v-model="input" title="重設密碼" @ok="ok">
    <CForm
      @submit="submit"
      ref="form"
    >
      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('og_password')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            type="password"
            name="password"
            error_class=""
            :placeholder="$t('old_pass')"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('change_password')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            type="password"
            name="new_password"
            error_class=""
            :validators="[validatePassword]"
            :placeholder="$t('new_pass')"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('check_password')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            type="password"
            name="password_confirm"
            error_class=""
            :validators="[validateConfirmPassword]"
            :placeholder="$t('new_pass_again')"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('verification_code')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="code"
            :placeholder="$t('ver')"
            :validators="[validateCode]"
          />
        </div>
      </div>

      <div>
        <div class="d-flex align-items-center">
          <Identify :identifyCode="code" class="pointer" @click="reDraw" ref="identify"></Identify>
          <i class="fas fa-sync-alt pointer ml-20px" @click="reDraw"></i>
          <span class="ml-10px pointer hover-li" @click="reDraw">{{$t('cant_see')}}</span>
        </div>
      </div>
    </CForm>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import validator from "@/mixins/validator"
  import CInput from "@/components/CInput"
  import CForm from "@/components/CForm"
  import Identify from "@/components/Identify"


  export default {
    mixins: [vModel, validator],
    components: {
      Identify,
      CInput,
      CForm,
    },
    props: {
      item: {
        type: Object,
        default: () => {
        }
      }
    },
    data() {
      return {
        code: this.generateCode()
      }
    },
    watch: {
      input(val) {
        if (val) {
          this.initFields()
        }
      }
    },
    methods: {
      initFields() {
        let obj = {
          password: null,
          new_password: null,
          password_confirm: null
        }
        this.$refs.form.setFields(obj)
      },
      ok() {
        this.$refs.form.submit()
      },
      submit(data) {
        this.$api.member.password(data).then(() => {
          this.input = false
          this.$toast.success(this.$t('chg_password'))
        }).catch(err => {
          if (this.$refs.form) {
            this.$refs.form.setError(err.response.data)
          }
        })
      },
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
    }
  }
</script>

<style scoped></style>
