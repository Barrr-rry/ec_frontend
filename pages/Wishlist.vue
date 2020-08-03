<template>
  <div>
    <breadcrumb :end="$t('wishlist')"></breadcrumb>
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
            <div class="shopping-cart">
              <div class="mini-tab-title underline">
                <div class="row align-items-center" style="">
                  <div class="col-6">
                    <h2 class="title mb-0px">{{$t('my_favourite')}}</h2>
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
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="product-table" style="margin-top: 9px">
                      <div v-if="memberwishs.length===0" class="row">
                        <div
                          class="col-12 justify-content-center align-items-center text-center to-flex-col"
                        >
                          <img
                            src="/images/webs/wishlist-nodata.svg"
                            alt=""
                            class="max-width-100pa"
                          />
                          <h2 class="mt-5 speicail-h2">{{$t('no_wishlist')}}</h2>
                          <nuxt-link
                            to="/"
                            class="banner-btn normal-btn mt-4 special-btn-width text-align-center"
                          >{{$t('see_now')}}
                          </nuxt-link
                          >
                        </div>
                      </div>
                      <wishlist-table v-else></wishlist-table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import WishlistTable from '@/components/WishlistTable'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import mixinCategory from "@/mixins/mixinCategory"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinCategory, mixinDefaultInit],
    name: 'Wishlist',
    components: {
      WishlistTable
    },
    props: {
      nodata: {
        type: Boolean,
        default: false
      }
    },
    middleware: [
      'inMaintain', 'hasToken'
    ],
    fetch(ctx) {
      return fetchReturn(ctx)
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('memberwish', {
        memberwishs: state => state.items
      }),
    }
  }
</script>

<style scoped></style>
