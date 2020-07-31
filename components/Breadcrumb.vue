<template>
  <div class="ogami-breadcrumb">
    <div class="container">
      <ul>
        <li>
          <nuxt-link class="breadcrumb-link" to="/">
            <i class="fas fa-home"></i>{{ first[0]==='$'?$t(first.substring(1)):first }}
          </nuxt-link
          >
        </li>
        <li>
          <nuxt-link v-for="item of centers" class="breadcrumb-link" :to="item.url" :key="item.name">{{
            getText(item,'name','en_name')
            }}
          </nuxt-link>
        </li>
        <li>
          <a class="breadcrumb-link active" href="">{{ end }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import langMixin from "@/mixins/langMixin"

  export default {
    mixins: [langMixin],
    name: 'Breadcrumb',
    props: {
      first: {
        type: String,
        default: '$index'
      },
      centers: {
        type: Array,
        default: () => []
      },
      end: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
  }
</script>

<style scoped></style>
