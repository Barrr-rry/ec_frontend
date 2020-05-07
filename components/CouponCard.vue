<template>
  <div class="mb-50px">
    <div class="coupon-card d-flex relative">
      <div v-if="!item.status" class="coupon-finish">
        <h2 class="fill-width text-align-center">{{$t('coupon_over')}}</h2>
      </div>
      <div class="d-flex flex-wrap fill-width">
        <div class="left">
          <img
            :src="imageLink(item.image_url)"
            alt=""/>
        </div>
        <div class="right flex-grow-1">
          <h3 class="text-align-center mb-10px">{{item.title}}</h3>
          <div class="text-align-center">
            <span class="">{{$t('over')}}</span>
            <span class="primary-color">{{item.role}}</span>
            {{$t('doller_disc')}}
            <span class="primary-color">{{item.discount}}</span>
            <span v-if="item.method===2">%</span>
            <span v-else>{{$t('doller')}}</span>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <h2 class="primary-color copon-code">{{item.discount_code}}</h2>
            <input ref="discount_code" type="hidden" :value="item.discount_code">
            <div class="button-box">
              <button class="special-coupon ml-15px" @click="copy">{{$t('copy')}}</button>
            </div>
          </div>
          <div class="text-align-center">
            {{item.start_time}} ~ {{item.end_time}}
          </div>
        </div>
      </div>
    </div>
    <h5 class="d-flex mycard-footer">{{$t('to_cart_write')}}</h5>
  </div>
</template>

<script>

  export default {
    name: 'Coupon',
    props: {
      item: {
        default: null,
        type: Object
      }
    },
    methods: {
      imageLink(path) {
        return this.$ax.baseURL.replace('/api/', '/media/') + path
      },
      copy() {
        this.$refs.discount_code.setAttribute('type', 'text') // 不是 hidden 才能複製
        this.$refs.discount_code.select()

        try {
          let successful = document.execCommand('copy');
          let msg = successful ? 'successful' : 'unsuccessful';
          this.$toast.success(this.$t('copy_coupon'))
        } catch (err) {
        }

        /* unselect the range */
        this.$refs.discount_code.setAttribute('type', 'hidden')
        if (process.client) {
          window.getSelection().removeAllRanges()
        }
      }
    },
  }
</script>

<style scoped></style>
