import base from './base'
import mergeDeep from '@/utils/merge_deep'


export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'cart',
    total() {
      return app.$ax.get(`/${this.table_name}/total/`)
    },
    count() {
      return app.$ax.get(`/${this.table_name}/count/`)
    },
  })
}

