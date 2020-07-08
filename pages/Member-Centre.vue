<template>
  <div>
    <breadcrumb :end="$t('acc_inf')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="shop-layout">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="shop-sidebar">
              <button id="filter-sidebar--closebtn" class="no-round-btn" @click="$router.push('/member-centre')">
                {{$t('back_member_center')}}
              </button>
              <div class="shop-sidebar_department">
                <div class="department_top mini-tab-title underline mb-30px">
                  <h2 class="title">{{$t('member_center')}}</h2>
                </div>
                <div class="department_bottom">
                  <ul>
                    <li>
                      <nuxt-link class="department-link" to="/member-centre"
                      >{{$t('account_detail')}}
                      </nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="department-link" to="/wishlist"
                      >{{$t('my_favourite')}}
                      </nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link class="department-link" to="/ordertracking"
                      >{{$t('order_record')}}
                      </nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="filter-sidebar--background" style="display: none"></div>
          </div>
          <div class="col-xl-9">
            <div class="shop-grid-list">
              <div class="shop-products">
                <div class="shop-products_top mini-tab-title underline">
                  <div class="row align-items-center" style="">
                    <div class="col-6 col-xl-4">
                      <h2 class="title">{{$t('account_detail')}}</h2>
                    </div>
                    <div class="col-6 text-right">
                      <div id="show-filter-sidebar">
                        <h5 class="fz18px">
                          <i class="fas fa-bars"></i>{{$t('member_function')}}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <!--忠誠獎勵-->
                  <card-border :title="$t('reward_total')" class="color-primary">
                    <div class="mb-15px">
                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="point-group d-flex">
                            <div class="point-group--title">
                              <span>目前回饋點數</span>
                              <InfoTooltip
                                :content="`下次消費可折抵 ${myself.record_info.record.total_point} 元新台幣`"
                              />:
                            </div>
                            <div class="point-group--info">
                              <span class="point-group--block">
                                {{myself.record_info.record.total_point}}
                              </span>
                              點
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6"><span v-if="myself.record_info.record.year" style="font-size:14px;">回饋點數將於 {{myself.record_info.record.year}} 年 {{myself.record_info.record.month}} 月 {{myself.record_info.record.day}} 日 到期</span></div>
                      </div>
                    </div>
                    <div class="mb-15px">
                      <div class="row">
                        <div class="col-12 col-lg-5">
                          <div class="point-group d-flex">
                            <div class="point-group--title">
                              <span>待生效回饋點數</span>
                              <InfoTooltip
                                :content="`獎勵金生效日為消費後 ${myself.record_info.still_day} 天`"
                              />：
                            </div>
                            <div class="point-group--info">
                              <span class="point-group--block primary-color">
                                {{myself.record_info.record_temp.total_point}}
                              </span>點
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-lg-7">
                          <span v-if="myself.record_info.record_temp.year" style="font-size:14px;">最近一筆 {{myself.record_info.record_temp.last_point}} 元回饋金將於
                          {{myself.record_info.record_temp.year}} 年 {{myself.record_info.record_temp.month}} 月 {{myself.record_info.record_temp.day}} 日 生效</span>
                        </div>
                      </div>
                    </div>
                    <!--忠誠獎勵 a link-->
                    <div class="mb-15px d-flex justify-content-end">
                      <nuxt-link
                        to="/rewards"
                        class="no-round-btn normal-btn d-flex align-items-center"
                        style="height: 50px; padding: 0px 20px;"
                      >
                        <i class="award mr-5px"></i>
                        {{$t('reward_description')}}
                      </nuxt-link>
                    </div>
                    <!--TABLE-->
                    <div class="table-responsive" style="padding: 0 15px; background: #eaeff4;">
                      <table class="table reward-record-table" style="border-top:none;">
                        <thead>
                        <tr>
                          <th width="20%" height="45" style="text-align: center;" scope="col">更新日期</th>
                          <th width="48%" height="45" scope="col">摘要</th>
                          <th width="16%" height="45" scope="col">回饋點數變動</th>
                          <th width="16%" height="45" scope="col">回饋點數餘額</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="el of rewardrecords"
                            :key="el.id"
                        >
                          <td style="text-align: center;" >{{el.created_at}}</td>
                          <td>{{el.desc}}</td>
                          <td>{{displayPoint(el.point)}}</td>
                          <td>{{el.total_point}}</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </card-border>
                </div>

                <div class="d-flex mt-5">
                  <card-border
                    :editBtn="true"
                    @edit="member_modal = true"
                    :title="$t('acc_inf_m')"
                    class="outline-header small-main"
                  >

                    <div class="d-flex mb-20px">
                      <div class="d-flex flex-grow-1 align-content-center">
                        <div
                          class="col-3 col-sm-3 col-md-2 p0 label align-items-center"
                        >
                          {{$t('country')}}：
                        </div>
                        <div class="d-flex align-items-center">
                          {{ myself.name }}
                        </div>
                      </div>
                    </div>

                    <div class="d-flex mb-20px">
                      <div class="d-flex flex-grow-1 align-content-center" style="flex-wrap: wrap">
                        <div
                          class="col-3 col-sm-3 col-md-2 p0 label align-items-center"
                        >
                          {{$t('email')}}：
                        </div>
                        <div class="d-flex align-items-center mr-20px" style="position: relative">
                          {{ myself.account }}
                        </div>
                      </div>
                    </div>
                    <div class="d-flex mb-20px hr"></div>
                    <div class="d-flex">
                      <div class="d-flex flex-grow-1 align-content-center">
                        <div
                          class="col-3 col-sm-3 col-md-2 p0 label align-items-center"
                        >
                          {{$t('password')}}：
                        </div>
                        <div class="d-flex align-items-center">
                          ＊＊＊＊
                        </div>
                        <div
                          class="relative"
                          style="position: absolute; right: 0"
                        >
                          <div class="right-btn">
                            <button
                              @click="password_modal = true"
                              class="close no-round-btn"
                            >
                              <i class="edit-icon"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </card-border>
                </div>

                <div class="d-flex mt-5">
                  <!--常用地址-->
                  <card-border :closeBtn="false" :title="$t('common_address')" class="outline-header">
                    <card-border
                      :closeBtn="myself.default_memberaddress!==el.id&&myself.memberaddress.length>0"
                      :editBtn="true"
                      @edit="updateMemberAddress(el)"
                      @delete="deleteMmeberAddress(el.id,$event)"
                      class="mb-20px"
                      v-for="el of myself.memberaddress"
                      :key="el.id"
                    >
                      <!--國內-->
                      <div v-if="el.location===1">
                        <div
                          class="mb-20px d-flex justify-content-between align-items-center"
                        >
                          <div>{{$t('area')}} : 台灣</div>
                        </div>
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
                      </div>
                      <!--國外-->
                      <div v-if="el.location===2">
                        <div
                          class="mb-20px d-flex justify-content-between align-items-center"
                        >
                          <div>Region : Oversea</div>
                        </div>
                        <div
                          class="mb-20px d-flex justify-content-between align-items-center"
                        >
                          <div>Country : {{el.country}}</div>
                        </div>
                        <div
                          class="mb-20px d-flex justify-content-between align-items-center"
                        >
                          <div>First name : {{el.first_name}}</div>
                        </div>
                        <div
                          class="mb-20px d-flex justify-content-between align-items-center"
                        >
                          <div>Last name : {{el.last_name}}</div>
                        </div>
                        <div
                          class="mb-20px d-flex justify-content-between align-items-center"
                        >
                          <div>Address : {{el.shipping_address}}</div>
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

                      </div>


                      <div class="mb-20px d-flex align-items-center input-radio-display">
                        <!--                        <input type="radio" v-model="default_memberaddress" :value="el.id"/>-->
                        <div class="primary-color" v-if="default_memberaddress===el.id">
                          <b>{{$t('default_memberaddress')}}</b>
                        </div>
                        <button
                          class="no-round-btn"
                          v-else
                          @click="default_memberaddress=el.id"
                        >
                          {{$t('set_default_memberaddress')}}
                        </button>
                      </div>
                    </card-border>

                    <card-border class="mb-20px">
                      <div class="d-flex align-items-center">
                        <button
                          @click="memberaddress_create_modal = true"
                          class="close no-round-btn"
                        >
                          <i class="increase-icon"></i>
                        </button>
                        <div class="ml-10px">{{$t('add_memberaddress')}}</div>
                      </div>
                    </card-border>
                  </card-border>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MemberModal v-model="member_modal" :item="myself"></MemberModal>
      <PasswordModal v-model="password_modal"></PasswordModal>

      <MemberAddressModal v-model="memberaddress_create_modal"></MemberAddressModal>
      <MemberAddressModal :item="target" v-model="memberaddress_update_modal"></MemberAddressModal>
      <ValidateModal v-model="no_validate_modal"></ValidateModal>
    </div>
  </div>
</template>

<script>
  import CardBorder from '@/components/CardBorder'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import mixinCategory from "@/mixins/mixinCategory"
  import MemberModal from "@/components/MemberModal"
  import PasswordModal from "@/components/PasswordModal"
  import MemberAddressModal from "@/components/MemberAddressModal"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"
  import ValidateModal from "@/components/ValidateModal"
  import InfoTooltip from "@/components/InfoTooltip"

  export default {
    mixins: [mixinCategory, mixinDefaultInit],
    name: 'MemberCentre',
    components: {
      InfoTooltip,
      CardBorder,
      MemberModal,
      PasswordModal,
      MemberAddressModal,
      ValidateModal
    },
    middleware: [
      'hasToken'
    ],
    fetch(ctx) {
      return fetchReturn(ctx, [
        ctx.store.dispatch('member/info'),
        ctx.store.dispatch('country/getList'),
        ctx.store.dispatch('rewardrecord/getList'),
      ])
    },
    data() {
      return {
        no_validate_modal: false,
        target: null,
        default_memberaddress: null,
        member_modal: false,
        password_modal: false,
        memberaddress_create_modal: false,
        memberaddress_update_modal: false,
      }
    },
    computed: {
      ...mapState('member', {
        myself: state => state.item
      }),
      ...mapState('rewardrecord', {
        rewardrecords: state => state.items
      }),
    },
    watch: {
      default_memberaddress(new_val) {
        if (this.myself.default_memberaddress !== new_val) {
          this.updateMember({default_memberaddress: new_val})
        }
      },
      myself: {
        handler() {
          this.default_memberaddress = this.myself.default_memberaddress
        },
        deep: true,
        immediate: true
      },
    },
    methods: {
      displayPoint(point) {
        if (point > 0) {
          return `+ ${point}`
        } else {
          return `- ${Math.abs(point)}`
        }
      },
      deleteMmeberAddress(id, callback) {
        this.$api.memberaddress.deleteData(id).then(() => {
          callback()
          this.$store.dispatch('member/info').then(() => {
          })
        })
      },
      updateMember(data) {
        this.$api.member.putData(this.myself.id, data).then(() => {
          this.$store.dispatch('member/info')
        })
      },
      updateMemberAddress(target) {
        this.target = target
        this.memberaddress_update_modal = true
      }
    },
    created() {
      this.default_memberaddress = this.myself.default_memberaddress
    }
  }
</script>

<style scoped></style>
