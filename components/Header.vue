<template>
  <header v-if="computed_brands.length&&categories.length">
    <div id="mobile-menu">
      <div class="mobile-menu--msg">
        All prices are in TWD. {{getText(homeactivity)}}
      </div>
      <div class="mobile-menu--tools">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="mobile-menu_block d-flex align-items-center">
                <a class="mobile-menu--control" href="#"><i class="fas fa-bars"></i></a>
                <div id="ogami-mobile-menu">
                  <button id="mobile-menu--closebtn" class="no-round-btn">
                    {{$t('close_menu')}}
                  </button>
                  <div class="mobile-menu_items">
                    <ul class="mb-0 d-flex flex-column">
                      <li class="toggleable" v-for="cata of categories.slice().reverse()" :key="cata.id">
                        <nuxt-link :to="`/products?c=${cata.id}`" class="menu-item">
                          {{ getText(cata,'name','en_name') }}
                        </nuxt-link>
                        <span class="sub-menu--expander"><i class="icon_plus"></i></span>
                        <ul class="sub-menu">
                          <li>
                            <nuxt-link to="/products">
                              全部商品
                            </nuxt-link>
                          </li>
                          <li v-for="sub of cata.sub_categories.slice().reverse()" :key="sub.id">
                            <nuxt-link :to="getSubLink(sub)">{{
                              getText(sub,'name','en_name')
                              }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </li>

                      <li class="toggleable">
                        <a href="#" class="menu-item" disabled>
                          {{$t('member_center')}}
                        </a>
                        <span class="sub-menu--expander"><i class="icon_plus"></i></span>
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
                        <nuxt-link class="menu-item" to="/about-us">{{$t('about_us')}}
                        </nuxt-link>
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
                        <a class="menu-item" href="#" disabled>{{display_lang}}</a><span class="sub-menu--expander"><i
                            class="icon_plus"></i></span>

                        <!--                      <ul class="sub-menu">-->
                        <!--                        <li @click="change_locale('tw')"><a href="#">{{$t('Chinese')}}</a></li>-->
                        <!--                        <li @click="change_locale('en')"><a href="#">English</a></li>-->
                        <!--                      </ul>-->
                      </li>
                      <li class="toggleable">
                        <a class="menu-item" href="# " disabled>{{$t('currency')}}</a><span
                          class="sub-menu--expander"><i class="icon_plus"></i></span>

                        <ul class="sub-menu">
                          <li @click="change_currency('tw')"><a href="#">{{$t('ntdoller')}} NTD</a></li>
                          <li @click="change_currency('en')"><a href="#">{{$t('usdoller')}} USD</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div class="mobile-social">
                    <a href="https://www.facebook.com/HaveFunUnderwear/" target="_blank"><i class="fab fa-facebook-f">
                      </i></a>
                    <a href="https://line.me/ti/p/1qvbcczVSW" target="_blank"><i class="fab fa-line"> </i></a>
                    <a href=""><i class="fab fa-twitter" @click="share('twitter')"></i></a>
                  </div>
                </div>
                <div class="ogamin-mobile-menu_bg"></div>
              </div>
            </div>
            <!--<div class="col-6">
              <div
                class="mobile-menu_logo text-center d-flex justify-content-center align-items-center"
              >
                <a href="/"></a>
                <nuxt-link to="/"
                ><img src="" alt=""
                /></nuxt-link>
              </div>
            </div>-->
            <div class="col-9">
              <div class="mobile-product_function d-flex align-items-center justify-content-end">

                <nuxt-link class="function-icon pl-0px" to="/wishlist"><i class="icon-heart-heart" />
                </nuxt-link>
                <nuxt-link class="function-icon shopping-cart-icon pl-0px ml-15px" to="/shop-cart">
                  <span class="badge badge-notify" v-if="count">{{count}}</span>
                </nuxt-link>
                <div class="login d-flex" v-if="!has_token">
                  <nuxt-link to="/login"><i class="fas fa-user"></i></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-block d-flex align-items-center">
      <div class="container header-white">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="header-left d-flex flex-md-row align-items-center fill-height">
              All prices are in TWD. {{getText(homeactivity)}}
            </div>
          </div>
          <div class="col-12 col-md-7">
            <div class="header-right d-flex flex-md-row justify-content-end align-items-center">
              <div class="social-link d-flex">
                <a href="https://instagram.com/havefununderwear?igshid=1h6m3t1mr119a" class="social-link--item" target="_blank" ><i
                    class="social-ig"></i></a>
                <a href="https://twitter.com/HaveFunWear" class="social-link--item" target="_blank"><i class="social-twi" ></i></a>
                <a href="https://lin.ee/nZxbkLQ" class="social-link--item" target="_blank"><i class="social-line" ></i></a>
                <a href="https://www.facebook.com/HaveFunUnderwear/" class="social-link--item" target="_blank" ><i
                    class="social-fb"></i></a>
                <!--

                <ImageHover
                  src="/images/webs/ig-origin.svg"
                  hover="/images/webs/ig-hover.svg"
                />
                <ImageHover
                  src="/images/webs/twi-origin.svg"
                  hover="/images/webs/twi-hover.svg"
                />
                <ImageHover
                  src="/images/webs/line-origin.svg"
                  hover="/images/webs/line-hover.svg"
                />
                <ImageHover
                  src="/images/webs/fb-origin.svg"
                  hover="/images/webs/fb-hover.svg"
                />
                -->
                <!--                <a href="https://www.facebook.com/%E6%B1%B4%E5%88%A9%E8%B3%BC-Ezgo-107385547368839/" target="_blank"><i-->
                <!--                  class="fab fa-facebook-f"> </i></a>-->
                <!--                <a href="https://line.me/ti/p/1qvbcczVSW" target="_blank"><i class="fab fa-line"> </i></a>-->
                <!--                <a href=""><i class="fab fa-twitter" @click="share('twitter')"></i></a>-->
              </div>
              <div class="language">
                <!--
                  <div class="selected-language">
                  {{display_lang}}<i class="arrow_carrot-down"></i>
                  <ul class="list-language">
                    <li class="hover-li" @click="change_locale('tw')">{{$t('Chinese')}}</li>
                    <li class="hover-li" @click="change_locale('en')">English</li>
                  </ul>
                </div>
                -->
                <div class="selected-language">
                  <i class="icon-globle" />
                  <span @click="change_locale('tw')" class="hover-b">中</span> /
                  <span @click="change_locale('en')" class="hover-b">English</span>
                </div>
              </div>
              <nuxt-link class="function-icon mr-10px hover-effect" to="/wishlist" id="wishlist">
                <i class="icon icon-heart-heart" />
              </nuxt-link>
              <div class="language">
                <div class="selected-language">
                  <nuxt-link to="/shop-cart" class="normal-a d-flex hover-effect"><i class="icon shopping-cart-icon"></i>
                    <span class="badge badge-notify" v-if="count">{{count}}</span>
                  </nuxt-link>
                </div>
              </div>
              <div class="login d-flex hover-effect" v-if="!has_token">
                <nuxt-link to="/login"><i class="icon fas fa-user"></i>
                </nuxt-link>
                <a class="txt pointer" href="/login">{{$t('login')}}</a>
              </div>
              <div class="login d-flex hover-effect" v-else>
                <nuxt-link to="/member-centre""><i class="icon fas fa-user"></i>
                </nuxt-link>
                <a class="txt pointer" @click="logout">{{$t('logout')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-only-logo d-flex justify-content-center">
      <nuxt-link to="/"><img src="/images/webs/logo.svg" alt=""></nuxt-link>
    </div>
    <nav class="navigation d-flex align-items-center nav-shadow">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="navgition-menu d-flex align-items-center justify-content-center">
              <ul class="mb-0 d-flex justify-content-between fill-width">

                <li v-for="cata of categories.slice().reverse()" :key="cata.id" class="toggleable">
                  <nuxt-link :to="`/products?c=${cata.id}`" style="font-family: NotoSansTC-Regular;
                                                                   font-size: 16px;
                                                                   color: #252525;
                                                                   line-height: 1;
                                                                   display: inline-block;
                                                                   transition: 0.3s ease;
                                                                   text-transform: uppercase;"
                    v-if="checkMoreDeeper(cata.sub_categories)">
                    {{ getText(cata,'name','en_name') }}
                  </nuxt-link>
                  <nuxt-link :to="`/products?c=${cata.id}`" class="menu-item" v-else>
                    {{ getText(cata,'name','en_name') }}
                  </nuxt-link>
                  <template v-if="checkMoreDeeper(cata.sub_categories)">
                    <div class="d-flex nav-columns">
                      <div class="nav-column" v-for="sub of cata.sub_categories" :key="sub.id">
                        <h2>{{getText(sub,'name','en_name')}}}</h2>
                <li v-for="sub_sub of sub.sub_categories">
                  <nuxt-link :to="getSubLink(sub_sub)">
                    {{
                    getText(sub_sub,'name','en_name')
                    }}
                  </nuxt-link>
                </li>
            </div>
          </div>
</template>
<template v-else>
  <ul class="sub-menu shop">
    <div class="nav-column">
      <li>
        <nuxt-link to="/products">
          全部商品
        </nuxt-link>
      </li>
      <li v-for="sub of cata.sub_categories.slice().reverse()" :key="sub.id">
        <nuxt-link :to="getSubLink(sub)">{{
          getText(sub,'name','en_name')
          }}
        </nuxt-link>
      </li>
    </div>
  </ul>
</template>
</li>
</ul>
</div>
</div>
<div class="col-2">
  <div class="product-function d-flex align-items-center justify-content-end">
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

<div class="mobile-menu-clone"></div>
<div class="navigation-filter mt-40px" v-if="$route.name!=='index'">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-4 col-xl-3 order-2 order-md-1">
        <div class="department-menu_block">
          <div class="department-menu d-flex justify-content-between align-items-center white-color">
            <i class="fas fa-bars"></i>{{$t('chose_buy')}}<span><i class="arrow_carrot-down"></i></span>
          </div>
          <div v-show="init_slideup" class="department-dropdown-menu">
            <ul>
              <li v-for="tag of tags" :id="tag.id">
                <nuxt-link :to="`/products?t=${tag.id}`">{{getText(tag,'name','en_name')}}</nuxt-link>
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
                <input :placeholder="$t('please_input_brand_or_prodcut_name')" class="no-round-input no-border"
                  type="text" v-model="search_input" @keyup.enter="search" :maxlength="40" />
              </div>
            </div>
            <div class="col-3 col-md-4 col-lg-3 col-xl-2">
              <button class="no-round-btn" style="height: 50px" @click="search">
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
  import { mapState } from 'vuex'
  import mixinCategory from '@/mixins/mixinCategory'
  import ImageHover from "@/components/ImageHover"
  import langMixin from "@/mixins/langMixin"

  export default {
    mixins: [langMixin, mixinCategory],
    components: {
      ImageHover
    },
    data() {
      return {
        init_slideup: false,
        search_input: '',
        currency: 'tw',
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
      ...mapState('homeactivity', {
        homeactivity: (state) => state.items[0]
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
          if (this.$route.fullPath.indexOf('en') == 1) {
            this.$cookies.set('lang', 'en')
          }
          else if (this.$route.fullPath.indexOf('tw') == 1) {
            this.$cookies.set('lang', 'tw')
          }
          // 更新search input
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
        // 計算價錢金額
        let ret = val * this.$store.state.price.item[this.$store.state.currency]
        return parseFloat(ret.toFixed(2))
      },
      logout() {
        // 登出後要更新token為null 並且重新整理
        this.$api.member.logout().then(() => {
          this.$cookies.set('token', null)
          this.$store.commit('membertoken/changeValue', { key: 'has_token', value: false })
          console.log('logout', this.$cookies.get('token'))
          this.$router.go(0)
        })
      },
      checkMoreDeeper(categories) {
        // 找尋深層的category
        let status = true
        for (let cata of categories) {
          if (!cata.sub_categories.length) {
            status = false
            break
          }
        }
        console.log(categories, status)
        return status
      },
      search() {
        // 更新頁面 實際抓頁面的search 是在product
        this.$router.push(`/products?k=${this.search_input.trim()}`)
      },
      change_locale(lang) {
        // 更新lang 並且重新整理 因為語言已經事先init 好了
        this.$cookies.set('lang', lang)
        this.$router.go()
      },
      change_currency(currency) {
        // 更新currency 並且重新整理 因為currency已經事先init 好了
        this.$cookies.set('currency', currency)
        this.currency = currency
        this.$router.go()
      },
      share(social) {
        // 用第三方套件share fb, line ...etc
        const webTitle = `HaveFun Men’s Underwear`,
          webUrl = location.href
        window.open('https://www.addtoany.com/add_to/' + social + '?linkurl=' + webUrl + '&amp;linkname=' + encodeURI(webTitle))
      },
    },
    created() {
      if (process.client) {
        // todo 應該刪除掉 最後不是在這邊檢查瀏覽器
        var getExplorer = (function () {
          var explorer = window.navigator.userAgent,
            compare = function (s) {
              return (explorer.indexOf(s) >= 0);
            },
            ie11 = (function () {
              return ("ActiveXObject" in window)
            })();
          if (compare("MSIE") || ie11) {
            return 'ie';
          } else if (compare("Firefox") && !ie11) {
            return 'Firefox';
          } else if (compare("Chrome") && !ie11) {
            return 'Chrome';
          } else if (compare("Opera") && !ie11) {
            return 'Opera';
          } else if (compare("Safari") && !ie11) {
            return 'Safari';
          }
        })()
        if (getExplorer == 'ie') {
          alert('使用當前瀏覽器可能會不相容，為了更好的瀏覽體驗，推薦使用 Google 瀏覽器\n')
          window.location = "https://www.google.com.tw/chrome/"
        }
        console.log('Explorer:' + getExplorer)
      }
      this.currency = this.$cookies.get('currency') || 'tw'
    }
  }
</script>
<style lang="sass">
  .hover-b
    &:hover
      font-weight: bold

  .hover-effect
    .icon,.txt
      transition: all .5s ease
    &:hover
      .icon
        transform: scale(1.1) translateY(-2px)

        &.shopping-cart-icon
          transform: scale(1.1) translateY(2px)

      .txt
        transform: translateY(-2px)
</style>