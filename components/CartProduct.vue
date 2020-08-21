<template>
  <no-ssr>
    <tr>
      <td colspan="7" style="padding:0;">
        <div style="position: relative;">
          <div class="cart-product-tr-fill d-flex justify-content-center align-items-center"
               v-if="!item.product.status">
            <h2 class="fill-width text-align-center white-color">{{$t('aaaaa')}}</h2>
          </div>
          <div class="cart-product-tr-fill d-flex justify-content-center align-items-center"
               v-else-if="item.product.status && sold_out_status">
            <h2 class="fill-width text-align-center white-color">{{$t('SOLD_OUT')}}</h2>
          </div>
    <tr>
      <td class="product-iamge min-w180">
        <div class="img-wrapper">
          <nuxt-link to="" class="img-wrapper" :to="`/products/${item.product.id}`">
            <img
              :src="imageLink(image(item.product.productimages))"
              alt="product image"
            />
          </nuxt-link>
        </div>
      </td>
      <td class="product-name min-w210">
        <div class="to-flex-col align-items-center">
          <nuxt-link :to="`/products/${item.product.id}`" class="normal-a">{{getText(item.product, 'name', 'en_name')}}</nuxt-link>
        </div>
      </td>
      <td class="product-name min-w210">
        <div class="align-items-center justify-content-center d-flex pointer" @click="goCartModal">
          <span>{{spec_level1_and_level2}}</span>
          <svg class="bi bi-pencil ml-10px" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg"
               style="color: #B1B1B1"
          >
            <path fill-rule="evenodd"
                  d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
            <path fill-rule="evenodd"
                  d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
          </svg>
          <!--現在說公版不要有weight 怕之後又要有先註解就好-->
          <!--        <span class="pl-5px"-->
          <!--              v-if="configsetting.weight"-->
          <!--        >{{item.specification_detail.weight}} {{$t('kg')}}</span>-->
        </div>
      </td>
      <td class="product-price min-w150"
          v-if="$store.state.currency==='tw'"
      >
        <span class="price">${{item.specification_detail.price|commaFormat}}</span>
        <div class="sale-msg red-color" v-if="cart_status===2">{{$t('unDiscounted')}}</div>
        <div class="sale-msg gray-text" v-if="cart_status===3">{{$t('Discounted')}}</div>
        <div class="activity" v-if="item.product &&item.product.activity">
          <div class="activity-box">{{getText(item.product.activity_detail, 'ch_name', 'en_name')}}
          </div>
        </div>
      </td>
      <td class="product-price min-w150"
          v-else
      >${{currencyChange(item.specification_detail.price)|commaFormat}}
        (NT${{item.specification_detail.price|commaFormat}})
      </td>
      <td class="product-quantity min-w150">
        <div class="row align-items-center">
          <div class="col-12 mb-10px">
            <counter v-model="quantity"
                     :class="[stock_display_text==='缺貨'?'red-color':'']"
                     :max="max_quantity"
            ></counter>
          </div>
          <div class="col-12 d-flex justify-content-start" style="margin-left: 12px; font-size:14px;"
               :class="[stock_display_text==='缺貨'?'red-color':'gray-text2']"
          >
            {{getText(stock_display_text, 'name', 'en_name')}}
<!--            {{stock_display_text}}-->
          </div>
        </div>
      </td>
      <td class="product-total min-w150"
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
    </div>
    </td>
    </tr>
  </no-ssr>
</template>

<script>
  import Counter from '@/components/Counter'
  import mixinCategory from "@/mixins/mixinCategory"
  import {mapState, mapMutations} from 'vuex'
  import {cartRemove, cartUpdate, cartProcessInfo, storeProcess} from "@/assets/js/localCart"
  import configsettingMixin from "@/mixins/configsettingMixin"
  import langMixin from "@/mixins/langMixin"

  export default {
    name: "CartProduct",
    components: {
      Counter
    },
    mixins: [configsettingMixin, mixinCategory, langMixin],
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
        // counter 的數量 判斷是否顯示max count
        if (!this.item.specification_detail) {
          // 無限多個數量
          return Infinity
        }
        // 根據config 判斷 是不是有庫存判斷
        let config = this.configsetting
        return config.product_stock_setting === 3 ? Math.max(this.item.specification_detail.quantity, this.quantity) : Infinity
      },
      sold_out_status() {
        // 判斷是不是賣完了
        let product_stock_setting = this.configsetting.product_stock_setting
        let ret = false
        let detail = this.item.specification_detail
        if (!detail) {
          return ret
        }
        // 下面這個是判斷機制
        if (product_stock_setting === 2 && detail.inventory_status === 2) {
          ret = true
        }
        if (product_stock_setting === 3 && this.quantity > detail.quantity) {
          ret = true
        }
        return ret
      },
      stock_display_text() {
        // 根據庫存狀態顯示相對應的文字
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
          let ret = {}
          if (this.quantity > quantity) {
            ret.name = '缺貨'
            ret.en_name = 'out of stock'
            return ret
          }
          if (quantity === 0) {
            ret.name = '無庫存'
            ret.en_name = 'Sold Out'
            return ret
          } else if (1 <= quantity && quantity <= 10) {
            ret.name = '庫存緊張'
            ret.en_name = 'Short in Supply'
            return ret
          } else {
            ret.name = '庫存充足'
            ret.en_name = 'Adequate Stock'
            return ret
          }
        }
        return ''
      },
      // 這寫法是取得store 的資料用的
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
        // level + level2 組成的name
        if (!this.specification_detail) {
          return ''
        }
        let sp1 = this.specification_detail.spec1_name
        let sp2 = this.specification_detail.spec2_name
        if (sp2) {
          return `${sp1} - ${sp2}`
        }
        return sp1
      },
    },
    watch: {
      quantity(newval, oldval) {
        // 更新數量 就要trigger
        if (oldval) {
          this.updateCart()
        }
      },
      specification(newval, oldval) {
        // 更新規格 就要trigger
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
        // 給父組件去做使用 他會在判斷所有的參數
        this.cartVm.trigger(this.specification_detail.id, {
          quantity: this.quantity,
          specification_detail: this.specification_detail,
          activity_detail: this.item.product.activity_detail,
          status: this.item.product.status,
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
        // 更新cart 資料
        this.$api.cart.putData(id, values).then(() => {
          // process.client 是只有在client 端才有 用nuxt 需要增加這個if 判斷
          if (reload && process.client) {
            window.location.reload()
          }
        })
      },
      cartRemove(id) {
        // 判斷有沒有登入
        if (!this.has_token) {
          // 如果單除要移除 cookie 裡面的要做許多事情
          let cart = cartRemove(this.item.product.id, this.specification_detail.id)
          let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
          // 更新新的cart 資訊在cookie
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
        // 幣值計算問題
        let ret = val * this.$store.state.price.item[this.$store.state.currency]
        return parseFloat(ret.toFixed(2))
      },
      image(productimages) {
        // 只顯示主要的image
        for (let img of productimages) {
          if (img.main_image) {
            return img.image_url
          }
        }
      },
      cartModalMethod(specification_detail) {
        // 更新規格 並且update cart
        this.old_specification_detail = {...this.specification_detail}
        this.specification_detail = specification_detail
        this.updateCart(true)
      },
      updateCart(reload = false) {
        // 要更新 購物車裡面的資訊
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
          // 沒有登入的話 還要更新cookie 資料
          let cart = cartUpdate(this.item.product.id, this.old_specification_detail.id, values)
          let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
          this.$cookies.set('cart', new_cart)
          storeProcess(this.$store, new_cart, product_ids, total_count)
          // process.client 是只有在client 端才有 用nuxt 需要增加這個if 判斷
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
