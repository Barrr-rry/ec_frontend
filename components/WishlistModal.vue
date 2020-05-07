<template>
  <modal v-model="input" :title="$t('add_cartt')" @ok="ok">
    <div class="wishmoal-row">
      <span class="d-flex align-items-center justify-content-end">{{$t('name_specification')}}:</span>
      <select
        class="select-form small-h mt-10px mb-10px"
        name=""
        style="width: 120px"
        v-model="specification"
      >
        <option :value="el.id"
                v-for="el of specifications"
                :key="el.id"
        >{{el.name}}
        </option>
      </select>
    </div>
    <div class="wishmoal-row">
      <span class="d-flex align-items-center justify-content-end">{{$t('product_count')}} :</span>
      <counter class="ml-5px" v-model="quantity"></counter>
    </div>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import CardBorder from '@/components/CardBorder'
  import Counter from "@/components/Counter"
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    mixins: [vModel],
    components: {
      CardBorder,
      Counter,
    },
    data() {
      return {
        quantity: 1,
        specification: null,
      }
    },
    computed: {
      ...mapState('wishmodal', {
        specifications: state => state.specifications,
        product_id: state => state.product_id,
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
      ok() {
        let values = {
          product: this.product_id,
          specification: this.specification,
          quantity: this.quantity
        }
        this.toCart(values).then(() => {
          this.$toast.success(this.$t('to_cart'))
        })
        this.resetWishModal()

        this.input = false
      },
    }
  }
</script>

<style scoped></style>
