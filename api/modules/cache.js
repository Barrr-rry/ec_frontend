import base from './base'
import mergeDeep from '@/utils/merge_deep'


export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'cache',
    getList(filter_obj) {
      let obj = {}
      if (filter_obj) {
        obj.params = filter_obj
      }
      return app.$ax.get(`/${this.table_name}/`, obj)
    },
  })
}



