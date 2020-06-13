<template>
  <div class="product animated grid-view zoomIn product-label" ref="product">
    <i v-if="product.tag_detail.length" :class="product.tag_detail[0].tag_image_image_url">
      <i
        :class="product.tag_detail[0].tag_image_image_url.split('-')[0]+'-name'"
      >{{product.tag_detail[0].name}}</i>
    </i>
    <input ref="copy_data" type="hidden" :value="message" />
    <div class="product-img_block">
      <nuxt-link class="product-img" :to="product_link">
        <img :src="imageLink(image)" alt style="height: 180px; max-height: 100%" />
      </nuxt-link>
    </div>
    <div class="product-info_block">
      <h5 class="product-type" style="text-align: -webkit-center;">{{product.brand_en_name}}</h5>
      <nuxt-link :to="product_link" class="product-name">{{product.name}}</nuxt-link>
      <h3 class="product-price" style="text-align: -webkit-center;">
        ${{currencyChange(product.price)|commaFormat}}
        <del
          v-if="product.fake_price"
        >${{currencyChange(product.fake_price)|commaFormat}}</del>
      </h3>
      <p class="product-describe">{{product.sub_title}}</p>
      <h5 class="product-avaiable">
        {{$t('weight')}}:
        <span>{{product.weight}} {{$t('kg')}}</span>
      </h5>
    </div>
    <div class="product-select">
      <button
        class="add-to-wishlist round-icon-btn"
        @click="toWish"
        :class="[wish_active?'love-active':'']"
      >
        <i class="icon_heart_alt"></i>
      </button>
      <button class="add-to-cart round-icon-btn shopping-cart-circle-icon" @click="toCartModal"></button>
      <button class="add-to-compare round-icon-btn share-btn-icon" @click="copy">
        <img src alt />
      </button>
    </div>
    <div class="product-select_list">
      <h3 class="product-price" style="text-align: -webkit-center;" v-if="product.fake_price">
        <del>${{product.fake_price|commaFormat}}</del>
        ${{product.price|commaFormat}}
      </h3>
      <button class="add-to-cart normal-btn col-12" @click="toCartModal">
        <i class="fab shop-cart-icon"></i>
        {{$t('add_cart')}}
      </button>
      <button
        class="add-to-compare normal-btn outline mb-10px col-12"
        :class="[wish_active?'love-active':'']"
        @click="toWish"
      >
        <i class="function-icon icon_heart_alt"></i>
        {{$t('add_favourite')}}
      </button>
    </div>
    <WishlistModal
      v-model="wishmodal"
      :specifications="specifications_modal"
      :product_id="product_id"
      @ok="toCart"
    ></WishlistModal>
  </div>
</template>

<script>
import mixinCategory from '@/mixins/mixinCategory'
import { api } from '@/api'
import WishlistModal from '@/components/WishlistModal'
import { mapState } from 'vuex'
import mixinToWish from '@/mixins/mixinToWish'

export default {
  mixins: [mixinCategory, mixinToWish],
  name: 'product',
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  components: {
    WishlistModal
  },
  data() {
    return {
      message: '',
      wishmodal: false,
      specifications_modal: [],
      product_id: null
    }
  },
  computed: {
    image() {
      for (let img of this.product.productimages) {
        if (img.main_image) {
          return img.image_url
        }
      }
    },
    product_link() {
      let ext = ''
      if (this.$route.query.c) {
        ext = `?c=${this.$route.query.c}`
      }
      return `/products/${this.product.id}${ext}`
    }
  },
  methods: {
    currencyChange(val) {
      let ret = val * this.$store.state.price.item[this.$store.state.currency]
      return parseFloat(ret.toFixed(2))
    },
    copy() {
      this.$refs.copy_data.setAttribute('type', 'text') // 不是 hidden 才能複製
      this.$refs.copy_data.select()

      try {
        let successful = document.execCommand('copy')
        let msg = successful ? 'successful' : 'unsuccessful'
        this.$toast.success(this.$t('copy_product'))
      } catch (err) {}

      /* unselect the range */
      this.$refs.copy_data.setAttribute('type', 'hidden')
      if (process.client) {
        window.getSelection().removeAllRanges()
      }
    },
    toCartModal() {
      this.product_id = this.product.id
      this.specifications_modal = this.product.specifications
      this.wishmodal = true
    },
    toCart(values) {
      if (!this.$store.state.membertoken.has_token) {
        this.$router.push('/login')
      }
      api.cart.postData(values).then(() => {
        this.$toast.success(this.$t('to_cart'))
        this.$store.dispatch('cart/getCount')
        this.$store.dispatch('cart/getTotal')
      })
    }
  },
  mounted() {
    let url = `${location.origin}/products/${this.product.id}`
    this.message = `快來看看『${this.product.name}』，價格超實惠！快來汴利購搶購吧！${url}`
    this.$refs.product.addEventListener('animationend', function() {
      if (process.client) {
        $('div.product.fadeInUp').removeClass('fadeInUp')
      }
    })
  }
}
</script>

<style scoped>
</style>
