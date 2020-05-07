import {getCommit} from './modules/base'

export default {
  namespaced: true,
  state: () => ({
    item: null,
  }),
  mutations: {
    changeValue(state, obj) {
      const {key, value} = obj
      state[key] = value
    },
  },
  actions: {
    getList(context, filter_obj) {
      const commit = getCommit(context)
      return this.$api.cache.getList(filter_obj).then((res) => {
        commit('item', res.data)
      })
    },
  },
  modules: {}
}