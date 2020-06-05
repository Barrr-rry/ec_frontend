<template>
  <div>
    <footer style="margin-top: 100px">
      <div class="bg-green" style="height: 350px; padding-top: 50px">
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-sm-12 col-md-6 text-sm-center text-md-left footer-left"
            >
              <div class="footer-logo">
                <a href="/"></a>
                <!-- <nuxt-link to="/"
                  ><img src="" alt=""
                /></nuxt-link> -->
              </div>
              <div class="footer-contact">
                <a href="tel:0907306899" class="normal-a"><p>{{$t('phone')}}: 0907306899</p></a>
                <a href="mailto:Ezgobuyusa@gmail.com" class="normal-a"><p>Email: Ezgobuyusa@gmail.com</p></a>
              </div>
              <div class="footer-social">
                <a class="" href=""><i class="fab fb" @click="share('facebook')"></i></a>
                <a class="" href=""><i class="fab line-icon" @click="share('line')"></i></a>
                <a class="" href=""><i class="fab twitter" @click="share('twitter')"></i></a>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 foot-right">
              <div class="row">
                <div
                  class="col-12 col-sm-4 text-sm-center text-md-left footer-margin"
                >
                  <FooterQuickLink title="會員中心">
                    <nuxt-link to="/delivery-instructions"
                    >我的帳戶
                    </nuxt-link>
                    <nuxt-link to="/terms">我的最愛</nuxt-link>
                    <nuxt-link to="/rewards">訂單查詢</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-sm-center text-md-left footer-margin"
                >
                  <FooterQuickLink title="訂單資訊">
                    <nuxt-link to="/member-centre">尺寸表</nuxt-link>
                    <nuxt-link to="/wishlist">條款與細則</nuxt-link>
                    <nuxt-link to="/ordertracking">商業合作</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-sm-center text-md-left footer-margin"
                >
                  <FooterQuickLink title="訂購資訊">
                    <nuxt-link to="/privacy-statement">配送與換貨說明</nuxt-link>
                  </FooterQuickLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fooer-bottom-box d-flex justify-content-center">
          <img class="payment-method" src="/images/webs/visa.svg" alt=""/>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import FooterQuickLink from '@/components/FooterQuicklink'

  export default {
    components: {
      FooterQuickLink
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
</style>
