<template>
  <div :class="{ show: value }" @click.self="close()" class="modal fade">
    <div :style="computed_width" class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title mb-0px">{{ title }}</h3>
          <button class="close no-round-btn">
            <i @click="close()" class="icon_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button @click="close()" type="button" class="no-round-btn white">
              {{$t('cancel')}}
            </button>
            <button @click="ok()" type="button" class="no-round-btn">
              {{$t('ok')}}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      width: {
        type: [String, Number],
        default: 500
      }
    },
    computed: {
      computed_width() {
        return {
          maxWidth: this.width === 0 ? '100%' : `${this.width}px`,
          width: this.width === 0 ? 'auto' : `100%`
        }
      }
    },
    watch: {
      value(val) {
        this.$emit('input', val)
      }
    },
    methods: {
      ok() {
        this.$emit('ok')
      },
      close() {
        this.$emit('input', false)
      }
    }
  }
</script>

<style scoped>
  .show {
    display: block;
    opacity: 1;
  }

  .modal:not(.show) {
    display: none;
  }

  .modal {
    background-color: rgba(0, 0, 0, 0.5);
  }

  button:focus {
    outline: none;
  }

  .close {
    margin: 0px;
    padding: 0px;
  }

  .modal.fade .modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  }

  .modal.fade.show .modal-dialog {
    transform: translateX(-50%) translateY(-50%);
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  }
</style>
