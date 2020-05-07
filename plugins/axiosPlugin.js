import {cacheAdapterEnhancer} from 'axios-extensions'
import LRU from "lru-cache"
import api from '@/api'


const maxAge = 1000 * 60 * 60

export default function (context, inject) {
  let {$axios, ssrContext, redirect, app} = context
  const baseURL = process.env.VUE_APP_API_URL
  const defaultCache = process.server
    ? ssrContext.$axCache
    : new LRU({maxAge: maxAge})

  const ax = $axios.create({
    baseURL,
    adapter: cacheAdapterEnhancer($axios.defaults.adapter, {
      enabledByDefault: false,
      cacheFlag: 'useCache',
      defaultCache
    }),
    retry: 4,
    retryDelay: 1000,
    timeout: 60000 // 请求超时时间
  })
  ax.all = $axios.all
  ax.baseURL = baseURL
  const err = (error) => {
    if (error.response && error.response.status === 401) {
      redirect('/login')
    }
    return Promise.reject(error)
  }

  ax.interceptors.request.use((config) => {
    const token = app.$cookies.get('token')
    if (token) {
      config.headers.Authorization = `Token ${token}`
    } else {
    }
    return config
  }, err)

  ax.interceptors.response.use((response) => {
    return response
  }, err)
  inject('defaultCache', defaultCache)
  inject('ax', ax)
  inject('api', api(app))

}