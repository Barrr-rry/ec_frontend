<template>
  <nuxt-link :to="product_link">
    <div class="product animated grid-view zoomIn product-label" ref="product">
      <i
        v-if="tag_detail"
        :class="tag_detail.tag_image_image_url"><i
        :class="tag_detail.tag_image_image_url.split('-')[0]+'-name'">{{tag_detail.name}}</i></i>
      <input ref="copy_data" type="hidden" :value="message">
      <div class="product-img_block">
        <span class="product-img"
        ><img :src="imageLink(image)" alt=""
        /></span>
      </div>
      <div class="product-info_block" style="border:none; padding-right:0; text-align: center;">
        <div class="activity mb-10px mt-10px">
          <div class="activity-box" v-if="product && product.activity">{{getText(product.activity_detail,'ch_name','en_name')}}</div>
        </div>
<!--        <h5 class="product-type" style="text-align: -webkit-center;">-->
<!--          <span v-if="product.brand_en_name">{{product.brand_en_name}}</span>-->
<!--          <span v-else><br></span>-->
<!--        </h5>-->
        <span class="product-name ellipsis"
              style="-webkit-line-clamp:2;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;height: 48px; font-weight:bold;">{{getText(product, 'name', 'en_name')}}
                </span>
        <del v-if="fake_price">{{getProcessPrice(fake_price)}}</del>
        <b class="product-price red-color" style="text-align: -webkit-center;">{{getProcessPrice(price)}}
        </b>
        <!--
          <p class="product-describe">{{product.sub_title}}</p>
          <h5 class="product-avaiable">{{$t('weight')}}: <span>{{product.weight}} {{$t('kg')}}</span></h5>
        -->
      </div>
      <div class="product-select">
        <button class="add-to-wishlist round-icon-btn" @click.prevent="toWish" :class="[wish_active?'love-active':'']">
          <i class="icon_heart_alt"></i>
        </button>
        <button
          class="add-to-cart round-icon-btn shopping-cart-circle-icon"
          @click.prevent="toCartModal"
        ></button>
        <button
          class="add-to-compare  round-icon-btn share-btn-icon"
          @click.prevent="copy"
        >
          <img src="" alt=""/>
        </button>
      </div>
      <!--
        <div class="product-select_list">
        <h3 class="product-price" style="text-align: -webkit-center;" v-if="fake_price">
          <del>{{getProcessPrice(price)}}</del>
          {{getProcessPrice(price)}}
        </h3>
        <button class="add-to-cart normal-btn outline col-12" @click.prevent="toCartModal">
          <i class="fab shop-cart-icon"></i>
          {{$t('add_cart')}}
        </button>
        <button
          class="add-to-compare normal-btn outline mb-10px col-12"
          :class="[wish_active?'love-active':'']"
          @click.prevent="toWish"
        >
          <i class="function-icon icon_heart_alt"></i>
          {{$t('add_favourite')}}
        </button>

      </div>
      -->
    </div>
  </nuxt-link>
</template>

<script>
  import mixinCategory from "@/mixins/mixinCategory"
  import mixinToWish from "@/mixins/mixinToWish"
  import {mapMutations} from 'vuex'
  import mixinProduct from "@/mixins/mixinProduct"
  import langMixin from "@/mixins/langMixin"


  export default {
    mixins: [mixinCategory, mixinToWish, mixinProduct, langMixin],
    name: "product",
    props: {
      product: {
        type: Object,
        default: null
      },
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
      tag_detail() {
        if (!this.product.tag_detail.length) {
          return null
        }
        let t = this.$route.query.t
        if (t !== undefined) {
          t = parseInt(t)
        } else {
          return this.product.tag_detail[0]
        }
        for (let el of this.product.tag_detail) {
          if (t === el.id) {
            return el
          }
        }
        return null
      },
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
      },

    },
    methods: {
      copy() {
        // 本來是copy 文字現在改成 share modal
        this.shareInitWishModal(this.product.name)

      },
      ...mapMutations('wishmodal', ['initWishModal', 'resetWishModal']),
      ...mapMutations('sharemodal', {
        'shareInitWishModal': 'initWishModal'
      }),
      toCartModal() {
        this.initWishModal(this.product)
      },
    },
    mounted() {
      let url = `${location.origin}/products/${this.product.id}`
      this.message = `快來看看『${this.product.name}』，價格超實惠！快來HaveFun Men’s Underwear搶購吧！${url}`
      this.$refs.product.addEventListener('animationend', function () {
        // process.client 是只有在client 端才有 用nuxt 需要增加這個if 判斷
        if (process.client) {
          $('div.product.fadeInUp').removeClass('fadeInUp')
        }
      })
    }
  }
</script>

<style scoped>
  .ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
</style>
