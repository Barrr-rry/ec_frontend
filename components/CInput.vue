<template>
  <div>
    <label v-if="title" class="mb-20px">{{computed_title}}</label>
    <slot>
      <input
        v-on="$listeners"
        v-bind="$attrs"
        :class="[has_error?'mb-0px':'',input_has_bg?'no-round-input-bg':'no-round-input']"
        :type="type"
        v-model="input"
      />
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

  export default {
    name: "CInput",
    mixins: [vModel],
    props: {
      error_class: {
        type: String,
        default: 'mb-30px'
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
        if (this.required) {
          if (!this.input) {
            this.has_error = true
            this.error_message = this.$t('input_plz')
            return false
          }
        }
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
            return false
          }
        }
        this.has_error = false
        this.error_message = ''
        return true
      }
    },
  }
</script>

<style scoped>

</style>
