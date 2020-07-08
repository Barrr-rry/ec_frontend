export default {
  data() {
    return {
      _password: null,
      _phone: null,
    }
  },
  methods: {
    recieveName(rule, value, callback) {
      let re = /^[a-zA-Z]*$/
      if (re.test(value)) {
        if (value.length < 4) {
          callback('英文最少長度為 4')
          return
        } else {
          callback()
          return
        }

      }
      re = /^[\u4e00-\u9fa5]*$/
      if (re.test(value)) {
        if (value.length < 2) {
          callback('中文字長度至少兩個字')
          return
        } else {
          callback()
          return
        }
      }
      callback('請輸入正確格式')
    },
    checkPhone(rule, value, callback) {
      let re = /^09\d{8}$/
      if (re.test(value)) {
        callback()
      } else {
        callback('請輸入正確手機格式')
      }
    },
    validateEmail(rule, value, callback) {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        this._email = value
        callback()
      } else {
        callback('請輸入Email 格式')
      }
      // return re.test(email);
    },
    validateCode(rule, value, callback) {
      if (value===this.code) {
        callback()
      } else {
        callback('請輸入正確驗證碼')
      }
      // return re.test(email);
    },
    validatePassword(rule, value, callback) {
      let pattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,12}$/
      if (!new RegExp(pattern).test(value)) {
        callback('請輸入 6 - 12 個英數混合密碼')
      }
      this._paswwrod = value
      callback()
    },
    validateConfirmPassword(rule, value, callback) {
      if (this._paswwrod !== value) {
        callback('請輸入相同密碼')
      }
      callback()
    },
    validateConfirmEmail(rule, value, callback) {
      if (this._email !== value) {
        callback('請輸入相同信箱')
      }
      callback()
    },
    validateCellPhone(rule, value, callback) {
      this._phone = value
      callback()
    },
    validatePhone(rule, value, callback) {
      if (typeof this._phone !== 'string' && typeof value !== 'string') {
        callback('電話手機兩者擇一')
      }
      callback()
    },
    updateFailFields(err) {
      let data = err.response.data
      let fields = {}
      for (let key in data) {
        let erros = data[key].map(msg => {
          return {message: msg}
        })
        fields[key] = {
          value: '',
          errors: erros
        }

      }
      return fields

    }
  }
}
