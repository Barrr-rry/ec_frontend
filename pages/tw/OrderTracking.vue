<template>
  <div>
    <breadcrumb :end="$t('acc_inf')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="shop-layout order-tracking">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="shop-sidebar">
              <button id="filter-sidebar--closebtn" class="no-round-btn" @click="$router.push('/member-centre')">
                {{$t('back_member_center')}}
              </button>
              <div class="shop-sidebar_department">
                <div class="department_top mini-tab-title underline">
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
                  <div class="row align-items-center">
                    <div class="col-6 col-xl-4">
                      <h2 class="title mb-0px">{{$t('order_record')}}</h2>
                    </div>
                    <div class="col-6 text-right">
                      <div id="show-filter-sidebar">
                        <h5 class="fz18px">
                          <i class="fas fa-bars"></i>{{$t('member_center')}}
                        </h5>
                      </div>
                    </div>
                    <div class="col-12 col-xl-8">
                      <div class="product-option">
                        <!--                        <div class="product-filter">-->
                        <!--                          <select id="sort" class="select-form small-h" name="">-->
                        <!--                            <option value="A-Z">近 6 個月</option>-->
                        <!--                            <option value="Z-A">近 3 個月</option>-->
                        <!--                          </select>-->
                        <!--                        </div>-->
                      </div>
                    </div>
                  </div>
                  <!--Using column-->
                </div>
              </div>
            </div>
            <div v-if="orders.length">
              <order-card class="mb-20px"
                  v-for="order of orders"
                  :key="order.id"
                  :order="order"
              >
              </order-card>
            </div>
            <div class="col-12 justify-content-center align-items-center text-center to-flex-col"
                 v-if="!orders.length"
            >
              <img src="/images/webs/no_order.svg" alt="" class="max-width-100pa">
              <h2 class="mt-5 speicail-h2">{{$t('order_no_product')}}</h2>
              <nuxt-link to="/member-centre"
                         class="banner-btn normal-btn mt-4 special-btn-width text-align-center">
                {{$t('to_buy')}}
              </nuxt-link>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import OrderCard from '@/components/OrderCard'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    name: 'OrderTracking',
    components: {
      OrderCard
    },
    middleware: [
      'inMaintain', 'hasToken'
    ],
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('order/getList')])
    },
    computed: {
      ...mapState('order', {
        orders: state => state.items
      }),
    },
  }
</script>

<style scoped></style>
