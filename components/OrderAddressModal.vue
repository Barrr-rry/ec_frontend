<template>
  <modal v-model="input" :title="$t('choose_address')" @ok="ok" :width="500">
    <card-border :closeBtn="false" title="">
      <div v-if="myself.memberaddress.length===0">{{$t('no_address')}}</div>
      <card-border
        :closeBtn="false"
        :editBtn="false"
        class="mb-20px"
        v-for="el of myself.memberaddress"
        :key="el.id"
        v-if="el.location===location"
      >
        <!--國內資料-->
        <div v-if="location===1">
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
        </div>
        <!--國外資料-->
        <div v-if="location===2">
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>Country : {{el.country}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>First Nmae : {{el.first_name}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>Last Nmae : {{el.last_name}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>Address : {{el.shipping_address}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>Apartment /Suite / Building : {{el.building}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>Company name : {{el.company_name}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>City : {{el.city}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>Postal code : {{el.postal_code}}</div>
          </div>
          <div
            class="mb-20px d-flex justify-content-between align-items-center"
          >
            <div>Phone number : {{el.phone}}</div>
          </div>
          <div class="mb-20px d-flex align-items-center input-radio-display">
            <input type="radio" v-model="default_memberaddress" :value="el.id"/>
            <div class="ml-2">{{$t('choose_address')}}</div>
          </div>
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
      location: {
        type: Number,
        default: null,
      },
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
