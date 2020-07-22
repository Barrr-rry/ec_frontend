<template>
  <div class="shop-sidebar_price-filter">
    <div class="price-filter_top mini-tab-title underline">
      <h2 class="title">{{$t('price_filter')}}</h2>
    </div>
    <div class="price-filter_bottom">
      <p>
        <label for="amount">{{$t('price_filter_bottom')}}:</label>
      </p>

      <div class="filter-group ">
        <input
          id="amount"
          type="text"
          readonly=""
          class=""
          style="width: 120px"
        />
        <button class="normal-btn" @click="toPriceFilter">{{$t('filter')}}</button>
      </div>
      <div id="slider-range"></div>
      <div class="d-flex align-items-center mt-20px">
        <input
          v-model="price_0"
          class="normal-h p0 border-input no-round-input no-border"
          type="number"
        />
        <div class="mr-20px ml-20px">-</div>
        <input
          v-model="price_1"
          class="normal-h p0 border-input no-round-input no-border "
          type="number"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'PriceFilter',
    data() {
      return {
        price_0: 0,
        price_1: 0,
        slider: null,
      }
    },
    computed: {
      ...mapState('product', {
        page_info: state => state.items
      }),
    },
    watch: {
      price_0() {
        this.slider_render()
        $('#slider-range').slider({values: [this.price_0, this.price_1]})

      },
      price_1() {
        this.slider_render()
        $('#slider-range').slider({values: [this.price_0, this.price_1]})
      }
    },
    mounted() {
      const self = this
      // 取得最高價錢 以及最低價錢
      this.price_0 = this.$route.query.min_price || this.page_info.min_price
      this.price_1 = this.$route.query.max_price || this.page_info.max_price
      // jquery 套件寫法
      this.slider = $('#slider-range').slider({
        range: true,
        min: this.page_info.min_price,
        max: this.page_info.max_price,
        classes: {
          'ui-slider': 'slider-bar',
          'ui-slider-range': 'range-bar',
          'ui-slider-handle': 'handle'
        },
        values: [this.price_0, this.price_1],
        slide(event, ui) {
          self.price_0 = ui.values[0]
          self.price_1 = ui.values[1]
          $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1])
        }
      })

      this.slider_render()
    },
    methods: {
      toPriceFilter() {
        this.$router.push({
          path: this.$route.path,
          query: {...this.$route.query, min_price: this.price_0, max_price: this.price_1, o: 0}
        })
      },
      slider_render() {
        // 不同組件 透過這樣方式更改文字
        $('#amount').val('$' + this.price_0 + ' - $' + this.price_1)
      }
    }
  }
</script>

<style scoped></style>
