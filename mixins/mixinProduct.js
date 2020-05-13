import {mapState} from 'vuex'

export default {
  data() {
    return {
      choose_level1: null,
      choose_level2: null,
    }
  },
  computed: {
    ...mapState('configsetting', {
      configsetting: state => state.item
    }),
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
      return this.product.specifications.filter(x => x.level === 1)
    },
    spec_level2_list() {
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
    choose_specification_detail() {
      for (let el of this.product.specifications_detail) {
        let level1_check = el.level1_spec === this.choose_level1
        let level2_check = el.level2_spec === this.choose_level2
        if (level1_check && level2_check) {
          return el
        }
      }
      return null
    }
  },
  methods: {
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
        return `$${thsi.priceToString(price[0])}~$${this.priceToString(price[1])}`
      }
      return `$${this.priceToString(price)}`
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
