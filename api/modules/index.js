import camelCase from 'lodash/camelCase'


export default (app) => {
  const files = require.context('@/api/modules', true, /^.*\.js$/)
  const api = {}

  for (const file of files.keys()) {
    const module_name = camelCase(file.replace(/(\.\/|\.js)/g, ''))
    if (['base', 'index'].includes(module_name)) {
      continue
    }
    api[module_name] = files(file).default(app)
  }
  return api
}
