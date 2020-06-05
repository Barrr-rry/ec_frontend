<template>
  <img :src="computed_src" alt=""
       class="pointer"
       @mouseenter="mouse_in=true"
       @mouseleave="mouse_in=false"
  >
</template>

<script>
  export default {
    name: "ImageHover",
    props: {
      src: {},
      hover: {}
    },
    data() {
      return {
        mouse_in: false,
      }
    },
    computed: {
      computed_src() {
        return this.mouse_in ? this.hover : this.src
      }
    },
  }
</script>

<style scoped>

</style>