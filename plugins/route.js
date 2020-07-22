export default ({app, store}) => {
  app.router.afterEach((to, from) => {
    if (store.state.force_update) {
      store.commit('setForceUpdate', false)
      return
    }
    store.commit('setPreviousUrl', from.path)
  })
}
