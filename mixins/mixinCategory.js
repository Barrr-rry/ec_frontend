export default {
  methods: {
    getSubLink(cata) {
      if (cata.sub_categories.length) {
        return `/categories/${cata.id}`
      } else {
        return `/products?c=${cata.id}`
      }
    },
    imageLink(path) {
      return process.env.VUE_APP_API_URL.replace('/api/', '/media/') + path
    }
  }
}
