import Vue from 'vue'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const options = {
  position: 'bottom-center'
}

Vue.use(Toast, options)


export default (context, inject) => {
}