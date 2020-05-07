<template>
  <div class="col-6 col-sm-4 col-default-5 mb-20px">
    <nuxt-link class="department-link"
               :to="getSubLink(item)"
               style="display: block; max-width: 100%"
    >
      <div class="function-box">
        <img :src="src" alt=""/>

        <div class="content">{{ title }}</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  import mixinCategory from '@/mixins/mixinCategory'

  export default {
    mixins: [mixinCategory],
    name: 'FunctionBox',
    props: {
      title: {
        type: String,
        default: ''
      },
      src: {
        type: String,
        default: ''
      },
      item: {
        type: Object,
        default: null,
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  @media (min-width: 768px) {
    .col-default-5 {
      flex: 0 0 20%;
      max-width: 20%;
      padding-right: 15px;
      padding-right: 15px;
    }
  }

  .function-box {
    min-width: 150px;
    max-width: 100%;
    height: 200px;
    border: solid 1px #ebebeb;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .function-box:hover {
    border: 0px solid transparent;
    box-shadow: 0px 20px 32px 0 rgba(53, 78, 84, 0.15);
    z-index: 20;
  }

  .function-box:hover .content {
    color: #88c749;
  }

  .function-box .content {
    width: 100%;
    height: 47px;
    justify-content: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 26px;
  }
</style>
