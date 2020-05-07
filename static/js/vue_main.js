let locale = localStorage.getItem('lang') || 'tw'
let local_mapping = {
  'tw': 1,
  'en': 2,
}
const i18n = new VueI18n({
  locale,
  messages,
})

Vue.prototype.api_host = 'http://172.105.194.178:2000/api'
Vue.prototype.media_path = 'http://172.105.194.178:2000/media/'
axios.defaults.baseURL = Vue.prototype.api_host
Vue.prototype.$axios = axios

let app = new Vue({
  i18n,
  el: '#main',
  data: {
    locale,
    local_mapping,
  },
  components: {
    'vueFooter': httpVueLoader('footer.vue'),
    'vueHeader': httpVueLoader('header.vue'),
    'breadcrumb': httpVueLoader('breadcrumb.vue'),
    'benefits': httpVueLoader('benefits.vue'),
    'function-box': httpVueLoader('functionBox.vue'),
    'brand-link': httpVueLoader('brand_link.vue'),
    'vue-modal': httpVueLoader('modal.vue'),
    'coupon-card': httpVueLoader('coupon_card.vue'),
    'wishlist-table': httpVueLoader('wishlist_table.vue'),
    'card-border': httpVueLoader('card_border.vue'),
    'order-card': httpVueLoader('order_card.vue'),
    'counter': httpVueLoader('counter.vue'),
    'slider': httpVueLoader('slider.vue'),
    'footer-quicklink': httpVueLoader('footer-quicklink.vue'),
    'price-filter': httpVueLoader('price-filter.vue'),
    // page
    'shopCart': httpVueLoader('shop_cart.vue'),
    'shopCheckout': httpVueLoader('shop_checkout.vue'),
    'memberCentre': httpVueLoader('member_centre.vue'),
    'wishlist': httpVueLoader('wishlist.vue'),
  },
  mounted() {
  }
})