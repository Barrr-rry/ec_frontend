export default {
  namespaced: true,
  state: () => ({
    model: false,
    product_name: null,
  }),
  mutations: {
    changeValue(state, obj) {
      const {key, value} = obj
      state[key] = value
    },
    initWishModal(state, product_name) {
      state.product_name = product_name
      state.model = true
    },
    resetWishModal(state) {
      state.product_name = ''
      state.model = false
    }
  },
  actions: {}
}

