import {base, actions, getCommit} from './modules/base'
import mergeDeep from '@/utils/merge_deep'

let api_key_name = 'member'
const obj = mergeDeep(base(api_key_name), {
  actions: mergeDeep(actions(api_key_name), {
    info(context) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)
      return api.info().then((res) => {
        commit('item', res.data)
      })
    }

  })
})
// export const state = () => obj.state
// export const mutations = obj.mutations
// export const actions = obj.actions
export default obj
