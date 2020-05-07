import base from './base'
import mergeDeep from '@/utils/merge_deep'


export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'taglist',
    getList(filter_obj) {
      let obj = {}
      if (filter_obj) {
        obj.params = filter_obj
      }
      obj.useCache = true
      return app.$ax.get(`/${this.table_name}/`, obj)
    },
  })
}

