export default ({store, app}) => {
  let currency = app.$cookies.get('currency') || 'tw'
  store.commit('setCurrency', currency)
}
