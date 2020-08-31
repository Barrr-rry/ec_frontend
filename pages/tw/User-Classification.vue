<template>
  <div>
    <breadcrumb :end="
    $t('user_classification')"></breadcrumb>
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
                <div class="department_top mini-tab-title underline">
                  <h2 class="title">{{$t('user_classification')}}</h2>
                </div>
                <div class="department_bottom">
                  <ul>
                    <li><a class="department-link" href="">{{$t('female')}}</a></li>
                    <li><a class="department-link" href="">{{$t('male')}}</a></li>
                    <li>
                      <a class="department-link" href=""
                      >{{$t('fif_female')}}</a
                      >
                    </li>
                    <li>
                      <a class="department-link" href=""
                      >{{$t('fif_male')}}</a
                      >
                    </li>
                    <li><a class="department-link" href="">{{$t('boy')}}</a></li>
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
                      <h2 class="title">{{$t('user_classification')}}</h2>
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
                      src="images/user_classification/c-01.svg"
                      title="女用營養系列"
                    ></function-box>
                    <function-box
                      src="images/user_classification/c-02.svg"
                      title="男用營養系列"
                    ></function-box>
                    <function-box
                      src="images/user_classification/c-03.svg"
                      title="50歲以上女用營養系列"
                    ></function-box>
                    <function-box
                      src="images/user_classification/c-04.svg"
                      title="50歲以上男用營養系列"
                    ></function-box>
                    <function-box
                      src="images/user_classification/c-05.svg"
                      title="兒童與青少年"
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
  import FunctionBox from '@/components/FunctionBox'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    name: 'UserCLassification',
    components: {
      FunctionBox
    },
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
  }
</script>

<style scoped></style>
