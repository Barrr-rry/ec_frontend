import {mapState} from 'vuex'

export default {
  computed: {
    // 很多都會用到config setting 這個mixin 可以少寫很多重複的config setting
    ...mapState('configsetting', {
      configsetting: state => state.item
    }),
  },
}
