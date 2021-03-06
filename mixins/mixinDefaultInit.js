import {initFunction, preload, loadFadeout} from "@/static/js/main"
import Cookie from 'js-cookie'
import langMixin from "@/mixins/langMixin"

/**
 * 每一個頁面共用的資料
 * */
export default {
  mixins: [langMixin],
  data() {
    return {
      loading: false,
    }
  },
  async asyncData() {
    return {
      title: 'HaveFun Men\'s Underwear | 男性內褲'
    }
  },
  middleware: [
      'inMaintain'
    ],
  head() {
    return {
      title: this.title,
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
