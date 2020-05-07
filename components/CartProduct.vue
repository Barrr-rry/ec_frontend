<template>
  <tr>
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
        <select
          class="select-form small-h mt-10px mb-10px"
          name=""
          style="width: 120px"
          v-model="specification"
        >
          <option :value="el.id"
                  v-for="el of item.product.specifications"
                  :key="el.id"
          >{{el.name}}
          </option>
        </select>
        <span class="pl-5px">{{item.product.weight}} {{$t('kg')}}</span>
      </div>
    </td>
    <td class="product-price"
        v-if="$store.state.currency==='tw'"
    >${{item.product.price|commaFormat}}
    </td>
    <td class="product-price"
        v-else
    >${{currencyChange(item.product.price)|commaFormat}} (NT${{item.product.price|commaFormat}})
    </td>
    <td class="product-quantity">
      <div class="d-flex align-items-center">
        <label class="fz16px ma-0px w-100px">{{$t('count')}} :</label>
        <counter class="ml-5px" v-model="quantity"></counter>
      </div>
    </td>
    <td class="product-total"
        v-if="$store.state.currency==='tw'"
    >${{currencyChange(item.product.price*quantity)|commaFormat}}
    </td>
    <td class="product-total"
        v-else
    >${{currencyChange(item.product.price*quantity)|commaFormat}} (NT${{item.product.price*quantity|commaFormat}})
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
  import {mapState} from 'vuex'
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
        specification: null,
        quantity: null,
      }
    },
    computed: {
      ...mapState('membertoken', {
        has_token: state => state.has_token
      }),
      ...mapState('cart', {
        items: state => state.items
      }),
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
      this.specification = this.item.specification
    },
    methods: {
      cartRemove(id) {
        if (!this.has_token) {
          let cart = cartRemove(this.item.product.id)
          let {new_cart, product_ids, total_count} = cartProcessInfo(cart)
          this.$cookies.set('cart', new_cart)
          storeProcess(this.$store, new_cart, product_ids, total_count)
          let removed_items = this.items.filter(x => x.product.id !== this.item.product.id && x.specification.id !== this.item.specification)
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
      apiCartUpdate(id, values) {
        this.$api.cart.putData(id, values).then(() => {
          if (reload && process.client) {
            window.location.reload()
          }
        })
      },
      updateCart(reload = false) {
        let values = {
          quantity: this.quantity,
          specification: this.specification,
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
