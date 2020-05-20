<template>
  <tr style="transform: scale(1)">
    <td class="cart-product-tr-fill d-flex justify-content-center align-items-center"
        v-if="!item.specification_detail.quantity">
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
    >${{item.specification_detail.price|commaFormat}}
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
      }
    },
    data() {
      return {
        quantity: null,
        specification_detail: null,
      }
    },
    computed: {
      max_quantity() {
        // counter 的數量
        if (!this.item.specification_detail) {
          return Infinity
        }
        let config = this.configsetting
        return config.product_stock_setting === 3 ? Math.max(this.item.specification_detail.quantity,this.quantity) : Infinity
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
            1: '缺貨',// 無庫存 但是這邊要顯示缺貨
            2: '無庫存',
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
        let sp1 = this.item.spec1_name
        let sp2 = this.item.spec2_name
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
    },
    methods: {
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
          let cart = cartRemove(this.item.product.id)
          let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
          this.$cookies.set('cart', new_cart)
          storeProcess(this.$store, new_cart, product_ids, total_count)
          let removed_items = this.items.filter(x => x.product.id !== this.item.product.id && x.specification_detail.id !== this.item.specification_detail)
          this.$store.commit('cart/changeValue', {
            key: 'items',
            value: removed_items
          })
        }
        this.$emit('remove', id)

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
        this.specification_detail = specification_detail
        this.updateCart(true)
      },
      updateCart(reload = false) {
        let values = {
          quantity: this.quantity,
          specification_detail: this.specification_detail.id,
        }
        this.$emit('update', this.item.id, values)
        // 有登入
        if (this.has_token) {
          this.apiCartUpdate(this.item.id, values, reload)
        } else {
          let cart = cartUpdate(this.item.product.id, values)
          let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
          this.$cookies.set('cart', new_cart)
          storeProcess(this.$store, new_cart, product_ids, total_count)
        }
      }
    }
  }
</script>

<style scoped>

</style>
