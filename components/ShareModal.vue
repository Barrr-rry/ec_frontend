<template>
  <modal v-model="input" title="分享商品" @ok="ok">
    <div class="d-flex">
      <i class="fab fb-share" @click="share('facebook')"></i>
      <i class="fab line-share" @click="share('line')"></i>
      <i class="fab twitter-share" @click="share('twitter')"></i>
    </div>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import {mapState} from 'vuex'

  export default {
    mixins: [vModel],
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState('sharemodal', {
        product_name: state => state.product_name
      })

    },
    watch: {},
    methods: {
      ok() {
        this.input = false
      },
      share(social) {
        const webTitle = `${this.product_name} | EZGO`,
          webUrl = location.href
        let shareUrl = (social === 'line') ? `快來看看${this.product_name}：${webUrl}?openExternalBrowser=1` : webUrl
        window.open('https://www.addtoany.com/add_to/' + social + '?linkurl=' + shareUrl + '&amp;linkname=' + encodeURI(webTitle))
      },
    }
  }
</script>

<style scoped></style>
