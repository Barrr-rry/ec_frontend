<template>
  <modal v-model="input" :title="$t('edit_information')" @ok="ok" :width="600">
    <CForm
      @submit="submit"
      ref="form"
    >
      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <CInput
            class="flex-grow-1"
            :required="true"
            name="name"
            error_class=""
            :placeholder="$t('member_name')"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <CInput
            class="flex-grow-1"
            :required="true"
            name="account"
            error_class=""
            :validators="[validateEmail]"
            :placeholder="$t('email')"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <CInput
            class="flex-grow-1"
            :required="true"
            name="cellphone"
            error_class=""
            :validators="[validateCellPhone, checkPhone]"
            :placeholder="$t('cell_phone')"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center row">
          <div class="col-4 d-flex">
            <CInput
              :required="false"
              :placeholder="$t('phone_code')"
              name="area"
              v-model="area"
            />
          </div>
          <div class="col-4 d-flex">
            <CInput
              :required="false"
              :placeholder="$t('phone')"
              name="local"
              v-model="local"
            />
          </div>
          <div class="col-4 d-flex">
            <CInput
              :required="false"
              :placeholder="$t('phone_a')"
              name="ext"
              v-model="ext"
            />
          </div>
        </div>
      </div>


      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <CInput
            class="flex-grow-1"
            :required="false"
            name="line_id"
            error_class=""
            placeholder="LINE_ID"
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
        default: () => {
        }
      }
    },
    data() {
      return {
        update_fields: ['name', 'account', 'cellphone', 'phone', 'line_id'],
        area: null,
        local: null,
        ext: null,
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
        if (!this.item) {
          return
        }
        let obj = {}
        for (let key of this.update_fields) {
          obj[key] = this.item[key]
        }

        try {
          let other = this.item.phone.split('-')
          let area = other[0]
          other = other[1]
          other = other.split('#')
          let local = other[0]
          let ext = other[1]
          this.area = area
          this.local = local
          this.ext = ext
        } catch (e) {
        }
        this.$refs.form.setFields(obj)
      },
      ok() {
        this.$refs.form.submit()
      },
      submit(data) {
        let phone =''
        if(this.local && this.area && this.ext){
          phone = `${this.area}-${this.local}#${this.ext}`
        }
        else if(this.local && this.area){
          phone = `${this.area}-${this.local}`
        }
        else if(this.ext && this.local){
          phone = `${this.local}#${this.ext}`
        }
        else {
          phone = `${this.local}`
        }
        data.phone = phone
        this.$api.member.self_update(data).then((res) => {
          let obj = {...this.$store.state.member.item}
          for (let key in res.data) {
            if (obj.hasOwnProperty(key)) {
              obj[key] = res.data[key]
            }
          }
          if (data.account !== this.item.account) {
            this.$toast.success(this.$t('send_mail_to_validate'))
          }
          this.$store.commit('member/changeValue', {
            key: 'item',
            value: obj
          })
          this.input = false
        }).catch(err => {
          if (this.$refs.form) {
            this.$refs.form.setError(err.response.data)
          }
        })
      }
    }
  }
</script>

<style scoped></style>
