import {initFunction, preload, loadFadeout} from "@/static/js/main"
import Cookie from 'js-cookie'

export default {
  data() {
    return {
      loading: false,
    }
  },
  async asyncData() {
    return {
      title: '汴利購 EZGO｜最值得信賴、價格實惠的保健食品代購品牌'
    }
  },
  head() {
    return {
      title: this.title,


      meta: [
        {hid: 'keywords', name: 'keywords', content: '汴利購 - 代購,保健食品'},
        {
          hid: 'description',
          name: 'description',
          content: '最值得信賴的保健食品代購品牌 - 便利購 EZGO 已經營數年，是值得您信賴的保健食品代購品牌，在全台灣超過 300 位會員推薦。'
        },
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {hid: 'og:url', property: 'og:url', content: 'https://ezgo-buy.com/'},
        {hid: 'og:title', property: 'og:title', content: '汴利購 EZGO｜最值得信賴、價格實惠的保健食品代購品牌'},
        {
          hid: 'og:description',
          property: 'og:description',
          content: '最值得信賴的保健食品代購品牌 - 便利購 EZGO 已經營數年，是值得您信賴的保健食品代購品牌，在全台灣超過 300 位會員推薦。'
        },
        {hid: 'og:site_name', property: 'og:site_name', content: '汴利購 - EZGO'},
      ]
    }
  },
  watch: {
    loading(val) {
      if (val) {
        this.preload()
      } else {
        this.loadFadeout()
      }
    }
  },
  methods: {
    preload() {
      preload()
    },
    loadFadeout() {
      loadFadeout()
    }
  },
  mounted() {
    function closeMenu(event) {
      $('#ogami-mobile-menu').css({
        left: '-100%',
      })
      $('.ogamin-mobile-menu_bg').css({
        display: 'none',
      })
    }

    this.loading = true
    initFunction(() => {
      this.loading = false
      closeMenu()
      $('.icon_minus-06').removeClass('icon_minus-06').addClass('icon_plus')
    })
  }
}