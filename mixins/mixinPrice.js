export default {
  methods: {
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
    get_price_range(array) {
      let min_price = null
      let max_price = null
      for (let el of array) {
        if (!min_price) {
          min_price = el.price
        }
        if (!max_price) {
          max_price = el.price
        }
        if (el.price > max_price) {
          max_price = el.price
        }
        if (el.price < min_price) {
          min_price = el.price
        }
      }
      if (min_price === max_price) {
        return this.commaFormat(this.currencyChange(min_price))
      } else {
        let min_str = this.commaFormat(this.currencyChange(min_price))
        let max_str = this.commaFormat(this.currencyChange(max_price))
        return `$${min_str}-$${max_str}`
      }
    },
  }
}