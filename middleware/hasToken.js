export default async function ({store, redirect, app}) {
  // If the user is not authenticated
  let $api = app.$api
  if (!store.state.membertoken.has_token) {
    let res = await $api.membertoken.getList()
    if (!res.data.token) {
      return redirect('/login')
    }
  }
}