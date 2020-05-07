<template>
  <modal v-model="input" :title="item?$t('edit_address'):$t('create_address')" @ok="ok">
    <CForm
      @submit="submit"
      ref="form"
    >
      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-4 p0 d-flex align-items-center">
            {{$t('shipping_name')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="shipping_name"
            error_class=""
            :validators="[recieveName]"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-4 p0 d-flex align-items-center">
            {{$t('shipping_phone')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="phone"
            error_class=""
            :validators="[checkPhone]"
          />
        </div>
      </div>


      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-4 p0 d-flex align-items-center">
            {{$t('shipping_code')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="shipping_area"
            error_class=""
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-4 p0 d-flex align-items-center">
            {{$t('address')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="shipping_address"
            error_class=""
          />
        </div>
      </div>
    </CForm>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import validator from "@/mixins/validator"
  import CInput from "@/components/CInput"
  import CForm from "@/components/CForm"

  export default {
    mixins: [vModel, validator],
    components: {
      CInput,
      CForm,
    },
    props: {
      item: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        update_fields: ['shipping_name', 'phone', 'shipping_area', 'shipping_address']
      }
    },
    watch: {
      input(val) {
        if (val) {
          this.initFields()
        }
      }
    },
    methods: {
      initFields() {
        let obj = {}
        if (!this.item) {
          for (let key of this.update_fields) {
            obj[key] = null
          }
        } else {
          for (let key of this.update_fields) {
            obj[key] = this.item[key]
          }
        }
        this.$refs.form.setFields(obj)
      },
      ok() {
        this.$refs.form.submit()
      },
      create(data) {
        this.$api.member.memberaddress(data).then(() => {
          this.$store.dispatch('member/info').then(() => {
            this.input = false
          })
        }).catch(err => {
          if (this.$refs.form) {
            this.$refs.form.setError(err.response.data)
          }
        })
      },
      update(data) {
        this.$api.memberaddress.putData(this.item.id, data).then(() => {
          this.$store.dispatch('member/info').then(() => {
            this.input = false
          })
        }).catch(err => {
          if (this.$refs.form) {
            this.$refs.form.setError(err.response.data)
          }
        })
      },
      submit(data) {
        if (this.item) {
          this.update(data)
        } else {
          this.create(data)
        }
      }
    }
  }
</script>

<style scoped></style>
