let couponMixin = {
  computed: {
    coupon_discount() {
      // todo
      if (this.coupon_instance && this.coupon_instance.status && this.coupon_instance.role <= this.product_total) {
        if (this.coupon_instance.method === 1) {
          return parseInt(this.coupon_instance.discount)
        } else {
          return parseInt(this.coupon_instance.discount * this.product_total / 100)
        }
      } else {
        return 0
      }
    },
  },
  watch: {}
}
let RewardMixin = {
  computed: {
    info_reward_total() {
      let ret = 0
      if (this.has_token && this.info.reward.length) {
        ret = this.info.reward[0].total_point
      }
      return ret
    },
  },
  watch: {
    total_count() {
      this.getReward()
    },
    coupon_discount() {
      // total or coupon_discount 改變後 檢查reward_discount 需不需要改變
      this.checkRewarddiscount()
    },
    product_total() {
      // total or coupon_discount 改變後 檢查reward_discount 需不需要改變
      this.checkRewarddiscount()
    }
  },
  methods: {
    checkRewarddiscount() {
      let sum = this.product_total - this.coupon_discount
      if (sum < this.reward_discount) {
        this.reward_discount = sum
      }
    },
    useReward() {
      // 確保優惠不會超過商品以及優惠券點數
      let min_data = Math.min(this.product_total, this.info_reward_total)
      if (this.reward_discount_temp > min_data) {
        this.reward_discount_temp = min_data
      }
      this.reward_discount = this.reward_discount_temp
    },
    init_reward_discount() {
      this.reward_discount_temp = this.info_reward_total > this.product_total ? this.product_total : this.info_reward_total
      this.reward_discount = this.reward_discount_temp
    },
    getReward() {
      this.$api.ecpay.calc_reward(this.total_count).then(res => {
        this.reward = res.data.reward
      })
    },
  },
  mounted() {
    this.init_reward_discount()
  }
}
export {couponMixin, RewardMixin}