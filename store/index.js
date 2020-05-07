const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    token: null,
    cookie: null,
    lang: 'tw',
    previous_url: null,
    currency: null,
  }
}
export const mutations = {
  setAuth(state, token) {
    state.token = token
  },
  setCookie(state, cookie) {
    state.cookie = cookie
  },
  setCurrency(state, currency) {
    state.currency = currency
  },
  setLang(state, lang) {
    state.lang = lang
  },
  setToken(state, token) {
    state.token = token
  },
  setPreviousUrl(state, previous_url) {
    state.previous_url = previous_url
  }
}
export const actions = {
  nuxtServerInit({commit}, {req, app}) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      commit('setCookie', parsed)
      try {
        token = JSON.parse(parsed.token)
      } catch (err) {
        token = parsed.token
        // No valid cookie found
      }
    }
    app.$ax.setHeader('Authorization', `Token ${token}`)
    commit('setAuth', token)
    if (!token) {
      commit('membertoken/changeValue', {key: 'has_token', value: false})
    }
  }
}
