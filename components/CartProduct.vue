<template>
  <tr style="transform: scale(1)">
    <td class="cart-product-tr-fill d-flex justify-content-center align-items-center"
        v-if="!item.product.status">
      <h2 class="fill-width text-align-center primary-color">下架</h2>
    </td>
    <td class="cart-product-tr-fill d-flex justify-content-center align-items-center"
        v-else-if="item.product.status && sold_out_status">
      <h2 class="fill-width text-align-center primary-color">SOLD OUT</h2>
    </td>
    <td v-else></td>
    <td class="product-iamge">
      <div class="img-wrapper">
        <nuxt-link to="" class="img-wrapper" :to="`/products/${item.product.id}`">
          <img
            :src="imageLink(image(item.product.productimages))"
            alt="product image"
          />
        </nuxt-link>
      </div>
    </td>
    <td class="product-name">
      <div class="to-flex-col align-items-center">
        <nuxt-link :to="`/products/${item.product.id}`" class="normal-a">{{item.product.name}}</nuxt-link>
      </div>
    </td>
    <td class="product-name">
      <div class="to-flex-col align-items-center">
        <span class="pointer" @click="goCartModal">{{spec_level1_and_level2}}</span>
        <span class="pl-5px"
              v-if="configsetting.weight"
        >{{item.specification_detail.weight}} {{$t('kg')}}</span>
      </div>
    </td>
    <td class="product-price"
        v-if="$store.state.currency==='tw'"
    >
      <div>
        ${{item.specification_detail.price|commaFormat}}
      </div>
      <div class="red-color" v-if="cart_status===2">未符合折扣</div>
      <div class="gray-text" v-if="cart_status===3">已享受折扣</div>
      <div class="activity">
        <div class="activity-box" v-if="item.product &&item.product.activity">{{item.product.activity_detail.ch_name}}
        </div>
      </div>
    </td>
    <td class="product-price"
        v-else
    >${{currencyChange(item.specification_detail.price)|commaFormat}}
      (NT${{item.specification_detail.price|commaFormat}})
    </td>
    <td class="product-quantity">
      <div class="row align-items-center">
        <div class="col-12">
          <counter v-model="quantity"
                   :class="[stock_display_text==='缺貨'?'red-color':'']"
                   :max="max_quantity"
          ></counter>
        </div>
        <div class="col-12 d-flex justify-content-start" style="margin-left: 12px"
             :class="[stock_display_text==='缺貨'?'red-color':'primary-color']"
        >
          {{stock_display_text}}
        </div>
      </div>
    </td>
    <td class="product-total"
        v-if="$store.state.currency==='tw'"
    >${{currencyChange(item.specification_detail.price*quantity)|commaFormat}}
    </td>
    <td class="product-total"
        v-else
    >${{currencyChange(item.specification_detail.price*quantity)|commaFormat}}
      (NT${{item.specification_detail.price*quantity|commaFormat}})
    </td>
    <td class="product-clear">
      <button class="no-round-btn" @click="cartRemove(item.id)"
              style="z-index: 20;position: relative"
      >
        <i class="icon_close"></i>
      </button>
    </td>
  </tr>
</template>

<script>
  import Counter from '@/components/Counter'
  import mixinCategory from "@/mixins/mixinCategory"
  import {mapState, mapMutations} from 'vuex'
  import {cartRemove, cartUpdate, cartProcessInfo, storeProcess} from "@/assets/js/localCart"
  import configsettingMixin from "@/mixins/configsettingMixin"

  export default {
    name: "CartProduct",
    components: {
      Counter
    },
    mixins: [configsettingMixin, mixinCategory],
    props: {
      item: {
        type: Object,
        default: {}
      },
      cartVm: {
        type: Object,
      }
    },
    data() {
      return {
        // 1: 尚未有資料 2: 未符合折扣 3: 已享受折扣
        cart_status: 1,
        quantity: null,
        specification_detail: null,
        old_specification_detail: null, // 被換掉前 要先取得舊有的資料 給local cart 用
      }
    },
    computed: {
      max_quantity() {
        // counter 的數量
        if (!this.item.specification_detail) {
          return Infinity
        }
        let config = this.configsetting
        return config.product_stock_setting === 3 ? Math.max(this.item.specification_detail.quantity, this.quantity) : Infinity
      },
      sold_out_status() {
        let product_stock_setting = this.configsetting.product_stock_setting
        let ret = false
        let detail = this.item.specification_detail
        if (!detail) {
          return ret
        }
        if (product_stock_setting === 2 && detail.inventory_status === 2) {
          ret = true
        }
        if (product_stock_setting === 3 && this.quantity > detail.quantity) {
          ret = true
        }
        return ret
      },
      stock_display_text() {
        let detail = this.item.specification_detail
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
            2: '缺貨',// 無庫存 但是這邊要顯示缺貨
            3: '預購品',
          }
          return mapping[detail.inventory_status]
        } else if (product_stock_setting === 3) {
          let quantity = detail.quantity
          if (this.quantity > quantity) {
            return '缺貨'
          }
          if (quantity === 0) {
            return '無庫存'
          } else if (1 <= quantity && quantity <= 10) {
            return '庫存緊張'
          } else {
            return '有庫存'
          }
        }
        return ''
      },
      ...mapState('membertoken', {
        has_token: state => state.has_token
      }),
      ...mapState('configsetting', {
        configsetting: state => state.item
      }),
      ...mapState('cart', {
        items: state => state.items
      }),
      spec_level1_and_level2() {
        if (!this.specification_detail) {
          return ''
        }
        let sp1 = this.specification_detail.spec1_name
        let sp2 = this.specification_detail.spec2_name
        if (sp2) {
          return `${sp1}/${sp2}`
        }
        return sp1
      },
    },
    watch: {
      quantity(newval, oldval) {
        if (oldval) {
          this.updateCart()
        }
      },
      specification(newval, oldval) {
        if (oldval) {
          this.updateCart(true)
        }
      }
    },
    mounted() {
      this.quantity = this.item.quantity
      this.specification_detail = this.item.specification_detail
      this.trigger()
    },
    methods: {
      trigger() {
        this.cartVm.trigger(this.specification_detail.id, {
          quantity: this.quantity,
          specification_detail: this.specification_detail,
          activity_detail: this.item.product.activity_detail,
          vm: this,
        })
      },
      ...mapMutations('cart_specification_modal', ['initCart', 'method']),
      goCartModal() {
        this.initCart({
          cart: this.item,
          method: this.cartModalMethod
        })
      },
      apiCartUpdate(id, values, reload) {
        this.$api.cart.putData(id, values).then(() => {
          if (reload && process.client) {
            window.location.reload()
          }
        })
      },
      cartRemove(id) {
        if (!this.has_token) {
          let cart = cartRemove(this.item.product.id, this.specification_detail.id)
          let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
          this.$cookies.set('cart', new_cart)
          storeProcess(this.$store, new_cart, product_ids, total_count)
          let removed_items = this.items.filter(x => !(x.product.id === this.item.product.id && x.specification_detail.id === this.item.specification_detail.id))
          this.$store.commit('cart/changeValue', {
            key: 'items',
            value: removed_items
          })
        }
        this.cartVm.remove(this.specification_detail.id, id)

      },
      currencyChange(val) {
        let ret = val * this.$store.state.price.item[this.$store.state.currency]
        return parseFloat(ret.toFixed(2))
      },
      image(productimages) {
        for (let img of productimages) {
          if (img.main_image) {
            return img.image_url
          }
        }
      },
      cartModalMethod(specification_detail) {
        this.old_specification_detail = {...this.specification_detail}
        this.specification_detail = specification_detail
        this.updateCart(true)
      },
      updateCart(reload = false) {
        let values = {
          quantity: this.quantity,
          specification_detail: this.specification_detail.id,
          product: this.item.product.id
        }
        this.trigger()
        // 有登入
        if (this.has_token) {
          this.apiCartUpdate(this.item.id, values, reload)
        } else {
          let cart = cartUpdate(this.item.product.id, this.old_specification_detail.id, values)
          let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
          this.$cookies.set('cart', new_cart)
          storeProcess(this.$store, new_cart, product_ids, total_count)
          if (reload && process.client) {
            window.location.reload()
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
