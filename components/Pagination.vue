<template>
  <div class="shop-pagination mt-60px">
    <ul>
      <li v-if="!pages.includes(1)">
        <button class="no-round-btn smooth">
          <i class="arrow_carrot-2left"></i>
        </button>
      </li>
      <li v-if="page_input>1">
        <button class="no-round-btn smooth" @click="input=input-1">
          <i class="arrow_carrot-left"></i>
        </button>
      </li>
      <li v-for="page of pages" :key="page">
        <button class="no-round-btn smooth"
                :class="page===page_input?'active':''"
                :style="{marginRight: page===pages[pages.length-1]?``:'5px'}"
                @click="input=page"
        >{{page}}
        </button>
      </li>
      <li v-if="page_input<total">
        <button class="no-round-btn smooth"
                @click="input=input+1"
        >
          <i class="arrow_carrot-right"></i>
        </button>
      </li>
      <li v-if="!pages.includes(total)">
        <button class="no-round-btn smooth" @click="input=total">
          <i class="arrow_carrot-2right"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import vModel from "@/mixins/vModel"
  /**
   * 目前似乎看到沒有人用 也許是多做的 在沒有人用有空可以刪掉
   * */

  export default {
    mixins: [vModel],
    name: "Pagination",
    props: {
      total: {
        type: Number,
        default: 1
      },
    },
    computed: {
      page_input() {
        if (this.input > this.total) {
          return this.total
        }
        if (this.input < 1) {
          return 1
        }
        return this.input
      },
      pages() {
        // 計算總共有多少個頁面
        let input = this.page_input
        let ret = [input]
        let small_input = input - 1
        let high_input = input + 1
        let firstCount = 0
        while (ret.length < 9) {
          if (small_input >= 1 && firstCount < 4) {
            firstCount += 1
            ret.unshift(small_input)
            small_input -= 1
          } else if (high_input <= this.total) {
            ret.push(high_input)
            high_input += 1
          } else if (small_input >= 1) {
            ret.unshift(small_input)
            small_input -= 1
          } else {
            return ret
          }
        }
        return ret
      }
    },
    created() {
    }
  }
</script>

<style scoped>

</style>