<template>
  <div>
    <!--<label class="label-title" v-if="title">{{computed_title}}</label>-->
    <slot>


      <!--
        <input
        v-on="$listeners"
        v-bind="$attrs"
        :class="[has_error?'mb-0px':'',input_has_bg?'no-round-input-bg':'no-round-input']"
        :type="type"
        v-model="input"
      />
      -->

      <div class="styled-input">
        <input v-on="$listeners"
               :class="[has_error?'mb-0px':'',input_has_bg?'no-round-input-bg':'no-round-input']"
               :type="type"
               placeholder=" "
               v-model="input" :required="required">
        <label v-if="title">{{computed_title}}</label>
        <label v-else>{{ $attrs.placeholder }}</label>
        <span class="c-input-suffix" v-if="suffix">{{suffix}}</span>
      </div>

    </slot>
    <div :class="error_class" style="color: red"
         v-if="has_error"
    >
      <i class='fas fa-exclamation-circle' style='color:red'></i>
      {{error_message}}
    </div>
  </div>
</template>

<script>
  import vModel from "@/mixins/vModel"
  /***
   * 跟 CForm 互相搭配
   * */

  export default {
    name: "CInput",
    mixins: [vModel],
    props: {
      error_class: {
        type: String,
        default: 'mb-30px'
      },
      suffix: {
        type: String,
        default: null
      },
      input_has_bg: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      validators: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        has_error: false,
        error_message: '',
        // 給cform 辨識用的
        whoami: '<CInput>'
      }
    },
    computed: {
      computed_title() {
        if (this.title) {
          return this.title + (this.required ? ' *' : '')
        } else {
          return ''
        }

      }
    },
    methods: {
      setError(msg) {
        this.has_error = true
        this.error_message = msg
      },
      resetError() {
        this.has_error = false
        this.error_message = ''
      },
      check() {
        // 判斷依據
        // 是否必填
        if (this.required) {
          if (!this.input) {
            this.has_error = true
            this.error_message = this.$t('input_plz')
            return false
          }
        }
        // 可以加入validators 自定義的驗證方式
        for (let validate of this.validators) {
          let rule = null
          let value = this.input
          let callback = (val) => {
            if (val) {
              this.has_error = true
              this.error_message = val
              throw Error()
            }
          }
          try {
            validate(rule, value, callback)
          } catch (e) {
            // 未通過驗證
            return false
          }
        }
        // 通過驗證
        this.has_error = false
        this.error_message = ''
        return true
      }
    },
  }
</script>

<style scoped lang="sass">
  .c-input-suffix
    position: absolute
    right: 5px
    top: 10px

</style>
