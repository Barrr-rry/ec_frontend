<template>
  <div>
    <breadcrumb :end="$t('brand_page')"></breadcrumb>
    <div class="shop-layout">
      <div class="container">
        <div class="row">
          <div class="col-12 row mb-20px">
            <a
              class="normal-a hover-li ml-20px"
              v-for="brand of brands" :key="brand.fake_id"
              :href="`#${brand.fake_id}`"
            >{{brand.name}}</a>
          </div>
          <div class="col-12">
            <div class="">
              <div class="row align-items-center">
                <div class="col-12 shop-products_top underline">
                  <h1 class="title green-underline ml-0px">{{$t('brand_page')}}</h1>
                </div>
                <div
                  class="col-12 col-md-8 col-lg-8 col-xl-9 order-1 order-md-2"
                ></div>
              </div>
              <!--Using column-->
            </div>
          </div>
        </div>
        <div class="row" v-for="brand of brands" :key="brand.fake_id" :id="brand.fake_id">
          <div class="col-12">
            <div class="brand-header mt80px">{{brand.name}}</div>
          </div>
          <div class="col-12 row m0 pt20px">
            <brand-link :title="child.en_name"
                        v-for="child of brand.children"
                        :key="child.id"
                        :id="child.id"
            ></brand-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BrandLink from '@/components/BrandLink'
  import headerFetch from "@/mixins/fetch/headerFetch"
  import {mapState} from 'vuex'
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    components: {
      BrandLink
    },
    ...headerFetch
    , computed: {
      ...mapState('brand', {
        brands: state => state.items
      })
    },
  }
</script>

<style scoped></style>
