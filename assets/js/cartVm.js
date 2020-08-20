import Vue from 'vue'

// init一個vue instacne
// 因為component 之前要互相操作 使用store 太麻煩
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
        // 計算金額方式
        if ((this.product_total - activity) < this.parent_vm.reward_discount) {
          this.parent_vm.reward_discount = this.product_total - activity
        }
        let ret = this.product_total - activity - this.parent_vm.coupon_discount - this.parent_vm.reward_discount
        return ret > 0 ? ret : 0
      },
    },
    watch: {},
    methods: {
      remove(spec_id, cart_id) {
        // 刪除該商品
        delete this.carts_obj[spec_id]
        if (this.parent_vm.has_token && cart_id) {
          this.apiRemove(cart_id)
        }
        this.initData()
      },
      apiRemove(id) {
        // 連動api 刪除 並且更新資料到store
        this.parent_vm.$api.cart.deleteData(id).then(() => {
          let removed_items = this.parent_vm.items.filter(x => x.id !== id)
          this.parent_vm.$store.commit('cart/changeValue', {
            key: 'items',
            value: removed_items
          })
        })
      },
      getAllowMaxWeight() {
        // 抓最大允許重量
        let max_wieght = 0
        for (let freeshipping of this.parent_vm.freeshippings) {
          if (freeshipping.weight > max_wieght) {
            max_wieght = freeshipping.weight
          }
        }
        return max_wieght
      },
      getWight() {
        // 計算目前所有的重量
        let ret = 0
        for (let key in this.carts_obj) {
          let el = this.carts_obj[key]
          // 計算公式
          ret += el.quantity * el.specification_detail.weight
        }
        // 四捨五入
        this.weight = Math.round(ret * 100) / 100
      },
      getTotal() {
        // 取得所有的價錢
        let ret = 0
        for (let key in this.carts_obj) {
          let el = this.carts_obj[key]
          if (el.specification_detail.quantity > 0 && el.status) {
            // 計算公式
            ret += el.quantity * el.specification_detail.price
          }
        }
        this.product_total = ret
      },
      trigger(key, value) {
        // 資料有變動 就要觸發重新init data
        this.carts_obj[key] = value
        this.initData()
      },
      activitySave(el) {
        // 活動折扣計算公式
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
        // 取得現在有什麼活動
        let activity_obj = {}
        for (let key in this.carts_obj) {
          let el = this.carts_obj[key]
          if (!el.activity_detail) {
            continue
          }
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
          if (!activity_detail) {
            continue
          }
          let activity_id = el.activity_detail.id
          let total_count = activity_detail.give_count + activity_detail.buy_count
          if (activity_obj[activity_id].count >= total_count) {
            if (!in_activity_obj.hasOwnProperty(activity_id)) {
              in_activity_obj[activity_id] = {
                activity_id,
                activity_detail,
                count: parseInt(activity_obj[activity_id].count / total_count) * activity_detail.give_count,
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
