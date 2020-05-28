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
        in_activity_obj: [],//符合活動的obj
      }
    },
    computed: {
      total_count() {
        // 總金額
        let activity = 0
        for (let key in this.in_activity_obj) {
          let el = this.in_activity_obj[key]
          activity += this.activitySave(el)
        }
        let ret = this.product_total - activity - this.parent_vm.coupon_discount - this.parent_vm.reward_discount
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
      activitySave(el) {
        let count = el.count
        let ret = 0
        let price_list = [...el.price_list]
        while (count) {
          count -= 1
          ret += price_list.shift()
        }
        return ret
      },
      getActivity() {
        // activity_list = []
        let activity_obj = {}
        for (let key in this.carts_obj) {
          let el = this.carts_obj[key]
          let activity_id = el.activity_detail.id
          // init list
          if (!activity_obj.hasOwnProperty(activity_id)) {
            activity_obj[activity_id] = {
              activity_detail: el.activity_detail,
              count: 0,

            }
          }
          activity_obj[activity_id].count += el.quantity

        }
        let in_activity_obj = {}
        for (let key in this.carts_obj) {
          let el = this.carts_obj[key]
          // 1: 尚未有資料
          el.vm.cart_status = 1
          let activity_detail = el.activity_detail
          let activity_id = el.activity_detail.id
          let total_count = activity_detail.give_count + activity_detail.buy_count
          if (activity_obj[activity_id].count >= total_count) {
            if (!in_activity_obj.hasOwnProperty(activity_id)) {
              in_activity_obj[activity_id] = {
                activity_id,
                activity_detail,
                count: parseInt(activity_obj[activity_id].count / total_count),
                price_list: []
              }
            }
            let price_list = []
            for (let i = 0; i < el.quantity; i++) {
              price_list.push(el.specification_detail.price)
            }
            in_activity_obj[activity_id].price_list = in_activity_obj[activity_id].price_list.concat(price_list)
            in_activity_obj[activity_id].price_list.sort()
            // 3: 已享受折扣
            el.vm.cart_status = 3
          } else {
            // 2: 未符合折扣
            el.vm.cart_status = 2
          }
        }
        this.in_activity_obj = in_activity_obj
      },
      initData() {
        // todo 效能問題 應該一次回圈就好
        this.getWight()
        this.getTotal()
        this.getActivity()
      }
    }
  })
}
export {
  createVm
}