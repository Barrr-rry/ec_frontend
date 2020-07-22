export default async function ({store, redirect, app, route}) {
  // If the user is not authenticated
  let $api = app.$api
  if (!store.state.membertoken.has_token) {
    let res = await $api.membertoken.getList()
    if (!res.data.token) {
      store.commit('setForceUpdate',true)
      store.commit('setPreviousUrl',route.fullPath)
      return redirect('/login')
    }
  }
}