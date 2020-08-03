import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from "@/assets/js/messages"
// 註冊i18n 並且把messages 註冊進去

// let locale = localStorage.getItem('lang') || 'tw'
Vue.use(VueI18n)
export default ({app, store, commit}) => {
  let locale = app.$cookies.get('lang')
  if (!locale) {
    locale = store.state.lang
    if (!locale) {
      store.commit('setLang', 'tw')
    }
  } else {
    store.commit('setLang', locale)
  }
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: locale,
    messages
  })
}
