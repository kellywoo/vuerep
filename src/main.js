// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import UIComponent from '@/ui'
import throttle from './util/throttle'
import LangAbout from '@/components/pages/about/lang'
import LangBlog from '@/components/pages/blog/lang'
import LangContact from '@/components/pages/contact/lang'
import LangHome from '@/components/pages/home/lang'
import LangSkills from '@/components/pages/skills/lang'
import LangWork from '@/components/pages/work/lang'
function setLang (v) {
  document.documentElement.lang = v;

}
Vue.config.productionTip = false

if (window.glObj.browser.support) {
  Vue.use(UIComponent)
  Vue.use(throttle)
  var Lang = {
    ko: {
      about: LangAbout.$ko,
      blog: LangBlog.$ko,
      contact: LangContact.$ko,
      home: LangHome.$ko,
      skills: LangSkills.$ko,
      work: LangWork.$ko
    },
    en: {
      about: LangAbout.$en,
      blog: LangBlog.$en,
      contact: LangContact.$en,
      home: LangHome.$en,
      skills: LangSkills.$en,
      work: LangWork.$en
    }
  }
  /* eslint-disable no-new */

  setLang(window.glObj.lang);
  new Vue({
    el: '#app',
    data: {
      'lang': window.glObj.lang,
      'i18n': Lang
    },
    methods: {
      changeBodyLang (l) {
        setLang(l);
      }
    },
    created () {
      this.changeBodyLang(window.glObj.lang)
    },
    mounted () {
      this.$root.$emit('changeLang', window.glObj.lang);
      this.$root.$on('changeLang', this.changeBodyLang);
    },
    template: '<App/>',
    components: {App}
  })
}
