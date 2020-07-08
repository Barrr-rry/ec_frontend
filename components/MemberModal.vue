<template>
  <modal v-model="input" :title="$t('edit_information')" @ok="ok" :width="600">
    <CForm
      @submit="submit"
      ref="form"
    >
      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('member_name')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="name"
            error_class=""
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('email')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="account"
            error_class=""
            :validators="[validateEmail]"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('cell_phone')}}：
          </div>
          <CInput
            class="flex-grow-1"
            :required="true"
            name="cellphone"
            error_class=""
            :validators="[validateCellPhone, checkPhone]"
          />
        </div>
      </div>

      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-top" style="padding-top: 10px">
            {{$t('phone')}}：
          </div>
          <CInput
            :validators="[validatePhone]"
          >
            <select
              class="no-round-input mb-20px align-items-center"
              :placeholder="$t('phone_code_choose')"
              v-model="phone.area"
              style="background: white"
            >
              <option value="" disabled selected>{{$t('phone_code_choose')}}</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="037">037</option>
              <option value="04">04</option>
              <option value="049">049</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="089">089</option>
              <option value="0836">0836</option>
              <option value="082">082</option>
            </select>
            <input
              class="no-round-input mb-20px"
              type="text"
              :placeholder="$t('phone')"
              v-model="phone.local"
            />
            <input
              class="no-round-input"
              type="text"
              :placeholder="$t('phone_a')"
              v-model="phone.ext"
            />
          </CInput>
        </div>
      </div>


      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            LINE ID：
          </div>
          <CInput
            class="flex-grow-1"
            :required="false"
            name="line_id"
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
        default: () => {
        }
      }
    },
    data() {
      return {
        update_fields: ['name', 'account', 'cellphone', 'phone', 'line_id'],
        phone: {
          area: '',
          local: '',
          ext: ''
        }
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
          this.phone = {
            area,
            local,
            ext
          }
        } catch (e) {
        }
        this.$refs.form.setFields(obj)
      },
      ok() {
        this.$refs.form.submit()
      },
      submit(data) {
        let p = this.phone
        let phone =''
        if(p.local && p.area && p.ext){
          phone = `${p.area}-${p.local}#${p.ext}`
        }
        else if(p.local && p.area){
          phone = `${p.area}-${p.local}`
        }
        else if(p.ext && p.local){
          phone = `${p.local}#${p.ext}`
        }
        else {
          phone =''
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
