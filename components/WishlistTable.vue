<template>
  <div>
    <WishlistModal v-model="wishmodal" :specifications="specifications_modal" :product_id="product_id"
                   @ok="toCart"
    ></WishlistModal>
    <table class="table table-responsive">
      <colgroup>
        <col span="1" style="width: 15%"/>
        <col span="1" style="width: 30%"/>
        <col span="1" style="width: 15%"/>
        <col span="1" style="width: 15%"/>
        <col span="1" style="width: 15%"/>
        <col span="1" style="width: 10%"/>
      </colgroup>
      <thead>
      <tr>
        <th class="product-iamge" scope="col">{{$t('product_iamge')}}</th>
        <th class="product-name" scope="col" style="min-width: 150px;">
          {{$t('name_specification')}}
        </th>
        <th class="product-price" scope="col">{{$t('price')}}</th>
        <th class="product-quantity" scope="col" style="min-width: 130px">
          {{$t('wish_date')}}
        </th>
        <th class="product-clear" scope="col" style="min-width: 130px">
          {{$t('function')}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="el of memberwishs"
          :key="el.id"
      >
        <td class="product-iamge">
          <div class="img-wrapper">
            <nuxt-link to="" class="img-wrapper" :to="`/products/${el.product}`">
              <img
                :src="imageLink(image(el.product_detail.productimages))"
                alt="product image"/>
            </nuxt-link>
          </div>
        </td>
        <td class="product-name">
          <div class="to-flex-col align-items-center">
            <nuxt-link to="" class="img-wrapper normal-a hover-primary" :to="`/products/${el.product}`">
              {{get_lng_name(el.product_detail)}}
            </nuxt-link>
          </div>
        </td>
        <!--        <td class="product-price">${{currencyChange(el.product_detail.price)|commaFormat}}</td>-->
        <td class="product-price">{{get_price_range(el.product_detail.specifications_detail)}}</td>
        <td class="product-quantity">
          {{el.join_at}}
        </td>
        <td class="product-clear">
          <div class="d-flex align-items-center justify-content-around">
            <button @click.prevent="toCartModal(el)" class="no-round-btn">
              <i class="icon_shoppingcart_b2w"></i>
            </button>
            <button class="no-round-btn" @click="close(el.id)"><i class="icon_close"></i></button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import mixinCategory from "@/mixins/mixinCategory"
  import WishlistModal from "@/components/WishlistModal"
  import mixinPrice from "@/mixins/mixinPrice"
  import mixinName from "@/mixins/mixinName"

  export default {
    mixins: [mixinCategory, mixinPrice, mixinName],
    name: 'WishlistTable',
    components: {
      WishlistModal
    },
    computed: {
      ...mapState('memberwish', {
        memberwishs: state => state.items
      }),
    },
    data() {
      return {
        specifications: {},
        wishmodal: false,
        specifications_modal: [],
        product_id: null
      }
    },
    methods: {
      ...mapMutations('wishmodal', ['initWishModal', 'resetWishModal']),
      currencyChange(val) {
        let ret = val * this.$store.state.price.item[this.$store.state.currency]
        return parseFloat(ret.toFixed(2))
      },
      readyToCart(el) {
        this.product_id = el.product
        this.specifications_modal = el.product_detail.specifications
        this.wishmodal = true
      },
      toCart(values) {
        this.$api.cart.postData(values).then(() => {
          this.$toast.success(this.$t('to_cart'))
          this.$store.dispatch('cart/getCount')
          this.$store.dispatch('cart/getTotal')
        })

      },
      toCartModal(el) {
        this.initWishModal(el.product_detail)
      },
      close(id) {
        this.$api.memberwish.deleteData(id).then(() => {
          this.$toast.success(this.$t('del_wish'))
          this.$store.dispatch('memberwish/getList')
        })
      },
      image(productimages) {
        for (let img of productimages) {
          if (img.main_image) {
            return img.image_url
          }
        }
      }
    },
    created() {
      this.specifications = {}
      for (let el of this.memberwishs) {
        this.specifications[el.id] = el.product_detail.specifications[0].id
      }
    }
  }
</script>

<style scoped></style>
