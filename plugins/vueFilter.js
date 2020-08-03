import Vue from 'vue'
// 將價錢做一個filter 加上逗號
Vue.filter('commaFormat', function (value) {
  if (!value && value !== 0) {
    return ''
  }
  // 加上千分位符號
  return value
    .toString()
    .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, groupOf3Digital) {
      return pre + groupOf3Digital.replace(/\d{3}/g, ',$&')
    })
})
