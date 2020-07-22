<template>
  <div
    :class="{
      'counter-number-input--inline': inline,
      'counter-number-input--center': center,
      'counter-number-input--controls': controls,
      [`counter-number-input--${size}`]: size
    }"
    v-on="listeners"
    class="counter-number-input"
  >
    <button
      v-if="controls"
      :disabled="disabled || readonly || !decreasable"
      @click="decrease"
      class="counter-number-input__button counter-number-input__button--minus"
      type="button"
    ></button>
    <input
      ref="input"
      v-bind="attrs"
      :name="name"
      :value="currentValue"
      :min="min"
      :max="max"
      :step="step"
      :readonly="readonly || !inputtable"
      :disabled="disabled || (!decreasable && !increasable)"
      :placeholder="placeholder"
      @change="change"
      @paste="paste"
      class="counter-number-input__input"
      type="number"
      autocomplete="off"
    />
    <button
      v-if="controls"
      :disabled="disabled || readonly || !increasable"
      @click="increase"
      class="counter-number-input__button counter-number-input__button--plus"
      type="button"
    ></button>
  </div>
</template>

<script>
  let isNaN = Number.isNaN
  // process.client 是只有在client 端才有 用nuxt 需要增加這個if 判斷
  if (process.client) {
    isNaN = Number.isNaN || window.isNaN
  }
  const REGEXP_NUMBER = /^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/
  const REGEXP_DECIMALS = /\.\d*(?:0|9){10}\d*$/
  const normalizeDecimalNumber = (value, times = 100000000000) =>
    REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value
  export default {
    name: 'Counter',
    model: {
      event: 'change'
    },
    props: {
      attrs: {
        type: Object,
        default: undefined
      },
      center: {
        type: Boolean,
        default: true
      },
      controls: {
        type: Boolean,
        default: true
      },
      disabled: Boolean,
      inputtable: {
        type: Boolean,
        default: true
      },
      inline: {
        type: Boolean,
        default: true
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: 1
      },
      name: {
        type: String,
        default: undefined
      },
      placeholder: {
        type: String,
        default: undefined
      },
      readonly: Boolean,
      rounded: Boolean,
      size: {
        type: String,
        default: undefined
      },
      step: {
        type: Number,
        default: 1
      },
      value: {
        type: Number,
        default: NaN
      }
    },
    data() {
      return {
        currentValue: NaN
      }
    },
    computed: {
      /**
       * Indicate if the value is increasable.
       * @returns {boolean} Return `true` if it is decreasable, else `false`.
       */
      increasable() {
        const num = this.currentValue
        return isNaN(num) || num < this.max
      },
      /**
       * Indicate if the value is decreasable.
       * @returns {boolean} Return `true` if it is decreasable, else `false`.
       */
      decreasable() {
        const num = this.currentValue
        return isNaN(num) || num > this.min
      },
      /**
       * Filter listeners
       * @returns {Object} Return filtered listeners.
       */
      listeners() {
        const listeners = {...this.$listeners}
        delete listeners.change
        return listeners
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(newValue, oldValue) {
          if (
            // Avoid triggering change event when created
            !(isNaN(newValue) && typeof oldValue === 'undefined') &&
            // Avoid infinite loop
            newValue !== this.currentValue
          ) {
            this.setValue(newValue)
          }
        }
      }
    },
    methods: {
      /**
       * Change event handler.
       * @param {string} value - The new value.
       */
      change(event) {
        this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)))
      },
      /**
       * Paste event handler.
       * @param {Event} event - Event object.
       */
      paste(event) {
        let clipboardData = event.clipboardData
        // process.client 是只有在client 端才有 用nuxt 需要增加這個if 判斷
        if (process.client) {
          clipboardData = event.clipboardData || window.clipboardData
        }

        if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
          event.preventDefault()
        }
      },
      /**
       * Decrease the value.
       */
      decrease() {
        if (this.decreasable) {
          let {currentValue} = this
          if (isNaN(currentValue)) {
            currentValue = 0
          }
          this.setValue(
            Math.min(
              this.max,
              Math.max(this.min, normalizeDecimalNumber(currentValue - this.step))
            )
          )
        }
      },
      /**
       * Increase the value.
       */
      increase() {
        if (this.increasable) {
          let {currentValue} = this
          if (isNaN(currentValue)) {
            currentValue = 0
          }
          this.setValue(
            Math.min(
              this.max,
              Math.max(this.min, normalizeDecimalNumber(currentValue + this.step))
            )
          )
        }
      },
      /**
       * Set new value and dispatch change event.
       * @param {number} value - The new value to set.
       */
      setValue(value) {
        const oldValue = this.currentValue
        let newValue = this.rounded ? Math.round(value) : value
        if (this.min <= this.max) {
          newValue = Math.min(this.max, Math.max(this.min, newValue))
        }
        this.currentValue = newValue
        if (newValue === oldValue) {
          // Force to override the number in the input box (#13).
          this.$refs.input.value = newValue
        }
        this.$emit('change', newValue, oldValue)
      }
    }
  }
</script>
