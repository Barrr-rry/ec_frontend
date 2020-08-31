<template>
  <div>
    123123
    <div>
      <VSelectButton v-model="demo" option="test1">
        test1
      </VSelectButton>
      <VSelectButton v-model="demo" option="test2">
        test2
      </VSelectButton>
    </div>
  </div>
</template>

<script>
  import VSelectButton from "@/components/VSelectButton"

  export default {
    name: "Test",
    components: {
      VSelectButton
    },
    data() {
      return {
        demo: null
      }
    }
  }
</script>

<style scoped>

</style>
