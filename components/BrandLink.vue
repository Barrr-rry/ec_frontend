<template>
  <div class="col-6 col-md-4 col-lg-4 col-xl-4 p0 mb20px">
    <div class="d-flex align-items-center">
      <div class="box"></div>
      <nuxt-link class="brand-link department-link" :to="`/products?b=${id}`">{{ title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BrandLink',
    props: {
      id: {
        type: Number,
        default: null
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped></style>
