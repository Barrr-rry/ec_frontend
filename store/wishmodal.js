import {addTOCart} from '@/assets/js/localCart'

export default {
  namespaced: true,
  state: () => ({
    model: false,
    specifications: [],
    product_id: null,
  }),
  mutations: {
    changeValue(state, obj) {
      const {key, value} = obj
      state[key] = value
    },
    initWishModal(state, obj) {
      let {product_id, specifications} = obj
      state.product_id = product_id
      state.specifications = specifications
      state.model = true
    },
    resetWishModal(state) {
      state.product_id = null
      state.specifications = []
      state.model = false
    }
  },
  actions: {
    toCart(context, values) {
      if (!this.state.membertoken.has_token) {
        addTOCart(values, this)
        return Promise.resolve()
      }
      return this.$api.cart.postData(values).then(() => {
        this.dispatch('cart/getCount')
        this.dispatch('cart/getTotal')
      })
    },
  }
}

