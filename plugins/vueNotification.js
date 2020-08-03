import Vue from 'vue'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const options = {
  position: 'bottom-center'
}

// 註冊vue notify
Vue.use(Toast, options)


export default (context, inject) => {
}