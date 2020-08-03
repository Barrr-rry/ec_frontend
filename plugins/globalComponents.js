import Vue from 'vue'
import Breadcrumb from '@/components/Breadcrumb'
import CouponCard from '@/components/CouponCard'
import Modal from '@/components/Modal'

const components = { Breadcrumb, CouponCard, Modal }
// 自己寫的components 全部都在這邊註冊 變成全局的
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
