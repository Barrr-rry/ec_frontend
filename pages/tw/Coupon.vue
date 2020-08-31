<template>
  <div>
    <breadcrumb :end="$t('coupon')"></breadcrumb>
    <div class="shop-layout">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="shop-grid-list">
              <div class="shop-products">
                <div class="shop-products_top mini-tab-title underline">
                  <div class="row align-items-center">
                    <div class="col-6 col-xl-4">
                      <h2 class="title">{{$t('coupon')}}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="coupons">
              <coupon-card v-for="el of coupons" :key="el.id" :item="el"></coupon-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import {api} from "@/api"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    name: 'Coupon',
    fetch(ctx) {
      return fetchReturn(ctx, [
        ctx.store.dispatch('coupon/getList'),
      ])
    },
    computed: {
      ...mapState('coupon', {
        coupons: state => {
          let items = [...state.items]
          items.sort((a, b) => {
            return b.status ? 1 : -1
          })
          return items

        }
      })
    },
  }
</script>

<style scoped></style>
