/**
 *
 * */
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('memberwish', {
      ids: state => state.ids
    }),
    wish_active() {
      return this.ids.includes(this.product.id)
    },
  },
  methods: {
    toWish() {
      let values = {
        product: this.product.id,
      }
      this.$api.memberwish.postData(values).then((res) => {
        let ids = [...this.ids]
        if (res.data.status === 'create') {
          ids.push(this.product.id)
          this.$toast.success(this.$t('to_wish'))
        } else {
          ids = ids.filter((x) => x !== this.product.id)
          this.$toast.success(this.$t('del_wish'))
        }
        this.$store.commit('memberwish/changeValue', {key: 'ids', value: ids})
        // this.$toast.success(res.data.msg)
      }).catch(() => {
        this.$router.push({path: '/login'})
      })
    }
  }
}
