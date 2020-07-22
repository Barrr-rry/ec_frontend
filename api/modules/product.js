import base from "./base"
import mergeDeep from "@/utils/merge_deep"


export default (app) => {
  return mergeDeep(base(app), {
    table_name: 'product',
    index_page() {
      return app.$ax.get(`/${this.table_name}/index_page/`, {useCache: true})
    },
    getList(filter_obj) {
      let obj = {}
      if (filter_obj) {
        obj.params = filter_obj
      }
      obj.useCache = true
      return app.$ax.get(`/${this.table_name}/`, obj)
    },
    getRead(id) {
      return app.$ax.get(`/${this.table_name}/${id}/`, {useCache: true})
    },
    getCartList(filter_obj) {
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


