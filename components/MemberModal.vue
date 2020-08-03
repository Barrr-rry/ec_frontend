<template>
  <modal v-model="input" :title="$t('edit_information')" @ok="ok" :width="600">
    <CForm
      @submit="submit"
      ref="form"
    >
      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-3 p0 d-flex align-items-center">
            {{$t('country')}}：
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
        // 初始化資料 如果是update 可以更新form 裡面的資料
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
        // 更新form 的資料
        this.$refs.form.setFields(obj)
      },
      ok() {
        // trigger submit
        this.$refs.form.submit()
      },
      submit(data) {
        // member 更新資料
        let p = this.phone
        // 更新手機
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
        // update 更新資料
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
          // store update 寫法
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
