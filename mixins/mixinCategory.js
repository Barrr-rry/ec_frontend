export default {
  methods: {
    // category 會用到的
    getSubLink(cata) {
      if (cata.sub_categories.length) {
        return `/categories/${cata.id}`
      } else {
        return `/products?c=${cata.id}`
      }
    },
    // 取得category image path
    imageLink(path) {
      return process.env.VUE_APP_API_URL.replace('/api/', '/media/') + path
    }
  }
}
