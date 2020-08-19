let couponMixin = {
  computed: {
    coupon_discount() {
      // 計算coupon 的折扣
      if (this.coupon_instance && this.coupon_instance.status && this.coupon_instance.role <= this.cartVm.product_total) {
        if (this.coupon_instance.method === 1) {
          return parseInt(this.coupon_instance.discount)
        } else {
          return parseInt(this.coupon_instance.discount * this.cartVm.product_total / 100)
        }
      } else {
        return 0
      }
    },
    coupon_percent() {
      // 計算coupon 的折扣
      if (this.coupon_instance && this.coupon_instance.status && this.coupon_instance.role <= this.cartVm.product_total) {
        if (this.coupon_instance.method === 1) {
          return false
        } else {
          return this.coupon_instance.discount
        }
      } else {
        return false
      }
    },
  },
  watch: {},
  methods: {
    setCopupon2Cookie() {
      // 將coupone 資訊丟入cookie
      // order 前先設定
      if (this.coupon_instance && this.coupon_instance.status && this.coupon_instance.role <= this.cartVm.product_total) {
        this.$cookies.set('coupon', this.coupon_instance.discount_code)
      } else {
        this.$cookies.set('coupon', null)
      }
    },
    changeCoupon() {
      /**
       * status code:
       * 1: 正常
       * 2: 過期
       * 3: 超過個人使用限制
       * 4: 超過全體使用限制
       *
       * 過期：此張優惠券已過期
       * 找不到：查無此張優惠券
       * 超過全體使用次數限制：此張優惠券名額已滿
       * 超過個人使用次數限制：此張優惠券使用次數已達上限
       * 不符合優惠：您尚未達到此張優惠券門檻
       * */
      this.coupon_instance = null
      this.$api.coupon.getRead(this.coupon).then(res => {
        if (!res.data) {
          this.coupon_message = this.$t('no_coupon')
          return
        }
        if (res.data.status === 1) {
          if (res.data.role > this.cartVm.product_total) {
            return this.coupon_message = this.$t('cant_use_coupon')
          }
          this.coupon_instance = res.data
          this.coupon_message = ''
        }
        if (res.data.status === 2) {
          this.coupon_message = this.$t('coupon_over_date')
        }
        if (res.data.status === 3) {
          this.coupon_message = this.$t('coupon_member_over')
        }
        if (res.data.status === 4) {
          this.coupon_message = this.$t('coupon_allr_over')
        }
      }).catch(() => {
        this.coupon_message = this.$t('no_coupon')
      })
    },
  }
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
    setReward2Cookie() {
      this.$cookies.set('reward_discount', this.reward_discount)
    },
    checkRewarddiscount() {
      let sum = this.cartVm.product_total - this.coupon_discount
      if (sum < this.reward_discount) {
        this.reward_discount = sum
      }
    },
    useReward() {
      // 確保優惠不會超過商品以及優惠券點數
      let min_data = Math.min(this.cartVm.product_total, this.info_reward_total)
      if (this.reward_discount_temp > min_data) {
        this.reward_discount_temp = min_data
      }
      this.reward_discount = this.reward_discount_temp
    },
    init_reward_discount() {
      this.reward_discount_temp = this.info_reward_total > this.cartVm.product_total ? this.cartVm.product_total : this.info_reward_total
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
