import {cacheAdapterEnhancer} from 'axios-extensions'
import LRU from "lru-cache"
import api from '@/api'


const maxAge = 1000 * 60 * 60

export default function (context, inject) {
  let {$axios, ssrContext, redirect, app} = context
  const baseURL = process.env.VUE_APP_API_URL
  // cache 判斷是不是SSR 還是client 對應不同的 cache 機制
  // axCache from axCache.js
  const defaultCache = process.server
    ? ssrContext.$axCache
    : new LRU({maxAge: maxAge})

  /***
   * caches 機制
   * cacheFlag: 參數名稱要叫什麼 詳情看 api/modules/banners.js obj.useCache = true
   * defaultCache: 才是defaultCache 的module
   * ax: axious 初始化
   * */
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
  // 設定如果 401 redirect to 401
  const err = (error) => {
    if (error.response && error.response.status === 401) {
      redirect('/login')
    }
    return Promise.reject(error)
  }
  // 自動增加token
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

  // 設定cache ax api
  inject('defaultCache', defaultCache)
  inject('ax', ax)
  inject('api', api(app))

}