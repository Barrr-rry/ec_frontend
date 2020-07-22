import base from './base'
import mergeDeep from '@/utils/merge_deep'


export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'banner',
    getList(filter_obj) {
      let obj = {}
      if (filter_obj) {
        obj.params = filter_obj
      }
      // 需要cache 機制
      obj.useCache = true
      return app.$ax.get(`/${this.table_name}/`, obj)
    },
  })
}

