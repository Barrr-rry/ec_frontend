<template>
  <div class="footer-quicklink">
    <div class="footer-quicklink__header">
      <!-- <div class="col-2"></div> -->
      <!-- <div class="col-8"></div> -->
      <div @click="changeHandler" class="footer-quicklink__header-item">
        {{ title }}
        <i :class="[plus_icon ? 'icon_plus' : 'icon_minus-06']"></i>
      </div>
    </div>
    <div ref="box" class="footer-quicklink__box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterQuicklink',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        plus_icon: true
      }
    },
    methods: {
      changeHandler() {
        if (process.client) {
          window.$(this.$refs.box).slideToggle()
        }
        this.plus_icon = !this.plus_icon
      }
    }
  }
</script>
