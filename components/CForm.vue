<template>
  <form @submit="submit">
    <slot></slot>
  </form>
</template>

<script>
  /**
   * 這個當除實作目的是為了符合 CMS 寫法
   * 所以盡量維持一致
   * **/
  export default {
    name: "CForm",
    data() {
      return {
        data: {}
      }
    },
    methods: {
      setFields(obj) {
        // 配合 cinput 主動更新資源
        for (let child of this.$children) {
          if (child.whoami === '<CInput>') {
            for (let key in obj) {
              if (child.name === key) {
                child.input = obj[key]
              }
            }
          }
        }
      },
      resetError() {
        for (let child of this.$children) {
          if (child.whoami === '<CInput>') {
            child.resetError()
          }
        }
      },
      setError(obj) {
        for (let key in obj) {
          for (let child of this.$children) {
            if (child.whoami === '<CInput>' && child.name === key) {
              child.setError(obj[key][0])
            }
          }
        }
      },
      submit(e) {
        // 避免直接產生default 直接跳頁面
        if (e) {
          e.preventDefault()
        }
        this.data = {}
        if (this.validate()) {
          this.$emit('submit', this.data)
        }
      },
      validate() {
        for (let child of this.$children) {
          // 如果 input check 沒有聽過 validate 就不會通過
          if (child.whoami === '<CInput>') {
            if (!child.check()) {
              return false
            }
            // validate 通過後  也會更新 this.data 的值
            if (child.name) {
              this.data[child.name] = child.input
              if (!this.data[child.name]) {
                this.data[child.name] = null
              }
            }
          }
        }
        return true
      }
    },
  }
</script>

<style scoped>

</style>