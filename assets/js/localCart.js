// todo 這邊改成nuxt cookie 要改動的東西太多了
import Cookie from 'js-cookie'

let getCookieCart = () => {
  let cart = Cookie.get('cart') || []
  try {
    cart = JSON.parse(cart)
  } catch (e) {
    cart = []
  }
  return cart
}

function cartUpdate(id, spec_id, values) {
  let cart = getCookieCart()
  for (let c of cart) {
    if (c.product === id && c.specification_detail === spec_id) {
      c.quantity = values.quantity
      c.specification_detail = values.specification_detail
    }
  }
  return cart
}

function cartRemove(id) {
  let cart = getCookieCart()
  return cart.filter((el) => parseInt(el.product) !== id)
}

let cartProcessInfo = (cart) => {
  /****
   * 將重複的資料組成 新的cart
   * 以及其他資訊 product_ids, total_count
   * return {product_ids, total_count, cart}
   * */
  let merged_cart = {}
  for (let c of cart) {
    let key = `${c.product}.${c.specification_detail}`
    let quantity = merged_cart[key] || 0
    quantity += c.quantity
    merged_cart[key] = quantity
  }

  let new_cart = []
  let product_ids = []
  let total_count = 0
  for (let key in merged_cart) {
    if (!merged_cart.hasOwnProperty(key)) {
      continue
    }
    let product = parseInt(key.split('.')[0])
    let specification_detail = parseInt(key.split('.')[1])
    new_cart.push({
      product,
      specification_detail,
      quantity: merged_cart[key]
    })
    product_ids.push(product)
    total_count += merged_cart[key]
  }
  return {
    new_cart,
    product_ids,
    total_count
  }
}
let changeCartTotal = (store, cart) => {
  let total_price = 0
  let cart_items_obj = store.state.product.cart_items_obj
  for (let el of cart) {
    let product = cart_items_obj[el.product]
    let price = 0
    // INT 型態
    if (Number.isInteger(el.specification_detail)) {
      price = product.specifications_detail.filter(x => x.id === el.specification_detail)[0].price
    } else {
      price = el.specification_detail ? el.specification_detail.price : 0
    }
    total_price += price * el.quantity
  }
  store.commit('cart/changeValue', {key: 'total', value: total_price})
}
let storeProcess = (store, cart, product_ids, total_count) => {
  /***
   * 更新store 資料也改變 cart count & total
   * */
  // set store cart count
  store.commit('cart/changeValue', {key: 'count', value: total_count})
  // set store cart total
  return store.dispatch('product/getCartList', {ids: product_ids.join(',')}).then(() => {
    changeCartTotal(store, cart)
  })
}

let addTOCart = (values, store) => {
  let cart = getCookieCart()
  cart.push(values)
  let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
  // cookie add cart
  Cookie.set('cart', new_cart)
  storeProcess(store, new_cart, product_ids, total_count)
}

export {
  addTOCart,
  getCookieCart,
  cartProcessInfo,
  storeProcess,
  changeCartTotal,
  cartUpdate,
  cartRemove,
}
