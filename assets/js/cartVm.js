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