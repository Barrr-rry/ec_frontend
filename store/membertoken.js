export default {
  namespaced: true,
  state: () => ({
    has_token: false
  }),
  mutations: {
    changeValue(state, obj) {
      const {key, value} = obj
      state[key] = value
    },
  },
  actions: {
    getList(context, filter_obj) {
      let api = this.$api['membertoken']
      return api.getList(filter_obj).then((res) => {
        context.commit('changeValue', {key: 'has_token', value: res.data.token})
      })
    }
  },
  modules: {}
}
