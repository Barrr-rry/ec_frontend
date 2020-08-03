export default ({app, store}) => {
  app.router.afterEach((to, from) => {
    // todo force_update 之前似乎要做什麼 但目前在檢查似乎沒有用到 之後如果再發現沒有用到可以刪除掉
    if (store.state.force_update) {
      store.commit('setForceUpdate', false)
      return
    }
    // previous_url 是為了給login 記錄用的
    // 這樣login 後知道頁面要返回到上一個頁面是到哪裡去
    store.commit('setPreviousUrl', from.path)
  })
}
