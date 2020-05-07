import {base, getCommit, actions} from './modules/base'
import mergeDeep from '@/utils/merge_deep'

let api_key_name = 'cart'
const obj = mergeDeep(base(api_key_name), {
  state: () => ({
    _first_init: false,
    item: null,
    items: [],
    total: 0,
    count: 0
  }),
  actions: mergeDeep(actions(api_key_name), {
    getTotal(context, filter_obj) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)

      return api.total(filter_obj).then((res) => {
        commit('total', res.data.total)
      })
    },
    getCount(context, filter_obj) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)

      return api.count(filter_obj).then((res) => {
        commit('count', res.data.count)
      })
    }
  })
})
// export const state = () => obj.state
// export const mutations = obj.mutations
// export const actions = obj.actions
export default obj
