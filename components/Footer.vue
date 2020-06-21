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
                  <FooterQuickLink title="會員中心">
                    <nuxt-link to="/delivery-instructions"
                    >我的帳戶
                    </nuxt-link>
                    <nuxt-link to="/wishlist">我的最愛</nuxt-link>
                    <nuxt-link to="/rewards">訂單查詢</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-md-left footer-margin"
                >
                  <FooterQuickLink title="訂單資訊">
                    <nuxt-link to="/member-centre">尺寸表</nuxt-link>
                    <nuxt-link to="/terms">條款與細則</nuxt-link>
                    <nuxt-link to="/for-business">商業合作</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-md-left footer-margin"
                >
                  <FooterQuickLink title="訂購資訊">
                    <nuxt-link to="/privacy-statement">配送與換貨說明</nuxt-link>
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
        const webTitle = `EZGO`,
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
