<template>
  <modal v-model="input" :title="$t('ac_no')" @ok="ok">
    <div>{{$t('no_verification')}}</div>
  </modal>
</template>

<script>
  import vModel from "@/mixins/vModel"
  import {mapState} from 'vuex'

  export default {
    mixins: [vModel],
    components: {},
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapState('member', {
        myself: state => state.item
      }),
    },
    watch: {},
    methods: {
      ok() {
        this.$api.member.register_resend({validate_code: this.myself.validate_code}).then(() => {
          this.input = false
        })
      },
    }
  }
</script>

<style scoped></style>
