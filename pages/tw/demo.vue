<template>
  <div>123123123</div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"


  export default {
    name: 'index_page',
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('banner/getList')])
    },
    async asyncData({app}) {
      const {data} = await app.$api.banner.getList()
      return {
        data
      }
    },
  }
</script>
