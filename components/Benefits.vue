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
            >
              <img
                class="benefit-img icon-size"
                src="images/webs/truck.svg"
                alt=""
              />
              <p class="benefit-title ">{{$t('free_shipping')}}</p>
              <p class="benefit-describle pt-0px">
                {{$t('free_shipping_fake_value')}}
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p0"
               @click="$router.push('/coupon')"
          >
            <div
              class="pointer benefit-detail d-flex flex-column align-items-center"
            >
              <img
                class="benefit-img icon-size"
                src="images/webs/coupon.svg"
                alt=""
              />
              <p class="benefit-title ">{{$t('coupon')}}</p>
              <p class="benefit-describle pt-0px">
                {{$t('coupon_fake_value')}}
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 p0"
               @click="$router.push('/rewards')"
          >
            <div
              class="pointer benefit-detail boderless d-flex flex-column align-items-center"
            >
              <img
                class="benefit-img icon-size"
                src="images/webs/award.svg"
                alt=""
              />
              <p class="benefit-title ">{{$t('loyalty_reward')}}</p>
              <p class="benefit-describle pt-0px">
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
    name: 'Benefits'
  }
</script>

<style scoped></style>
