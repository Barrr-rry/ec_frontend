import {base, actions, getCommit} from './modules/base'
import mergeDeep from '@/utils/merge_deep'

const obj = mergeDeep(base('order'), {
  actions: mergeDeep(actions('order'), {
    getList(context, filter_obj) {
      const commit = getCommit(context)

      return this.$api.member.order(filter_obj).then((res) => {
        commit('items', res.data)
      })
    }
  })
})
// export const state = () => obj.state
// export const mutations = obj.mutations
// export const actions = obj.actions
export default obj
