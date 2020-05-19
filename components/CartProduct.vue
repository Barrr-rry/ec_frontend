<template>
  <tr>
    <td class="coupon-finish" colspan="7">
      <div>
        <h2 class="fill-width text-align-center">{{$t('coupon_over')}}</h2>
      </div>
    </td>
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
      <div class="d-flex align-items-center">
        <label class="fz16px ma-0px w-100px">{{$t('count')}} :</label>
        <counter class="ml-5px" v-model="quantity"></counter>
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
      <button class="no-round-btn" @click="cartRemove(item.id)">
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

  export default {
    name: "CartProduct",
    components: {
      Counter
    },
    mixins: [mixinCategory],
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
          specification_detail: this.specification_detail,
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
