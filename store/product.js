import {actions, base, getCommit} from './modules/base'
import mergeDeep from '@/utils/merge_deep'

let api_key_name = 'product'
const obj = mergeDeep(base(api_key_name), {
  state: () => ({
    _first_init: false,
    item: null,
    items: [],
    cart_items: [],
    cart_items_obj: {},
  }),
  actions: mergeDeep(actions(api_key_name), {
    getCartList(context, filter_obj) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)
      return api.getCartList(filter_obj).then((res) => {
        commit('cart_items', res.data)
        let cart_items_obj = {}
        for (let el of res.data) {
          cart_items_obj[el.id] = el
        }
        commit('cart_items_obj', cart_items_obj)
      })
    },
  })
})
// export const state = () => obj.state
// export const mutations = obj.mutations
// export const actions = obj.actions
export default obj
