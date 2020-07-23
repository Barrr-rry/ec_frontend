export default {
  methods: {
    get_lng_name(el) {
      let locale = this.$cookies.get('lang') || 'tw'
      let cn_name = el.cn_name
      let en_name = el.en_name
      if (!en_name) {
        en_name = cn_name
      }
      if (!cn_name) {
        cn_name = en_name
      }
      return locale === 'tw' ? cn_name : en_name
    },
  }
}