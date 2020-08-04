<template>
  <modal v-model="input" title="分享商品到" @ok="ok">
    <div class="row justify-content-center">
      <i class="fab fb-share" @click="share('facebook')"></i>
      <i class="fab ml-20px mr-20px line-share" @click="share('line')"></i>
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
        // 透墮第三方網站 做share 功能
        const webTitle = `${this.product_name} | HaveFun Men’s Underwear`,
          webUrl = location.href
        let shareUrl = (social === 'line') ? `快來看看${this.product_name}：${webUrl}?openExternalBrowser=1` : webUrl
        window.open('https://www.addtoany.com/add_to/' + social + '?linkurl=' + shareUrl + '&amp;linkname=' + encodeURI(webTitle))
      },
    }
  }
</script>

<style scoped></style>
