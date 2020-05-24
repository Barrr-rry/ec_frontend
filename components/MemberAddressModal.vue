<template>
  <modal v-model="input" :title="item?$t('edit_address'):$t('create_address')" @ok="ok" width="800">
    <CForm
      @submit="submit"
      ref="form"
    >
      <!--地區-->
      <div class="d-flex mb-20px">
        <div class="d-flex flex-grow-1 align-content-center">
          <div class="col-5 col-sm-4 p0 d-flex align-items-center">
            {{$t('area')}} *：
          </div>
          <CInput
            class="flex-grow-1 input-radio-display"
            :required="false"
            name="location"
            error_class=""
          >
            <!--台灣-->
            <input type="radio" id="radio_location1" :value="1" v-model="location">
            <label for="radio_location1">台灣</label>
            <!--海外-->
            <input type="radio" id="radio_location2" :value="2"
                   v-model="location">
            <label for="radio_location2">海外（Oversea）</label>
          </CInput>
        </div>
      </div>
      <!--國內-->
      <div v-if="location===1">
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
      </div>
      <!--海外-->
      <div v-if="location===2">
        <!--Country-->
        <div class="d-flex mb-20px">
          <div class="d-flex flex-grow-1 align-content-center">
            <div class="col-5 col-sm-4 p0 d-flex align-items-center">
              Country *：
            </div>
            <CInput
              class="flex-grow-1"
              :required="false"
              name="country"
              error_class=""
            >
              <select
                v-model="country"
              >
                <option :value="el"
                        v-for="el of country_list"
                        :key="el"
                >{{el}}
                </option>
              </select>
            </CInput>
          </div>
        </div>

        <!--姓名：first name/last name-->
        <div class="d-flex mb-20px">
          <div class="d-flex flex-grow-1 align-content-center row">
            <div class="col-6 d-flex">
              <div class="d-flex align-items-center">First name* ：</div>
              <CInput
                :required="true"
                placeholder=""
                name="first_name"
                :validators="[recieveName]"
              />
            </div>
            <div class="col-6 d-flex">
              <div class="d-flex align-items-center">Last name* ：</div>
              <CInput
                :required="true"
                placeholder=""
                name="last_name"
                :validators="[recieveName]"
              />
            </div>
          </div>
        </div>

        <!--地址:Address-->
        <div class="d-flex mb-20px">
          <div class="d-flex flex-grow-1 align-content-center">
            <div class="col-5 col-sm-4 p0 d-flex align-items-center">
              Address*：
            </div>
            <CInput
              class="flex-grow-1"
              :required="true"
              name="shipping_address"
              error_class=""
            />
          </div>
        </div>

        <!--大樓名字-->
        <div class="d-flex mb-20px">
          <div class="d-flex flex-grow-1 align-content-center">
            <div class="col-5 col-sm-4 p0 d-flex align-items-center">
              Apartment /Suite / Building( Optional )：
            </div>
            <CInput
              class="flex-grow-1"
              :required="false"
              name="building"
              error_class=""
            />
          </div>
        </div>

        <!--公司名字-->
        <div class="d-flex mb-20px">
          <div class="d-flex flex-grow-1 align-content-center">
            <div class="col-5 col-sm-4 p0 d-flex align-items-center">
              Company name( Optional )：
            </div>
            <CInput
              class="flex-grow-1"
              :required="false"
              name="company_name"
              error_class=""
            />
          </div>
        </div>

        <!--城市/郵遞區號: City/Postal Code-->
        <div class="d-flex mb-20px">
          <div class="d-flex flex-grow-1 align-content-center row">
            <div class="col-6 d-flex">
              <div class="d-flex align-items-center">City* ：</div>
              <CInput
                :required="true"
                placeholder=""
                name="city"
                :validators="[recieveName]"
              />
            </div>
            <div class="col-6 d-flex">
              <div class="d-flex align-items-center">Postal* ：</div>
              <CInput
                :required="true"
                placeholder=""
                name="postal_code"
                :validators="[recieveName]"
              />
            </div>
          </div>
        </div>

        <!--電話-->
        <div class="d-flex mb-20px">
          <div class="d-flex flex-grow-1 align-content-center">
            <div class="col-5 col-sm-4 p0 d-flex align-items-center">
              Phone number* ：
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

      </div>
    </CForm>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import validator from "@/mixins/validator"
  import CInput from "@/components/CInput"
  import CForm from "@/components/CForm"
  import {mapState} from 'vuex'

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
        first_init: true,
        location: 1,
        country: null,
        update_fields: ['shipping_name', 'phone', 'shipping_area', 'shipping_address', 'city',
          'first_name',
          'last_name',
          'country',
          'building',
          'company_name',
          'city',
          'postal_code',
        ]
      }
    },
    computed: {
      ...mapState('country', {
        country_list: state => state.items
      }),
    },
    watch: {
      input(val) {
        if (val) {
          this.first_init = true
          this.initFields()
          this.$nextTick(() => {
            this.first_init = false
          })
        }
      },
      location() {
        if (!this.first_init) {
          this.initFields(false)
        }

      }
    },
    methods: {
      initFields(first_init = true) {
        if (first_init) {
          this.location = 1
          this.country = null
          if (this.country_list.length) {
            this.country = this.country_list[0]
          }
        }

        let obj = {}
        if (!this.item) {
          for (let key of this.update_fields) {
            obj[key] = null
          }
        } else {
          if (first_init) {
            this.location = this.item.location
            if (this.location === 2) {
              this.country = this.item.country
            }
          }
          for (let key of this.update_fields) {
            obj[key] = this.item[key]
          }
        }
        this.$nextTick(() => {
          let remove_list = []
          if (this.location === 1) {
            remove_list = [
              'first_name',
              'last_name',
              'country',
              'building',
              'company_name',
              'city',
              'postal_code',
            ]


          } else {
            remove_list = [
              'shipping_name',
              'shipping_area',
            ]
          }
          for (let el of remove_list) {
            if (obj.hasOwnProperty(el)) {
              delete obj[el]
            }
          }
          this.$refs.form.setFields(obj)
        })

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
        data.location = this.location
        if (this.location === 2) {
          data.country = this.country
        }
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
