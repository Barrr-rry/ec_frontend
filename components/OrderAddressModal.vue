<template>
  <modal v-model="input" :title="$t('choose_address')" @ok="ok">
    <card-border :closeBtn="false" title="">
      <div v-if="myself.memberaddress.length===0">{{$t('no_address')}}</div>
      <card-border
        :closeBtn="false"
        :editBtn="false"
        class="mb-20px"
        v-for="el of myself.memberaddress"
        :key="el.id"
      >
        <div
          class="mb-20px d-flex justify-content-between align-items-center"
        >
          <div>{{$t('shipping_name')}} : {{el.shipping_name}}</div>
        </div>
        <div
          class="mb-20px d-flex justify-content-between align-items-center"
        >
          <div>{{$t('shipping_phone')}} : {{el.phone}}</div>
        </div>
        <div
          class="mb-20px d-flex justify-content-between align-items-center"
        >
          <div>{{$t('shipping_address')}} : {{el.shipping_address}}</div>
        </div>
        <div class="mb-20px d-flex align-items-center input-radio-display">
          <input type="radio" v-model="default_memberaddress" :value="el.id"/>
          <div class="ml-2">{{$t('choose_address')}}</div>
        </div>
      </card-border>

    </card-border>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import CardBorder from '@/components/CardBorder'

  export default {
    mixins: [vModel],
    components: {
      CardBorder,
    },
    props: {
      myself: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        default_memberaddress: null,
      }
    },
    watch: {
      input(val) {
        if (val && this.myself.memberaddress.length > 0) {
          this.default_memberaddress = this.myself.default_memberaddress || this.myself.memberaddress[0].id
        }
      }
    },
    methods: {
      ok() {
        let memberaddress = this.myself.memberaddress.filter(x => x.id === this.default_memberaddress)[0]
        this.$emit('ok', memberaddress)
        this.input = false
      },
    }
  }
</script>

<style scoped></style>
