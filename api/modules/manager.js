import base from './base'
import mergeDeep from '@/utils/merge_deep'


export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'manager',
    login(values) {
      return app.$ax.post(`/${this.table_name}/login/`, values).then((res) => {
        app.$cookies.set('token', res.data.token)
      })
    }
  })
}