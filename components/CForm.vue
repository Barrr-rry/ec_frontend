<template>
  <form @submit="submit">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: "CForm",
    data() {
      return {
        data: {}
      }
    },
    methods: {
      setFields(obj) {
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
          if (child.whoami === '<CInput>') {
            if (!child.check()) {
              return false
            }
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