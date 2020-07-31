import {initFunction, preload, loadFadeout} from "@/static/js/main"
import Cookie from 'js-cookie'
import langMixin from "@/mixins/langMixin"

export default {
  mixins: [langMixin],
  data() {
    return {
      loading: false,
    }
  },
  async asyncData() {
    return {
      title: '電商系統 EC｜最值得信賴、價格實惠的保健食品代購品牌'
    }
  },
  head() {
    return {
      title: this.title,


      meta: [
        {hid: 'keywords', name: 'keywords', content: '電商系統 - 代購,保健食品'},
        {
          hid: 'description',
          name: 'description',
          content: '最值得信賴的保健食品代購品牌 - 電商系統 EC 已經營數年，是值得您信賴的保健食品代購品牌，在全台灣超過 300 位會員推薦。'
        },
        {hid: 'og:type', property: 'og:type', content: 'website'},
        {hid: 'og:url', property: 'og:url', content: 'https://ezgo-buy.com/'},
        {hid: 'og:title', property: 'og:title', content: '電商系統 EC｜最值得信賴、價格實惠的保健食品代購品牌'},
        {
          hid: 'og:description',
          property: 'og:description',
          content: '最值得信賴的保健食品代購品牌 - 電商系統 EC 已經營數年，是值得您信賴的保健食品代購品牌，在全台灣超過 300 位會員推薦。'
        },
        {hid: 'og:site_name', property: 'og:site_name', content: '電商系統 - EC'},
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
    },
    closeMenu() {
      // 左邊menu 強制關掉
      let $dropdownMenu = $('header .department-dropdown-menu')
      $dropdownMenu.slideUp('fast')

      // 手機menu
      $('#ogami-mobile-menu').css({
        left: '-100%',
      })
      $('.ogamin-mobile-menu_bg').css({
        display: 'none',
      })
      // + - 自動關閉
      $('.icon_minus-06').each(function () {
        $(this).parent().next('.sub-menu').slideToggle('100');
        $(this).toggleClass('icon_minus-06 icon_plus');
      })
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

    $('.nuxt-link-active').on('click', () => {
      this.closeMenu()
    })
    this.closeMenu()
    this.loading = true
    initFunction(() => {
      this.loading = false
      $('.icon_minus-06').removeClass('icon_minus-06').addClass('icon_plus')
    })
  }
}
