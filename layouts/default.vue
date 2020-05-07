<template>
  <div>
    <WishlistModal v-model="wishmodal"
    ></WishlistModal>
    <ShareModal
      v-model="default_sharemodal"
    />
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import {mapState, mapMutations} from 'vuex'
  import WishlistModal from "@/components/WishlistModal"
  import ShareModal from "@/components/ShareModal"

  export default {
    components: {
      Header,
      Footer,
      WishlistModal,
      ShareModal,
    },
    data() {
      return {
        wishmodal: false,
        default_sharemodal: false
      }
    },
    computed: {
      ...mapState('wishmodal', {
        model: state => state.model
      }),
      ...mapState('sharemodal', {
        sharemodal: state => state.model
      })
    },
    watch: {
      default_sharemodal(val) {
        if (!val) {
          this.resetWishModal()
        }
      },
      sharemodal(val) {
        this.default_sharemodal = val
        if (!val) {
          this.resetWishModal()
        }
      },
      model(val) {
        this.wishmodal = val
      }
    },
    methods: {
      ...mapMutations('sharemodal', ['initWishModal', 'resetWishModal']),
    }
  }
</script>
