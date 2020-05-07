import Vue from 'vue'
import Breadcrumb from '@/components/Breadcrumb'
import CouponCard from '@/components/CouponCard'
import Modal from '@/components/Modal'

const components = { Breadcrumb, CouponCard, Modal }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
