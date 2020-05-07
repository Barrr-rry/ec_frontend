import {base, getCommit} from './modules/base'
import mergeDeep from '@/utils/merge_deep'

let api_key_name = 'memberwish'
const obj = mergeDeep(base(api_key_name), {
  state: () => ({
    _first_init: false,
    item: null,
    items: [],
    ids: []
  }),
  actions: mergeDeep((api_key_name, {
    getList(context, filter_obj) {
      const commit = getCommit(context)

      return this.$api.member.memberwish(filter_obj).then((res) => {
        commit('items', res.data)
        commit('ids', res.data.map((item) => item.product))
      })
    }
  }))
})
// export const state = () => obj.state
// export const mutations = obj.mutations
// export const actions = obj.actions
export default obj
