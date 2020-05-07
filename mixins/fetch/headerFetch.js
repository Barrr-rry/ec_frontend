const cookieparser = process.server ? require('cookieparser') : undefined
import {getCookieCart, cartProcessInfo, changeCartTotal} from "@/assets/js/localCart"


let fetchReturn = async (ctx, array = []) => {
  // 先判斷是否登入
  await ctx.store.dispatch('membertoken/getList')

  // set cookie
  if (cookieparser && ctx.req && ctx.req.headers.cookie) {
    let parsed = cookieparser.parse(ctx.req.headers.cookie)
    ctx.store.commit('setCookie', parsed)
  }
  // 判斷cache，從cache 判斷是否相同 如果不同則清除cache 並且更新cookie
  await ctx.store.dispatch('cache/getList')
  let cache_state = ctx.store.state.cache.item
  let $defaultCache = ctx.app.$defaultCache
  let cookie_cache = ctx.app.$cookies.get('cache')
  if (!cookie_cache || !cache_state) {
    $defaultCache.reset()
  } else {
    for (let key in cookie_cache) {
      if (!cookie_cache.hasOwnProperty(key)) {
        continue
      }
      if (cache_state[key] !== cookie_cache[key]) {
        cookie_cache[key] = cache_state[key]
        for (let cache_key of $defaultCache.keys()) {
          if (cache_key.includes(key)) {
            $defaultCache.del(cache_key)
          }
        }
      }
    }
  }
  ctx.app.$cookies.set('cache', cookie_cache || cache_state)


  // get cart info
  let cart = getCookieCart()
  if (cookieparser && !cart.length && ctx.req && ctx.req.headers.cookie) {
    try {
      cart = JSON.parse(cookieparser.parse(ctx.req.headers.cookie).cart)
    } catch (e) {

    }
  }
  let info = cartProcessInfo(cart)

  // base promise list
  let promiseList = [
    ctx.store.dispatch('category/getList'),
    ctx.store.dispatch('brand/getList'),
    ctx.store.dispatch('tag/getList'),
    ctx.store.dispatch('memberwish/getList'),
    ctx.store.dispatch('price/getList'),
    ...array
  ]
  // add cartList if product_ids
  if (info.product_ids.length) {
    promiseList.push(
      ctx.store.dispatch('product/getCartList', {ids: info.product_ids.join(',')})
    )
  }
  // has token get cart info
  if (ctx.store.state.membertoken.has_token) {
    promiseList.push(ctx.store.dispatch('cart/getTotal'))
    promiseList.push(ctx.store.dispatch('cart/getCount'))
  }

  return Promise.all(promiseList).then(() => {
    // 如果沒有登入就用cookie的cart
    if (!ctx.store.state.membertoken.has_token) {
      ctx.store.commit('cart/changeValue', {key: 'count', value: info.total_count})
      changeCartTotal(ctx.store, cart)
    }
  })
}
export {
  fetchReturn
}

export default {
  fetch(ctx) {
    return fetchReturn(ctx)
  }
}