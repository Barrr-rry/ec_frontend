import {addTOCart} from '@/assets/js/localCart'

let default_product = {
  level1_title: null,
  level2_title: null,
  specifications: [],
}

export default {
  namespaced: true,
  state: () => ({
    model: false,
    product: {
      ...default_product
    },
  }),
  mutations: {
    changeValue(state, obj) {
      const {key, value} = obj
      state[key] = value
    },
    initWishModal(state, product) {
      state.product = product
      state.model = true
    },
    resetWishModal(state) {
      state.product = {
        ...default_product
      }
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

