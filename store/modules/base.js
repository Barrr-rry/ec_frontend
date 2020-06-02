import _ from 'lodash'

const getCommit = (context) => {
  const _commit = _.partial(context.commit, 'changeValue')
  return (key, value) => _commit({key, value})
}

const actions = (api_key_name) => {
  return {
    getList(context, filter_obj) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)
      return api.getList(filter_obj).then((res) => {
        commit('items', res.data)
      })
    },
    firstInitList(context) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)
      if (context.state._first_init) {
        return
      }
      commit('_first_init', true)
      return api.getList().then((res) => {
        commit('items', res.data)
      })
    },
    getRead(context, id) {
      let api = this.$api[api_key_name]
      const commit = getCommit(context)
      return api.getRead(id).then((res) => {
        commit('item', res.data)
      })
    }
  }
}

const base = (api_key_name) => {
  return {
    namespaced: true,
    state: () => ({
      _first_init: false,
      item: null,
      items: []
    }),
    mutations: {
      changeValue(state, obj) {
        const {key, value} = obj
        state[key] = value
      },
      resetValue(state) {
        state = {
          _first_init: false,
          item: null,
          items: []
        }
      },
      firstInitReset(state) {
        state._first_init = false
      }
    },
    actions: actions(api_key_name),
    modules: {}
  }
}
export {getCommit, _, base, actions}
