const obj = {
  namespaced: true,
  state: () => ({
    cart: null,
    modal: false,
    method: null,
  }),
  mutations: {
    initCart(state, obj) {
      let {cart, method} = obj
      state.cart = cart
      state.modal = true
      state.method = method
    },
    resetCart(state) {
      state.cart = null
      state.modal = false
      state.method = null
    }
  },
  actions: {},
  modules: {}
}
export default obj
