<template>
  <modal v-model="input" title="規格" @ok="ok">
    <div class="quantity-select" style="margin-bottom: 10px">
      <label class="fz16px">{{product.level1_title}} :</label>
      <VSelectButton
        v-for="el of spec_level1_list"
        :key="el.id"
        :option="el.id"
        v-model="choose_level1"
      >{{getText(el,'cn_name','en_name')}}
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
        :disabled="dis(el)"
      >{{getText(el,'cn_name','en_name')}}
      </VSelectButton>
    </div>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import {mapState, mapActions, mapMutations} from 'vuex'
  import mixinProduct from "@/mixins/mixinProduct"
  import VSelectButton from "@/components/VSelectButton"
  import langMixin from "@/mixins/langMixin"

  export default {
    mixins: [vModel, mixinProduct, langMixin],
    components: {
      VSelectButton
    },
    data() {
      return {
        quantity: 1,
        specification: null,
        product: {
          specifications: [],
          specifications_detail: [],
        },
      }
    },
    computed: {
      ...mapState('cart_specification_modal', {
        cart: state => state.cart,
        modal: state => state.modal,
        method: state => state.method,
      })
    },
    watch: {
      modal(val) {
        this.input = val
      },
      input(val) {
        if (!val) {
          this.resetCart()
          this.choose_level1 = null
          this.choose_level2 = null
        } else {
          this.product = this.cart.product
          this.choose_level1 = this.cart.specification_detail.level1_spec
          this.choose_level2 = this.cart.specification_detail.level2_spec
        }
      }
    },
    methods: {
      ...mapMutations('cart_specification_modal', ['initCart', 'resetCart']),
      ok() {
        this.method(this.choose_specification_detail)
        this.resetCart()
      },
      dis(el) {
        let ret = []
        if (Array.isArray(this.product.specifications_detail)) {
          for (let ell of this.product.specifications_detail) {
            let level1_check = ell.level1_spec === this.choose_level1
            let level2_check = ell.level2_spec === el.id
            if (level1_check && level2_check) {
              ret.push(ell)
            }
          }
        }
        try {
          return this.cart.quantity > ret[0].quantity
        }catch (e) {
          return false
        }
      }
    }
  }
</script>

<style scoped></style>
