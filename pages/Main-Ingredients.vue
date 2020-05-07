<template>
  <div>
    <breadcrumb end="主要成分"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="shop-layout">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="shop-sidebar">
              <button id="filter-sidebar--closebtn" class="no-round-btn">
                {{$t('close_filter')}}
              </button>
              <div class="shop-sidebar_department">
                <div class="department_top mini-tab-title underline">
                  <h2 class="title">{{$t('main_in')}}</h2>
                </div>
                <div class="department_bottom">
                  <ul>
                    <li><a class="department-link" href="">{{$t('other_in')}}</a></li>
                    <li><a class="department-link" href="">大豆異黃酮</a></li>
                    <li>
                      <a class="department-link" href="">益生菌 / 乳酸菌</a>
                    </li>
                    <li><a class="department-link" href="">綜合維他命</a></li>
                    <li><a class="department-link" href="">維生素B群</a></li>
                    <li>
                      <a class="department-link" href="">脂肪酸 / 魚油</a>
                    </li>
                    <li><a class="department-link" href="">葉酸</a></li>
                    <li><a class="department-link" href="">葡萄糖胺</a></li>
                    <li><a class="department-link" href="">銀杏</a></li>
                    <li><a class="department-link" href="">葡萄籽</a></li>
                    <li><a class="department-link" href="">奶薊草</a></li>
                    <li><a class="department-link" href="">葉黃素</a></li>
                    <li><a class="department-link" href="">鈣片</a></li>
                    <li><a class="department-link" href="">鋸棕櫚</a></li>
                    <li>
                      <a class="department-link" href=""
                      >Minoxidil / 米諾地爾</a
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
                      <h2 class="title">{{$t('main_in')}}</h2>
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
                      src="images/main_contain/b-01.svg"
                      title="其他成分"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-02.svg"
                      title="大豆異黃酮"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-03.svg"
                      title="益生菌 / 乳酸菌"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-04.svg"
                      title="綜合維他命"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-05.svg"
                      title="維生素B群"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-06.svg"
                      title="脂肪酸 / 魚油"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-07.svg"
                      title="葉酸"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-08.svg"
                      title="葡萄糖胺"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-09.svg"
                      title="銀杏"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-10.svg"
                      title="葡萄籽"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-11.svg"
                      title="奶薊草"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-12.svg"
                      title="葉黃素"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-13.svg"
                      title="鈣片"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-14.svg"
                      title="鋸棕櫚"
                    ></function-box>
                    <function-box
                      src="images/main_contain/b-15.svg"
                      title="Minoxidil / 米諾地爾"
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
    name: 'MainIngredients',
    components: {
      FunctionBox
    },
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
  }
</script>

<style scoped></style>
