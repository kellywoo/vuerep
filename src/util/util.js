function util () {
  var _util = {}
  _util.slice = Array.prototype.slice
  _util.removeScript = function (str) {
    return str.replace(/<script(.+\n?)+<\/script>/gm, '')
  }
  _util.isArray = function (arr) {
    return typeof arr === 'object' && Array.isArray(arr)
  }
  _util.isObject = function (obj) {
    return typeof obj === 'object' && !Array.isArray(obj)
  }
  _util.isEmptyObject = function (obj) {
    return _util.isObject(obj) && Object.keys(obj).length === 0
  }
  _util.isFilledObject = function (obj) {
    return _util.isObject(obj) && Object.keys(obj).length !== 0
  }
  _util.isEmptyArray = function (arr) {
    return _util.isArray(arr) && arr.length === 0
  }
  _util.isOneOf = function (a, arr) {
    return arr.some(function (v) {
      return a === v
    })
  }
  _util.isString = function (str) {
    return typeof str === 'string'
  }
  _util.isNumber = function (num) {
    return typeof num === 'number'
  }
  _util.isValidNumber = function (num) {
    return typeof num === 'number' && _util.isFinite(num)
  }
  _util.isFunction = function (fn) {
    return typeof fn === 'function'
  }
  _util.first = function (obj) {
    if (_util.isObject) {
      return obj[Object.keys(obj)[0]]
    } else if (!obj) {
      return null
    } else {
      return obj[0]
    }
  }
  _util.ifExists = function (obj, prop) {
    if (obj && obj[prop]) {
      var args = _util.slice.call(arguments, 2)
      if (arguments.length > 2) {
        return _util.ifExists.apply(null, [obj[prop]].concat(args))
      } else {
        return obj[prop]
      }
    } else {
      return false
    }
  }
  _util.isFinite = function (num) {
    return isFinite(num)
  }
  _util.isNaN = function (num) {
    return num !== num
  }
  _util.default = function (a, b) {
    return a || b
  }
  _util.makeFinite = function (num) {
    return isFinite(num) ? num : 0
  }
  _util.toCash = function (n) {
    return _util.toCashFormat(_util.parseInt(n))
  }
  _util.toCashFormat = function (n) {
    if (!n) {
      return 0
    }
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  _util.addFollowZeroes = function (f, number) {
    f = f || ''
    var i, len = f.length
    for (i = len; i < number; i++) {
      f += '0'
    }
    return f
  }
  _util.addPreceedZeroes = function (f, number) {
    f = f || ''
    var i, len = f.length
    for (i = len; i <= number; i++) {
      f = '0' + f
    }
    return f
  }
  _util.noFixed = function (n) {
    n = _util.toStrArray(n)
    n[0] = _util.toCashFormat(n[0])
    n[1] = n[1].substr(0, 8).replace(/0+$/, '')
    return n.join('.').replace(/\.$/, '')
  }
  _util.toFixed = function (n, digit) {
    digit = digit || 8
    n = _util.toStrArray(n)
    n[0] = _util.toCashFormat(n[0])
    n[1] = n[1].substr(0, digit)
    return n.join('.')
  }
  _util.toStrArray = function (n) {
    n = typeof n !== 'number' ? parseFloat(n.replace(/[^0-9.]/g, '')) : n
    n = isFinite(n) ? n : 0
    n = n.toFixed(9).split('.')
    return n
  }
  _util.parseInt = function (n) {
    if (n !== 'number') {
      n = n.toString().replace(/[^0-9.]/g, '') || 0
    }
    return Math.round(parseFloat(n))
  }
  _util.parseFloat = function (n) {
    n = _util.toStrArray(n)
    return parseFloat(n.join('.'))
  }

  return _util
}

export const $ = {
  util: util(),
  dom: function (el, parent) {
    var $parent = document
    if (parent) {
      $parent = typeof parent === 'string' ? document.querySelector(el) : el
      el = parent
    }
    if (el === 'scrollingElement') {
      return document.scrollingElement ? document.scrollingElement : document.body
    } else {
      var elem = $parent.querySelectorAll(el)
      return elem.length === 1 ? elem[0] : [].slice.call(elem)
    }
  },
  createEl: function (tag, cl) {
    let elem = document.createElement(tag)
    elem.classList.add(...cl)
    return elem
  },
  isNode: function (o) {
    return (
      typeof Node === 'object' ? o instanceof Node : o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'
    )
  },
  isElement: function (o) {
    return (
      typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string'
    )
  },
  appendOne: function (parent, child) {
    if (this.isElement(child)) {
      return parent.appendChild(child)
    }
  },
  append: function (parent, children) {
    let self = this;
    try {
      this.appendOne(parent, children)
    } catch (e) {
      if (this.util.isArray(children)) {
          children.forEach(function (v) {
          parent = self.appendOne(parent, v)
        })
      } else {
        console.warn('can\'t append child')
      }
    }
    return parent
  },
  each: function (target, fn) {
    if ($.util.isArray(target)) {
      target.forEach(function () {
        fn.apply(null, [].slice.call(arguments))
      })
    } else {
      fn(target)
    }
  },
  offset: function (el) {
    var top = 0

    do {
      top += el.offsetTop || 0
      el = el.offsetParent
    } while (el)

    return {
      top: top
    }
  },
  getStyle: function (elem, styleProp) {
    var cs = window.getComputedStyle(elem, null)
    return styleProp ? cs.getPropertyValue(styleProp) : cs
  },
  addEventHandler: function (el, ev, fn) {
    if (!$.util.isArray(el)) {
      el.addEventListener(ev, fn, 'false')
      return el.removeEventListener.bind(el, ev, fn, 'false')
    } else {
      return function () {
        this.forEach(function (v) { v.off() })
      }.bind(el.reduce(function (p, v) {
        p.push($.addEventListener(v, ev, fn))
        return p
      }, []))
    }
  }
}

export const requestAniFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()
