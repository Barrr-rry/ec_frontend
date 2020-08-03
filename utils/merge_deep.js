function mergeDeep(...objects) {
  /**
   * 這個是為了把兩個obj 能做copy的動作而且是深層的copy
   * */
  const isObject = (obj) => obj && typeof obj === 'object'
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export default mergeDeep
