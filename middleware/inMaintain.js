export default async function ({store, redirect, app, route}) {
  // If the user is not authenticated
  let $api = app.$api
  let res = await $api.configsetting.getList()
  let in_maintenance = res.data.in_maintenance
  if (in_maintenance) {
    return redirect('/maintenance')
  }
}
