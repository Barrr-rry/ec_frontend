import {base} from './modules/base'
import mergeDeep from '@/utils/merge_deep'

const obj = mergeDeep(base('brand'), {})
// export const state = () => obj.state
// export const mutations = obj.mutations
// export const actions = obj.actions
export default obj
