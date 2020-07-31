export default {
  methods: {
    getText(obj, ch_key = 'ch_name', en_key = 'en_name') {
      let lang = this.$store.state.lang
      let ch_name = obj[ch_key]
      let en_name = obj[en_key]
      let ret = lang === 'tw' ? ch_name : en_name
      ret = ret || ch_name || en_name
      return ret
    },
  }
}