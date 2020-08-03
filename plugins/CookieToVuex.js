export default ({store, app}) => {
  // 如果cookie 有取得道currency 更新到store
  let currency = app.$cookies.get('currency') || 'tw'
  store.commit('setCurrency', currency)
}
