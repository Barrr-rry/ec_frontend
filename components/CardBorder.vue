<template>
  <div ref="self" class="card-border">
    <div v-if="title" class="card-border-header relative">
      {{ title }}
    </div>
    <div class="card-border-content">
      <div class="relative">
        <div class="right-btn">
          <button
            @click="$emit('delete',close_self)"
            v-if="closeBtn"
            class="close no-round-btn ml-10px"
          >
            <i class="icon_close"></i>
          </button>
          <button
            @click="$emit('edit')"
            v-if="editBtn"
            class="close no-round-btn"
          >
            <i class="edit-icon"></i>
          </button>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardBorder',
    props: {
      title: {
        type: String,
        default: ''
      },
      closeBtn: {
        type: Boolean,
        default: false
      },
      editBtn: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close_self() {
        if (process.client) {
          window.$(this.$refs.self).slideToggle()
        }
      }
    }
  }
</script>

<style scoped></style>
