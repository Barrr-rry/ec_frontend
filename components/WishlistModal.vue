<template>
  <modal v-model="input" :title="$t('add_cartt')" @ok="ok" width="600">
    <div class="price-rate" v-if="product&&product.specifications_detail">
      <h3 class="product-price">
        <del v-if="fake_price">{{getProcessPrice(fake_price)}}
        </del>
        {{getProcessPrice(price)}}
      </h3>
    </div>
    <div class="quantity-select" style="margin-bottom: 10px">
      <label class="fz16px">{{product.level1_title}} :</label>
      <VSelectButton
        v-for="el of spec_level1_list"
        :key="el.id"
        :option="el.id"
        v-model="choose_level1"
        :disabled="isSelectDisabled(el)"
      >{{el.cn_name}}
      </VSelectButton>
    </div>
    <div class="quantity-select" style="margin-bottom: 10px"
         v-if="has_spec_level2"
    >
      <label class="fz16px">{{product.level2_title}} :</label>
      <VSelectButton
        v-for="el of spec_level2_list"
        :key="el.id"
        :option="el.id"
        v-model="choose_level2"
        :disabled="isSelectDisabled(el)"
      >{{el.cn_name}}
      </VSelectButton>
    </div>


    <div class="quantity-select d-flex align-items-center">
      <label class="fz16px">{{$t('count')}} :</label>
      <counter class="ml-5px" v-model="quantity"></counter>
      <span class="col-6 pl-5px primary-color">{{stock_display_text}}</span>
    </div>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import CardBorder from '@/components/CardBorder'
  import Counter from "@/components/Counter"
  import {mapState, mapActions, mapMutations} from 'vuex'
  import mixinProduct from "@/mixins/mixinProduct"
  import VSelectButton from "@/components/VSelectButton"
  import {addTOCart} from '@/assets/js/localCart'

  export default {
    mixins: [vModel, mixinProduct],
    components: {
      CardBorder,
      Counter,
      VSelectButton,
    },
    data() {
      return {
        specification: null,
      }
    },
    computed: {
      ...mapState('wishmodal', {
        product: state => state.product,
      })
    },
    watch: {
      input(val) {
        if (val) {
          this.quantity = 1
          if (this.specifications && this.specifications.length) {
            this.specification = this.specifications[0].id
          } else {
            this.specification = null
          }
        } else {
          this.resetWishModal()
        }
      }
    },
    methods: {
      ...mapActions('wishmodal',
        ['toCart']
      ),
      ...mapMutations('wishmodal',
        ['resetWishModal']
      ),
      toCartAPI(values) {
        if (!this.$store.state.membertoken.has_token) {
          addTOCart(values, this.$store)
          return Promise.resolve()
        }
        return this.$api.cart.postData(values).then(() => {
          this.$store.dispatch('cart/getCount')
          this.$store.dispatch('cart/getTotal')
        })
      },
      toCart() {
        if (!this.choose_done) {
          this.$toast.warning('請先選擇規格')
          return
        }
        let values = {
          product: this.product.id,
          specification_detail: this.choose_specification_detail.id,
          quantity: this.quantity,
        }
        return this.toCartAPI(values).then(() => {
          this.$toast.success(this.$t('to_cart'))
          this.input = false
          this.resetWishModal()
        })
      },
      ok() {
        this.toCart()
      },
    }
  }
</script>

<style scoped></style>
