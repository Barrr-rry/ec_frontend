<template>
  <div>
    <breadcrumb :end="item.name"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="shop-layout">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="shop-sidebar fixed">
              <button id="filter-sidebar--closebtn" class="no-round-btn">
                {{$t('close_filter')}}
              </button>
              <div class="shop-sidebar_department">
                <div class="ellipsis" style="width: 240px">
                  <div class="department_top mini-tab-title underline">
                    <h2 class="title">{{ $t('category') }}</h2>
                  </div>
                </div>
                <div class="department_bottom">
                  <ul>
                    <li v-for="cata of item.sub_categories" :key="cata.id">
                      <nuxt-link
                        :to="getSubLink(cata)"
                        class="department-link"
                      >{{ cata.name }}
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
                      <h2 class="title ellipsis">{{ item.name }}</h2>
                    </div>
                    <div class="col-6 text-right">
                      <div id="show-filter-sidebar">
                        <h5 class="fz18px">
                          <i class="fas fa-bars"></i>{{$t('category_page')}}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <!--Using column-->
                </div>
                <div class="shop-products_bottom">
                  <div class="row no-gutters-sm">
                    <function-box
                      v-for="cata of item.sub_categories"
                      :key="cata.id"
                      :title="cata.name"
                      :item="cata"
                      :src="imageLink(cata.image_url)"
                    ></function-box>
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
  import {mapState} from 'vuex'
  import FunctionBox from '@/components/FunctionBox'
  import mixinCategory from '@/mixins/mixinCategory'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinCategory, mixinDefaultInit],
    components: {
      FunctionBox
    },
    computed: {
      ...mapState('category', {
        item: (state) => state.item
      }),
      category() {
        return {
          name: this.category.name
        }
      }
    },
    fetch(ctx) {
      return fetchReturn(ctx, [ctx.store.dispatch('category/getRead', ctx.params.id)])
    },
    methods: {}
  }
</script>

<style scoped></style>
