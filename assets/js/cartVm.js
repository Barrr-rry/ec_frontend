import Vue from 'vue'


let createVm = (parent_vm) => {
  return new Vue({
    data() {
      return {
        parent_vm,
        weight_message: '',
        carts_obj: {},
        weight: 0,
        product_total: 0,
      }
    },
    computed: {
      total_count() {
        // 總金額
        // todo
        let ret = this.product_total - this.parent_vm.coupon_discount - this.parent_vm.reward_discount
        return ret > 0 ? ret : 0
      },
    },
    watch: {},
    methods: {
      remove(spec_id, cart_id) {
        delete this.carts_obj[spec_id]
        if (this.parent_vm.has_token && cart_id) {
          this.apiRemove(cart_id)
        }
        this.initData()
      },
      apiRemove(id) {
        this.parent_vm.$api.cart.deleteData(id).then(() => {
          let removed_items = this.parent_vm.items.filter(x => x.id !== id)
          this.parent_vm.$store.commit('cart/changeValue', {
            key: 'items',
            value: removed_items
          })
        })
      },
      getAllowMaxWeight() {
        let max_wieght = 0
        for (let freeshipping of this.parent_vm.freeshippings) {
          if (freeshipping.weight > max_wieght) {
            max_wieght = freeshipping.weight
          }
        }
        return max_wieght
      },
      getWight() {
        let ret = 0
        for (let key in this.carts_obj) {
          let el = this.carts_obj[key]
          ret += el.quantity * el.specification_detail.weight
        }
        this.weight = Math.round(ret * 100) / 100
      },
      getTotal() {
        let ret = 0
        for (let key in this.carts_obj) {
          let el = this.carts_obj[key]
          ret += el.quantity * el.specification_detail.price
        }
        this.product_total = ret
      },
      trigger(key, value) {
        this.carts_obj[key] = value
        this.initData()
      },
      initData() {
        this.getWight()
        this.getTotal()
      }
    }
  })
}
export {
  createVm
}