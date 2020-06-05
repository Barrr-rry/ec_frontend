<template>
  <header v-if="computed_brands.length&&categories.length">
    <div class="header-block d-flex align-items-center">
      <div class="container header-white">
        <div class="row">
          <div class="col-12 col-md-6">
            <div
              class="header-left d-flex flex-md-row align-items-center fill-height"
            >
              All prices are in TWD. 全館買三送一
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div
              class="header-right d-flex flex-md-row justify-content-end align-items-center"
            >
              <div class="social-link d-flex">
                <ImageHover
                  src="/images/webs/ig-origin.svg"
                  hover="/images/webs/ig-origin.svg"
                />
                <ImageHover
                  src="/images/webs/twitter-origin.svg"
                  hover="/images/webs/twitter-origin.svg"
                />
                <ImageHover
                  src="/images/webs/line-origin.svg"
                  hover="/images/webs/line-origin.svg"
                />
                <ImageHover
                  src="/images/webs/fb-origin.svg"
                  hover="/images/webs/fb-origin.svg"
                />
<!--                <a href="https://www.facebook.com/%E6%B1%B4%E5%88%A9%E8%B3%BC-Ezgo-107385547368839/" target="_blank"><i-->
<!--                  class="fab fa-facebook-f"> </i></a>-->
<!--                <a href="https://line.me/ti/p/1qvbcczVSW" target="_blank"><i class="fab fa-line"> </i></a>-->
<!--                <a href=""><i class="fab fa-twitter" @click="share('twitter')"></i></a>-->
              </div>
              <div class="language">
                <div class="selected-language">
                  {{display_lang}}<i class="arrow_carrot-down"></i>
                  <ul class="list-language">
                    <li class="hover-li" @click="change_locale('tw')">{{$t('Chinese')}}</li>
                    <li class="hover-li" @click="change_locale('en')">English</li>
                  </ul>
                </div>
              </div>
              <nuxt-link
                class="function-icon ml-10px mr-10px"
                to="/wishlist"
                id="wishlist"
              >
                <i class="icon-heart-heart"/>
              </nuxt-link>
              <div class="language">
                <div class="selected-language">
                  <nuxt-link to="/shop-cart" class="normal-a d-flex"
                  ><i class="shopping-cart-icon"></i>
                    <span class="badge badge-notify" v-if="count">{{count}}</span>
                  </nuxt-link>
                </div>
              </div>
              <div class="login d-flex"
                   v-if="!has_token"
              >
                <nuxt-link to="/login"
                ><i class="fas fa-user"></i>{{$t('login')}}
                </nuxt-link
                >
              </div>
              <div class="login d-flex"
                   v-else
              >
                <nuxt-link to="/member-centre"
                ><i class="fas fa-user"></i>
                </nuxt-link>
                <a class="pointer" @click="logout">{{$t('logout')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-only-logo d-flex justify-content-center"
         v-if="$route.name==='index'"
    >
      <img src="/images/webs/logo.svg" alt="" style="width: 280px">
    </div>
    <nav class="navigation d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="navgition-menu d-flex align-items-center justify-content-center"
            >
              <ul class="mb-0 d-flex justify-content-between fill-width">
                <li
                  class="toggleable"
                >
                  <nuxt-link :to="`/brands`" class="menu-item">
                    {{$t('brand_category')}}
                  </nuxt-link
                  >
                  <ul class="sub-menu shop">
                    <li v-for="brand of computed_brands" :key="brand.id">
                      <nuxt-link :to="`/products?b=${brand.id}`">{{
                        brand.en_name
                        }}
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/brands">{{$t('all_brands')}}</nuxt-link>
                    </li>
                  </ul>
                </li>

                <li
                  v-for="cata of categories"
                  :key="cata.id"
                  class="toggleable"
                >
                  <nuxt-link :to="`/categories/${cata.id}`" class="menu-item">
                    {{ cata.name }}
                  </nuxt-link>
                  <template v-if="checkMoreDeeper(cata.sub_categories)">
                    <ul class="sub-menu shop d-flex" style="min-width: 1100px">
                      <div class="nav-column" v-for="sub of cata.sub_categories" :key="sub.id">
                        <h2>{{sub.name}}</h2>
                        <li v-for="sub_sub of sub.sub_categories">
                          <nuxt-link :to="getSubLink(sub_sub)">{{
                            sub_sub.name
                            }}
                          </nuxt-link>
                        </li>
                      </div>
                    </ul>
                  </template>
                  <template v-else>
                    <ul class="sub-menu shop">
                      <div class="nav-column">
                        <li v-for="sub of cata.sub_categories" :key="sub.id">
                          <nuxt-link :to="getSubLink(sub)">{{
                            sub.name
                            }}
                          </nuxt-link>
                        </li>
                      </div>
                    </ul>
                  </template>
                </li>

                <li class="toggleable">
                  <nuxt-link class="menu-item" to="/about-us"
                  >{{$t('about_us')}}
                  </nuxt-link
                  >
                  <span class="sub-menu--expander"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-2">
            <div
              class="product-function d-flex align-items-center justify-content-end"
            >
              <!--              <div id="cart">-->
              <!--                <nuxt-link class="function-icon" to="/shop-cart" v-if="count">-->
              <!--                  <span>${{currencyChange(total)|commaFormat}}</span></nuxt-link-->
              <!--                >-->
              <!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="navigation-clone"></div>
    <div id="mobile-menu">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="mobile-menu_block d-flex align-items-center">
              <a class="mobile-menu--control" href="#"
              ><i class="fas fa-bars"></i
              ></a>
              <div id="ogami-mobile-menu">
                <button id="mobile-menu--closebtn" class="no-round-btn">
                  {{$t('close_menu')}}
                </button>
                <div class="mobile-menu_items">
                  <ul class="mb-0 d-flex flex-column">
                    <li class="toggleable">
                      <nuxt-link class="menu-item" to="/brands"
                      >{{$t('brand_category')}}
                      </nuxt-link
                      >
                      <span class="sub-menu--expander"
                      ><i class="icon_plus"></i
                      ></span>
                      <ul class="sub-menu">
                        <li v-for="brand of computed_brands" :key="brand.id">
                          <nuxt-link :to="`/products?b=${brand.id}`">{{
                            brand.en_name
                            }}
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/brands">{{$t('all_brands')}}</nuxt-link>
                        </li>
                      </ul>
                    </li>
                    <li class="toggleable"
                        v-for="cata of categories"
                        :key="cata.id"
                    >
                      <nuxt-link :to="`/categories/${cata.id}`" class="menu-item">
                        {{ cata.name }}
                      </nuxt-link>
                      <span class="sub-menu--expander"
                      ><i class="icon_plus"></i
                      ></span>
                      <ul class="sub-menu">
                        <li v-for="sub of cata.sub_categories" :key="sub.id">
                          <nuxt-link :to="getSubLink(sub)">{{
                            sub.name
                            }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>

                    <li class="toggleable"
                    >
                      <a href="#" class="menu-item" disabled>
                        {{$t('member_center')}}
                      </a>
                      <span class="sub-menu--expander"
                      ><i class="icon_plus"></i
                      ></span>
                      <ul class="sub-menu">
                        <li>
                          <nuxt-link to="/member-centre">
                            {{$t('account_detail')}}
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/wishlist">
                            {{$t('my_favourite')}}
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/ordertracking">
                            {{$t('order_record')}}
                          </nuxt-link>
                        </li>
                      </ul>
                    </li>


                    <li class="toggleable">
                      <nuxt-link class="menu-item" to="/about-us"
                      >{{$t('about_us')}}
                      </nuxt-link
                      >
                      <span class="sub-menu--expander"></span>
                    </li>
                  </ul>
                </div>
                <div class="mobile-login">
                  <nuxt-link to="/login" v-if="!has_token">{{$t('login')}}</nuxt-link>
                  <a href="#" @click="logout" v-else>{{$t('logout')}}</a>
                </div>

                <div class="mobile-menu_items">
                  <ul class="mb-0 d-flex flex-column">
                    <li class="toggleable">
                      <a class="menu-item" href="#" disabled>{{display_lang}}</a
                      ><span class="sub-menu--expander"
                    ><i class="icon_plus"></i
                    ></span>

                      <!--                      <ul class="sub-menu">-->
                      <!--                        <li @click="change_locale('tw')"><a href="#">{{$t('Chinese')}}</a></li>-->
                      <!--                        <li @click="change_locale('en')"><a href="#">English</a></li>-->
                      <!--                      </ul>-->
                    </li>
                    <li class="toggleable">
                      <a class="menu-item" href="# " disabled>{{$t('currency')}}</a
                      ><span class="sub-menu--expander"
                    ><i class="icon_plus"></i
                    ></span>

                      <ul class="sub-menu">
                        <li @click="change_currency('tw')"><a href="#">{{$t('ntdoller')}} NTD</a></li>
                        <li @click="change_currency('en')"><a href="#">{{$t('usdoller')}} USD</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="mobile-social">
                  <a href="https://www.facebook.com/%E6%B1%B4%E5%88%A9%E8%B3%BC-Ezgo-107385547368839/"
                     target="_blank"><i class="fab fa-facebook-f"> </i></a>
                  <a href="https://line.me/ti/p/1qvbcczVSW" target="_blank"><i class="fab fa-line"> </i></a>
                  <a href=""><i class="fab fa-twitter" @click="share('twitter')"></i></a>
                </div>
              </div>
              <div class="ogamin-mobile-menu_bg"></div>
            </div>
          </div>
          <div class="col-6">
            <div
              class="mobile-menu_logo text-center d-flex justify-content-center align-items-center"
            >
              <a href="/"></a>
              <!-- <nuxt-link to="/"
              ><img src="" alt=""
              /></nuxt-link> -->
            </div>
          </div>
          <div class="col-3">
            <div
              class="mobile-product_function d-flex align-items-center justify-content-end"
            >
              <nuxt-link
                class="function-icon icon_heart_alt pl-0px"
                to="/wishlist"
              ></nuxt-link
              >
              <nuxt-link
                class="function-icon shopping-cart-icon pl-0px ml-15px"
                to="/shop-cart"
              >
                <span class="badge badge-notify" v-if="count">{{count}}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-menu-clone"></div>
    <div class="navigation-filter" v-if="$route.name!=='index'">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-4 col-xl-3 order-2 order-md-1">
            <div class="department-menu_block">
              <div
                class="department-menu d-flex justify-content-between align-items-center white-color"
              >
                <i class="fas fa-bars"></i>{{$t('chose_buy')}}<span
              ><i class="arrow_carrot-down"></i
              ></span>
              </div>
              <div v-show="init_slideup" class="department-dropdown-menu">
                <ul>
                  <li v-for="tag of tags"
                      :id="tag.id"
                  >
                    <nuxt-link :to="`/products?t=${tag.id}`">{{tag.name}}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-8 col-xl-9 order-1 order-md-2">
            <div class="website-search">
              <div class="row no-gutters">
                <div class="col-9 col-md-8 col-lg-9 col-xl-10">
                  <div class="search-input">
                    <input
                      :placeholder="$t('please_input_brand_or_prodcut_name')"
                      class="no-round-input no-border"
                      type="text"
                      v-model="search_input"
                      @keyup.enter="search"
                      :maxlength="40"
                    />
                  </div>
                </div>
                <div class="col-3 col-md-4 col-lg-3 col-xl-2">
                  <button class="no-round-btn" style="height: 50px"
                          @click="search"
                  >
                    {{$t('search')}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {mapState} from 'vuex'
  import mixinCategory from '@/mixins/mixinCategory'
  import ImageHover from "@/components/ImageHover"

  export default {
    mixins: [mixinCategory],
    components: {
      ImageHover
    },
    data() {
      return {
        init_slideup: false,
        search_input: '',
        currency: 'tw'
      }
    },
    computed: {
      ...mapState('cart', {
        total: (state) => state.total,
        count: (state) => state.count
      }),
      ...mapState('membertoken', {
        has_token: (state) => state.has_token
      }),
      ...mapState('category', {
        categories: (state) => state.items
      }),
      ...mapState('brand', {
        brands(state) {
          let ret = []
          for (let item of state.items) {
            for (let child of item.children) {
              if (child.menu) {
                ret.push(child)
              }
            }
          }
          return ret
        }
      }),
      display_lang() {
        let lang_mapping = {
          'tw': '繁體中文',
          'en': 'English'
        }
        return lang_mapping[this.$store.state.lang]
      },
      computed_brands() {
        let ret = [...this.brands]
        if (ret.length > 20) {
          ret.length = 20
        }
        return ret
      },
      ...mapState('tag', {
        tags: (state) => state.items
      })
    },
    watch: {
      '$route.query': {
        handler(query) {
          if (query.k) {
            this.search_input = query.k
          } else {
            this.search_input = ''
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      currencyChange(val) {
        let ret = val * this.$store.state.price.item[this.$store.state.currency]
        return parseFloat(ret.toFixed(2))
      },
      logout() {
        this.$api.member.logout().then(() => {
          this.$cookies.set('token', null)
          this.$store.commit('membertoken/changeValue', {key: 'has_token', value: false})
          console.log('logout', this.$cookies.get('token'))
          this.$router.go(0)
        })
      },
      checkMoreDeeper(categories) {
        let status = true
        for (let cata of categories) {
          if (!cata.sub_categories.length) {
            status = false
            break
          }
        }
        return status
      },
      search() {
        this.$router.push(`/products?k=${this.search_input.trim()}`)
      },
      change_locale(lang) {
        this.$cookies.set('lang', lang)
        this.$router.go()
      },
      change_currency(currency) {
        this.$cookies.set('currency', currency)
        this.currency = currency
        this.$router.go()
      },
      share(social) {
        const webTitle = `EZGO`,
          webUrl = location.href
        window.open('https://www.addtoany.com/add_to/' + social + '?linkurl=' + webUrl + '&amp;linkname=' + encodeURI(webTitle))
      },
    },
    created() {
      this.currency = this.$cookies.get('currency') || 'tw'
      // todo scroll 功能拿掉
      // if (process.client) {
      //   $(window).scroll(function () {
      //     if ($(this).scrollTop() > 54) {          /* 要滑動到選單的距離 */
      //       $('.navigation').addClass('fix-navigation')   /* 幫選單加上固定效果 */
      //       $('.navigation-clone').addClass('clone-visible')
      //     } else {
      //       $('.navigation').removeClass('fix-navigation') /* 移除選單固定效果 */
      //       $('.navigation-clone').removeClass('clone-visible')
      //     }
      //   })
      // }
      // if (process.client) {
      //   $(window).scroll(function () {
      //     if ($(this).scrollTop() > 0) {          /* 要滑動到選單的距離 */
      //       $('#mobile-menu').addClass('fix-navigation')   /* 幫選單加上固定效果 */
      //       $('.mobile-menu-clone').addClass('clone-visible')
      //     } else {
      //       $('#mobile-menu').removeClass('fix-navigation') /* 移除選單固定效果 */
      //       $('.mobile-menu-clone').removeClass('clone-visible')
      //     }
      //   })
      // }
    }
  }
</script>
<style lang="sass">

</style>
