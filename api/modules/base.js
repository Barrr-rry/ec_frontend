export default (app) => {
  return {
    table_name: '',
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
    }
  }

}