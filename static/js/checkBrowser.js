var getExplorer = (function () {
    var explorer = window.navigator.userAgent,
      compare = function (s) {
        return (explorer.indexOf(s) >= 0);
      },
      ie11 = (function () {
        return ("ActiveXObject" in window)
      })();
    console.log('compare("MSIE"):' + compare("MSIE"))
    console.log('ie11:' + ie11)
    if (compare("MSIE") || ie11) {
      return 'ie';
    } else if (compare("Firefox") && !ie11) {
      return 'Firefox';
    } else if (compare("Chrome") && !ie11) {
      return 'Chrome';
    } else if (compare("Opera") && !ie11) {
      return 'Opera';
    } else if (compare("Safari") && !ie11) {
      return 'Safari';
    }
  })()
  if (getExplorer == 'ie') {
    alert('使用當前瀏覽器可能會不相容，為了更好的瀏覽體驗，推薦使用 Google 瀏覽器\n')
    window.location = "https://www.google.com.tw/chrome/"
  }
  console.log('from script Explorer:' + getExplorer)