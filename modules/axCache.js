import LRU from "lru-cache"

const maxAge = 1000 * 60 * 60

export default function (_moduleOptions) {
  const axCache = new LRU({maxAge: maxAge})
  // server side render 的機制
  this.nuxt.hook("vue-renderer:ssr:prepareContext", ssrContext => {
    ssrContext.$axCache = axCache
  })
}