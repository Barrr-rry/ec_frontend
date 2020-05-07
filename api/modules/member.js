import base from './base'
import mergeDeep from '@/utils/merge_deep'

export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'member',
    login(values) {
      return app.$ax.post(`/${this.table_name}/login/`, values).then((res) => {
        app.$ax.setHeader('Authorization', `Token ${res.data.token}`)
        app.$cookies.set('token', res.data.token)
        return Promise.resolve(res)
      })
    },
    logout() {
      return app.$ax.post(`/${this.table_name}/logout/`)
    },
    info() {
      return app.$ax.get(`/${this.table_name}/info/`)
    },
    self_update(values) {
      values['host'] = location.origin
      return app.$ax.put(`/${this.table_name}/self_update/`, values)
    },
    password(values) {
      return app.$ax.put(`/${this.table_name}/password/`, values)
    },
    register(values) {
      values['host'] = location.origin
      return app.$ax.post(`/${this.table_name}/register/`, values)
    },
    register_validate(values) {
      return app.$ax.post(`/${this.table_name}/register_validate/`, values)
    },
    register_resend(values) {
      values['host'] = location.origin
      return app.$ax.post(`/${this.table_name}/register_resend/`, values)
    },
    forgotpassword_setpassword(values) {
      return app.$ax.post(`/${this.table_name}/forgotpassword_setpassword/`, values)
    },
    forgotpassword(values) {
      values['host'] = location.origin
      return app.$ax.post(`/${this.table_name}/forgotpassword/`, values)
    },
    validate_expired(values) {
      return app.$ax.post(`/${this.table_name}/validate_expired/`, values)
    },
    memberaddress(values) {
      return app.$ax.post(`/${this.table_name}/memberaddress/`, values)
    },
    memberwish() {
      return app.$ax.get(`/${this.table_name}/memberwish/`)
    },
    order() {
      return app.$ax.get(`/${this.table_name}/order/`)
    }
  })
}

