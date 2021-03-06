!function (e, r) {'object' == typeof exports && 'object' == typeof module ? module.exports = r() : 'function' == typeof define && define.amd ? define([], r) : 'object' == typeof exports ? exports.agent = r() : (e.eg = e.eg || {}, e.eg.agent = r())}(this, function () {
  return function (e) {
    function __webpack_require__ (i) {
      if (r[i]) return r[i].exports
      var t = r[i] = {i: i, l: !1, exports: {}}
      return e[i].call(t.exports, t, t.exports, __webpack_require__), t.l = !0, t.exports
    }

    var r = {}
    return __webpack_require__.m = e, __webpack_require__.c = r, __webpack_require__.d = function (e, r, i) {
      __webpack_require__.o(e, r) || Object.defineProperty(e, r, {
        configurable: !1,
        enumerable: !0,
        get: i
      })
    }, __webpack_require__.n = function (e) {
      var r = e && e.__esModule ? function () {return e['default']} : function () {return e}
      return __webpack_require__.d(r, 'a', r), r
    }, __webpack_require__.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r)}, __webpack_require__.p = '', __webpack_require__(__webpack_require__.s = 0)
  }([function (e, r, i) {
    'use strict'
    var t = i(1), n = function (e) {return e && e.__esModule ? e : {'default': e}}(t)
    e.exports = n['default']
  }, function (e, r, i) {
    'use strict'

    function agent () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t.navigator.userAgent
      o['default'].setUa(e)
      var r = {os: o['default'].getOs(), browser: o['default'].getBrowser(), isMobile: o['default'].getIsMobile()}
      return r.browser.name = r.browser.name.toLowerCase(), r.os.name = r.os.name.toLowerCase(), r.os.version = r.os.version.toLowerCase(), 'ios' === r.os.name && r.browser.webview && (r.browser.version = '-1'), r
    }

    r.__esModule = !0
    var t = i(2), n = i(3), o = function (e) {return e && e.__esModule ? e : {'default': e}}(n)
    agent.VERSION = '2.1.2', r['default'] = agent, e.exports = r['default']
  }, function (e, r, i) {
    'use strict'
    r.__esModule = !0
    var t = 'undefined' != typeof window && window || {}
    r.RegExp = t.RegExp, r.navigator = t.navigator
  }, function (e, r, i) {
    'use strict'

    function setUa (e) {o = e}

    function isMatched (e, r) {return r && r.test ? !!r.test(e) : e.indexOf(r) > -1}

    function getIdentityStringFromArray (e, r) {
      var i = e.filter(function (e) {return isMatched(o, e.criteria)})[0]
      return i && i.identity || r.name
    }

    function getRule (e, r) {
      return e.filter(function (e) {
        var i = e.criteria, t = new RegExp(e.identity, 'i').test(r)
        return !!(i ? t && isMatched(o, i) : t)
      })[0]
    }

    function getBrowserName () {return getIdentityStringFromArray(n['default'].browser, n['default'].defaultString.browser)}

    function getBrowserRule (e) {
      var r = getRule(n['default'].browser, e)
      return r || (r = {criteria: e, versionSearch: e, identity: e}), r
    }

    function extractBrowserVersion (e, r) {
      var i = n['default'].defaultString.browser.version, t = new RegExp('(' + e + ')', 'i').exec(r)
      if (!t) return i
      var o = t.index, a = t[0]
      if (o > -1) {
        var s = o + a.length + 1
        i = r.substring(s).split(' ')[0].replace(/_/g, '.').replace(/;|\)/g, '')
      }
      return i
    }

    function getBrowserVersion (e) {return e ? extractBrowserVersion(getBrowserRule(e).versionSearch || e, o) : undefined}

    function isWebview () {
      var e = n['default'].webview, r = void 0
      return e.filter(function (e) {return isMatched(o, e.criteria)}).some(function (e) {return r = extractBrowserVersion(e.browserVersionSearch, o), !(!isMatched(o, e.webviewToken) && !isMatched(r, e.webviewBrowserVersion))})
    }

    function getOSRule (e) {return getRule(n['default'].os, e)}

    function getOsName () {return getIdentityStringFromArray(n['default'].os, n['default'].defaultString.os)}

    function getOsVersion (e) {
      var r = getOSRule(e) || {}, i = n['default'].defaultString.os.version, t = void 0
      if (!e) return undefined
      if (r.versionAlias) return r.versionAlias
      var a = r.versionSearch || e, s = new RegExp('(' + a + ')\\s([\\d_\\.]+|\\d_0)', 'i')
      return s.exec(o) && (t = s.exec(o)[2].replace(/_/g, '.').replace(/;|\)/g, '')), t || i
    }

    function getOs () {
      var e = getOsName()
      return {name: e, version: getOsVersion(e)}
    }

    function getBrowser () {
      var e = getBrowserName()
      return {name: e, version: getBrowserVersion(e), webview: isWebview()}
    }

    function getIsMobile () {return -1 !== o.indexOf('Mobi')}

    r.__esModule = !0
    var t = i(4), n = function (e) {return e && e.__esModule ? e : {'default': e}}(t), o = void 0
    r['default'] = {
      getOs: getOs,
      getBrowser: getBrowser,
      getIsMobile: getIsMobile,
      setUa: setUa
    }, e.exports = r['default']
  }, function (e, r, i) {
    'use strict'
    r.__esModule = !0
    var t = {
      browser: [{criteria: 'PhantomJS', identity: 'PhantomJS'}, {
        criteria: /Whale/,
        identity: 'Whale',
        versionSearch: 'Whale'
      }, {criteria: /Edge/, identity: 'Edge', versionSearch: 'Edge'}, {
        criteria: /MSIE|Trident|Windows Phone/,
        identity: 'IE',
        versionSearch: 'IEMobile|MSIE|rv'
      }, {criteria: /MiuiBrowser/, identity: 'MIUI Browser', versionSearch: 'MiuiBrowser'}, {
        criteria: /SamsungBrowser/,
        identity: 'Samsung Internet',
        versionSearch: 'SamsungBrowser'
      }, {criteria: /SAMSUNG /, identity: 'Samsung Internet', versionSearch: 'Version'}, {
        criteria: /Chrome|CriOS/,
        identity: 'Chrome'
      }, {criteria: /Android/, identity: 'Android Browser', versionSearch: 'Version'}, {
        criteria: /iPhone|iPad/,
        identity: 'Safari',
        versionSearch: 'Version'
      }, {criteria: 'Apple', identity: 'Safari', versionSearch: 'Version'}, {criteria: 'Firefox', identity: 'Firefox'}],
      os: [{
        criteria: /Windows Phone/,
        identity: 'Windows Phone',
        versionSearch: 'Windows Phone'
      }, {criteria: 'Windows 2000', identity: 'Window', versionAlias: '5.0'}, {
        criteria: /Windows NT/,
        identity: 'Window',
        versionSearch: 'Windows NT'
      }, {criteria: /iPhone|iPad/, identity: 'iOS', versionSearch: 'iPhone OS|CPU OS'}, {
        criteria: 'Mac',
        versionSearch: 'OS X',
        identity: 'MAC'
      }, {criteria: /Android/, identity: 'Android'}, {criteria: /Tizen/, identity: 'Tizen'}, {
        criteria: /Web0S/,
        identity: 'WebOS'
      }],
      webview: [{
        criteria: /iPhone|iPad/,
        browserVersionSearch: 'Version',
        webviewBrowserVersion: /-1/
      }, {criteria: /iPhone|iPad|Android/, webviewToken: /NAVER|DAUM|; wv/}],
      defaultString: {browser: {version: '-1', name: 'unknown'}, os: {version: '-1', name: 'unknown'}}
    }
    r['default'] = t, e.exports = r['default']
  }])
})