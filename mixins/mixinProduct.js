import configsettingMixin from "@/mixins/configsettingMixin"

export default {
  mixins: [configsettingMixin],
  data() {
    return {
      choose_level1: null,
      choose_level2: null,
      quantity: 1,
    }
  },
  computed: {
    price() {
      let key = 'price'
      if (this.choose_done) {
        return this.getSpecificationsDetailPrice(key)
      }
      return this.getPrice(key)
    },
    fake_price() {
      let key = 'fake_price'
      if (this.choose_done) {
        return this.getSpecificationsDetailPrice(key)
      }
      return this.getPrice(key)
    },
    spec_level1_list() {
      // get level1
      return this.product.specifications.filter(x => x.level === 1)
    },
    spec_level2_list() {
      // get level 2
      return this.product.specifications.filter(x => x.level === 2)
    },
    has_spec_level2() {
      let configsetting_has_level2 = this.configsetting.product_specifications_setting === 2
      let has_level_title = this.product.level2_title
      let has_spec_level2 = this.spec_level2_list.length
      return configsetting_has_level2 && has_level_title && has_spec_level2
    },
    choose_done() {
      if (this.has_spec_level2) {
        return this.choose_level1 !== null && this.choose_level2 !== null
      } else {
        return this.choose_level1 !== null
      }
    },
    max_quantity() {
      // counter 的數量
      if (!this.choose_specification_detail) {
        return Infinity
      }
      let config = this.configsetting
      return config.product_stock_setting === 3 ? this.choose_specification_detail.quantity : Infinity
    },
    choose_specification_detail() {
      if (Array.isArray(this.product.specifications_detail)) {
        for (let el of this.product.specifications_detail) {
          let level1_check = el.level1_spec === this.choose_level1
          let level2_check = el.level2_spec === this.choose_level2
          if (level1_check && level2_check) {
            return el
          }
        }
      }
      return null
    },
    stock_display_text() {
      let detail = this.choose_specification_detail
      if (!detail) {
        return ''
      }
      // product_stock_setting = models.SmallIntegerField(help_text="商品庫存 1: 沒有庫存功能 2: 只有庫存文案顯示 3: 完整庫存功能")
      let product_stock_setting = this.configsetting.product_stock_setting
      if (product_stock_setting === 1) {
        return ''
      } else if (product_stock_setting === 2) {
        // inventory_status = models.SmallIntegerField(help_text='庫存狀況 0: 無庫存功能，或者是庫存使用數量表示 1：有庫存；2：無庫存；3：預購品', default=0,
        //                                         null=True)
        let mapping = {
          1: '有庫存',
          2: '無庫存',
          3: '預購品',
        }
        return mapping[detail.inventory_status]
      } else if (product_stock_setting === 3) {
        let quantity = detail.quantity
        if (quantity === 0) {
          return '無庫存'
        } else if (1 <= quantity && quantity <= 10) {
          return '庫存緊張'
        } else {
          return '有庫存'
        }
      }
      return ''
    }
  },
  watch: {
    choose_level1() {
      this.quantity = 1
    },
    choose_level2() {
      this.quantity = 1
    },
  },
  methods: {
    isSelectDisabled(el) {
      // product_stock_setting = models.SmallIntegerField(help_text="商品庫存 1: 沒有庫存功能 2: 只有庫存文案顯示 3: 完整庫存功能")
      let product_stock_setting = this.configsetting.product_stock_setting
      let ret = false
      let details = []
      // level1
      if (el.level === 1) {
        if (product_stock_setting === 2) {
          // inventory_status:2 無庫存
          details = this.product.specifications_detail.filter(x => x.level1_spec === el.id && x.inventory_status !== 2)
          ret = !details.length
        }
        if (product_stock_setting === 3) {
          // inventory_status:2 無庫存
          details = this.product.specifications_detail.filter(x => x.level1_spec === el.id && x.quantity !== 0)
          ret = !details.length
        }
        // level2
      } else {
        if (product_stock_setting === 2) {
          // inventory_status:2 無庫存
          details = this.product.specifications_detail.filter(x => x.level2_spec === el.id && x.level1_spec === this.choose_level1 && x.inventory_status !== 2)
          ret = !details.length
        }
        if (product_stock_setting === 3) {
          // inventory_status:2 無庫存
          details = this.product.specifications_detail.filter(x => x.level2_spec === el.id && x.level1_spec === this.choose_level1 && x.quantity !== 0)
          ret = !details.length
        }
      }

      return ret
    },
    getSpecificationsDetailPrice(key) {
      if (this.choose_specification_detail) {
        return this.choose_specification_detail[key]
      }
    },
    getPrice(key) {
      let data = this.getMinMaxData(this.product.specifications_detail, key)
      if (!data[0] || !data[1]) {
        return null
      }
      if (data[0] === data[1]) {
        return data[0]
      }
      return data
    },
    getProcessPrice(price) {
      if (!price) {
        return null
      }
      if (Array.isArray(price)) {
        return `NT$${this.priceToString(price[0])}`
      }
      return `NT$${this.priceToString(price)}`
    },
    priceToString(price) {
      return this.commaFormat(this.currencyChange(price))
    },
    commaFormat(value) {
      if (!value && value !== 0) {
        return ''
      }
      // 加上千分位符號
      return value
        .toString()
        .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, groupOf3Digital) {
          return pre + groupOf3Digital.replace(/\d{3}/g, ',$&')
        })
    },
    getMinMaxData(items, key) {
      let max_data = null
      let min_data = null
      for (let el of items) {
        let compare_data = el[key]
        if (max_data === null && min_data === null) {
          max_data = compare_data
          min_data = compare_data
          continue
        }
        if (max_data < compare_data) {
          max_data = compare_data
        }
        if (min_data > compare_data) {
          min_data = compare_data
        }
      }
      return [min_data, max_data]

    },
    currencyChange(val) {
      let ret = val * this.$store.state.price.item[this.$store.state.currency]
      return parseFloat(ret.toFixed(2))
    },
  },
  mounted() {
  }
}
