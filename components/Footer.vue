<template>
  <div>
    <footer style="margin-top: 100px">
      <div class="bg-green pt-50px">
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-sm-12 col-md-12 col-lg-7 text-lg-left mb-0px-sm mb-40px-md mb-40px"
            >
              <div class="row">
                <div class="col-12 col-lg-4">
                  <nuxt-link to="/"><img src="/images/webs/logo.svg" class="logo" alt="" style="max-width: 195px;  width: 100%;"></nuxt-link>
                </div>
                <div class="col-12 col-lg-8">
                  <div class="social-media mt-50px ml-10px-md ml-10px-lg ml-0 mb-50px-sm mb-15px-md mb-0px">
                    <ImageHover
                      class="mr-10px"
                      src="/images/webs/ig.svg"
                      hover="/images/webs/ig-w.svg"
                    />
                    <ImageHover
                      class="mr-10px"
                      src="/images/webs/twitter.svg"
                      hover="/images/webs/twitter-w.svg"
                    />
                    <ImageHover
                      class="mr-10px"
                      src="/images/webs/line.svg"
                      hover="/images/webs/line-w.svg"
                    />
                    <ImageHover
                      class="mr-10px"
                      src="/images/webs/facebook.svg"
                      hover="/images/webs/facebook-w.svg"
                    />
                  </div>
                  <div class="desktop-copyright">
                    <div class="footer-copyright ml-10px mb-5px">
                      Copyright 2020 HaveFun Men's Underwear Inc.
                    </div>
                    <div class="footer-copyright ml-10px">
                      All rights reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 foot-right">
              <div class="row">
                <div
                  class="col-12 col-sm-4 text-md-left footer-margin"
                >
                  <FooterQuickLink :title="$t('member_center')">
                    <nuxt-link to="/member-centre">{{$t('member_center')}}
                    </nuxt-link>
                    <nuxt-link to="/wishlist">{{$t('my_favourite')}}</nuxt-link>
                    <nuxt-link to="/ordertracking">{{$t('order_record')}}</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-md-left footer-margin"
                >
                  <FooterQuickLink :title="$t('order_detail')">
                    <nuxt-link to="/member-centre">{{$t('size_t')}}</nuxt-link>
                    <nuxt-link to="/terms">{{$t('aaa')}}</nuxt-link>
                    <nuxt-link to="/for-business">{{$t('cac')}}</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-md-left footer-margin"
                >
                  <FooterQuickLink :title="$t('ordering_information')">
                    <nuxt-link to="/privacy-statement">{{$t('sas')}}</nuxt-link>
                  </FooterQuickLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fooer-bottom-box mt-40px">
          <div class="mobile-copyright text-center pt-30px pb-30px">
            <div class="footer-copyright ml-10px mb-5px">
              Copyright 2020 HaveFun Men's Underwear Inc.
            </div>
            <div class="footer-copyright ml-10px">
              All rights reserved.
            </div>
          </div>
          <div class="d-flex justify-content-center pb-50px pt-0px-sm pt-30px-md pt-0px">
            <img class="payment-method" src="/images/webs/visa.svg" alt=""/>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import FooterQuickLink from '@/components/FooterQuicklink'
  import ImageHover from "@/components/ImageHover"

  export default {
    components: {
      FooterQuickLink,
      ImageHover
    },
    data() {
      return {}
    },
    methods: {
      share(social) {
        // 判斷你是要share 到 FB...etc 透過第三方工具
        const webTitle = `HaveFun Men’s Underwear`,
          webUrl = location.href
        window.open('https://www.addtoany.com/add_to/' + social + '?linkurl=' + webUrl + '&amp;linkname=' + encodeURI(webTitle))
      },
    }
  }
</script>

<style>
  ul.list-language li {
    white-space: nowrap;
  }

  .bg-green {
    background: #0b1d37;
  }

  .inner-padding {
    padding: 50px 0;
  }

  footer .footer-contact p,
  footer .footer-quicklink a {
    color: #fff;
  }

  footer .logo{
    display: block;
    margin-left: auto;
    margin-right: auto;
    transform: translateX(10px)
  }

</style>
