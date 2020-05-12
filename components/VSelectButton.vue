<template>
  <button class="v-select-button "
          :class="{'v-select-button--selected':selected}"
          @click="clickTrigger"
  >
    <slot></slot>
    <div v-if="selected" class="v-select-button-tick">
    </div>
    <svg
      v-if="selected"
      class="v-select-button-svg" width="7" height="7" enable-background="new 0 0 12 12" viewBox="0 0 12 12" x="0"
      y="0">
      <g>
        <path fill="#FFF"
              d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path>
      </g>
    </svg>
  </button>
</template>

<script>
  import vModel from "@/mixins/vModel"

  export default {
    name: "VSelectButton",
    mixins: [vModel],
    props: {
      option: {
        default: null
      }
    },
    computed: {
      selected() {
        return this.value === this.option
      }
    },
    methods: {
      clickTrigger(e) {
        this.input = this.option
        this.$emit('click', e)
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>