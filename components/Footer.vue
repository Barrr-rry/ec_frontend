<template>
  <div>
    <footer style="margin-top: 100px">
      <div class="bg-green inner-padding">
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-sm-12 col-md-4 text-sm-center text-md-left footer-left"
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
            <div class="col-md-8 foot-right">
              <div class="row">
                <div
                  class="col-12 col-sm-4 text-sm-center text-md-left footer-margin"
                >
                  <FooterQuickLink :title= "$t('ordering_information')">
                    <nuxt-link to="/delivery-instructions"
                      >{{$t('delivery_instructions')}}
                    </nuxt-link>
                    <nuxt-link to="/terms">{{$t('company_terms')}}</nuxt-link>
                    <nuxt-link to="/rewards">{{$t('loyalty_reward')}}</nuxt-link>
                    <nuxt-link to="/faq">{{$t('common_problem')}}</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-sm-center text-md-left footer-margin"
                >
                  <FooterQuickLink :title="$t('member_center')">
                    <nuxt-link to="/member-centre">{{$t('my_account')}}</nuxt-link>
                    <nuxt-link to="/wishlist">{{$t('my_favourite')}}</nuxt-link>
                    <nuxt-link to="/ordertracking">{{$t('order_record')}}</nuxt-link>
                  </FooterQuickLink>
                </div>
                <div
                  class="col-12 col-sm-4 text-sm-center text-md-left footer-margin"
                >
                  <FooterQuickLink :title="$t('other_information')">
                    <nuxt-link to="/privacy-statement">{{$t('privacy_statement')}}</nuxt-link>
                    <nuxt-link to="/coupon">{{$t('coupon')}}</nuxt-link>
                  </FooterQuickLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-credit">
        <div class="container">
          <div class="author-footer row">
            <p
              class="left col-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-start l-footer__footer"
            >
              <span class="color1">© EZGO {{$t('company_name')}}</span>
            </p>
            <div
              class="right col-12 col-md-5 d-flex justify-content-center justify-content-md-end"
            >
              <img class="payment-method" src="/images/webs/visa.svg" alt="" />
            </div>
          </div>
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
