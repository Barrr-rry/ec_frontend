import base from './base'
import mergeDeep from '@/utils/merge_deep'

export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'ecpay',
    payment(values) {
      return app.$ax.post(`/${this.table_name}/payment/`, values)
    },
    repayment(values) {
      return app.$ax.post(`/${this.table_name}/repayment/`, values)
    },
    get_store(values) {
      return app.$ax.post(`/${this.table_name}/chosse_map/`, values)
    },
    shipping(values) {
      return app.$ax.post(`/${this.table_name}/shipping/`, values)
    },
    getList(filter_obj) {
      let obj = {}
      if (filter_obj) {
        obj.params = filter_obj
      }
      return app.$ax.get(`/${this.table_name}/`, obj)
    },
    putData(id, values) {
      return app.$ax.put(`/${this.table_name}/${id}/`, values)
    },
    postData(values) {
      return app.$ax.post(`/${this.table_name}/`, values)
    },
    getRead(id) {
      return app.$ax.get(`/${this.table_name}/${id}/`)
    },
    deleteData(id) {
      return app.$ax.delete(`/${this.table_name}/${id}/`)
    },
    calc_reward(total_price) {
      return app.$ax.get(`/${this.table_name}/calc_reward/`, {
        params: {
          total_price: total_price
        }
      })
    }
  })
}

