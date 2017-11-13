// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import UIComponent from '@/ui'
import Throttle, { throttle } from './util/throttle'
import VeeValidate, { Validator } from 'vee-validate'
import Directives, { alignItemsArray } from '@/directive'
Validator.extend('phone', {
  getMessage: field => '',
  validate: value => {
    return new Promise(resolve => {
      resolve({
        valid: !!/^[\d-]+$/.exec(value)
      })
    })
  }
})

/*validate*/
const enDict = {
  attributes: {
    email: 'email address'
  },
  messages: {
    required: (field) => `${field} is required`,
    email: () => 'This doesn\'t match email format',
    phone: () => 'Only digits and \'-\' are acceptable.'
  }
}
const koDict = {
  attributes: {
    name: '이름',
    email: '메일주소',
    phone: '연락처',
    message: '메세지'
  },
  messages: {
    required: (field) => {
      if ( field === '메세지' ) {
        return '할 말씀이 없으시더라도 한마디만 해주세요 :)'
      }
      return `필수 항목인데 입력해주시면 안 될까요?`
    },
    email: () => '이메일 형식이 아니네요?',
    phone: () => '연락처는 숫자만! 스토킹 용도 아니에요 ^^'
  }
}

var windowResizeHandler = throttle(function () {
  for ( var i in alignItemsArray ) {
    if ( alignItemsArray[ i ].length ) {
      let height = alignItemsArray[ i ].map(function (el) {
        return [].slice.call(el.children).reduce(function (p, c) {
          return p + c.offsetHeight;
        }, 0);
      }).sort((a, b) => {
        return a < b;
      })[0];
      alignItemsArray[ i ].forEach(function (el) {
        el.style.height = height + 'px';
      })
    }
  }
},600);

Vue.config.productionTip = false
if ( window.glObj.browser.support ) {
  Vue.directive('align', Directives[ 'align-height' ]);
  window.addEventListener('resize', windowResizeHandler, false)

  Vue.use(UIComponent)
  Vue.use(Throttle)
  Vue.use(VeeValidate, {
    locale: 'ko',
    dictionary: {
      en: enDict,
      ko: koDict
    }
  })

  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    mounted () {
      windowResizeHandler();
    }
  })
}
