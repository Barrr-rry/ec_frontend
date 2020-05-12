import {actions, base, getCommit} from './modules/base'
import mergeDeep from '@/utils/merge_deep'

let api_key_name = 'configsetting'
const obj = mergeDeep(base(api_key_name), {
  actions: mergeDeep(actions(api_key_name), {
    getList(context, filter_obj) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)
      return api.getList(filter_obj).then((res) => {
        commit('item', res.data)
      })
    },

  })
})
// export const state = () => obj.state
// export const mutations = obj.mutations
// export const actions = obj.actions
export default obj
