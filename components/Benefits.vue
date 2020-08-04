<template>
  <div class="benefit-block">
    <div class="container">
      <div class="our-benefits">
        <div class="row m0">
          <div class="col-12 col-md-4 p0">
            <!--            todo terms.html-->
            <div
              class="pointer benefit-detail d-flex flex-column align-items-center"
              @click="$router.push('/delivery-instructions')"
              @mouseover="d_hover = true"
              @mouseleave="d_hover = false"
            >
              <img
                class="benefit-img icon-size"
                src="images/webs/benefit1.svg"
                alt=""
              />
              <p class="benefit-title " v-if="!d_hover">{{$t('free_shipping')}}</p>
              <p class="benefit-title " v-if="d_hover" style="font-size: 105%">{{$t('free_shipping')}}</p>
              <p class="benefit-describle pt-0px" v-if="!d_hover">
                {{$t('free_shipping_fake_value')}}
              </p>
              <p class="benefit-describle pt-0px" v-if="d_hover" style="font-size: 105%">
                {{$t('free_shipping_fake_value')}}
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p0"
               @click="$router.push('/coupon')"
               @mouseover="c_hover = true"
               @mouseleave="c_hover = false"
          >
            <div
              class="pointer benefit-detail d-flex flex-column align-items-center"
            >
              <img
                class="benefit-img icon-size"
                src="images/webs/benefit2.svg"
                alt=""
              />
              <p class="benefit-title " v-if="!c_hover">{{$t('size_chart')}}</p>
              <p class="benefit-title " v-if="c_hover" style="font-size: 105%">{{$t('size_chart')}}</p>
              <p class="benefit-describle pt-0px">
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p0"
               @click="$router.push('/rewards')"
               @mouseover="r_hover = true"
               @mouseleave="r_hover = false"
          >
            <div
              class="pointer benefit-detail boderless d-flex flex-column align-items-center"
            >
              <img
                class="benefit-img icon-size"
                src="images/webs/benefit3.svg"
                alt=""
              />
              <p class="benefit-title " v-if="!r_hover">{{$t('loyalty_reward')}}</p>
              <p class="benefit-title " v-if="r_hover" style="font-size: 105%">{{$t('loyalty_reward')}}</p>
              <p class="benefit-describle pt-0px" v-if="!r_hover">
                {{$t('loyalty_reward_fake_value')}}
              </p>
              <p class="benefit-describle pt-0px" v-if="r_hover" style="font-size: 105%">
                {{$t('loyalty_reward_fake_value')}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Benefits',
    data() {
      return {
        c_hover: false,
        d_hover: false,
        r_hover: false,
      }
    },
  }
</script>

<style scoped></style>
