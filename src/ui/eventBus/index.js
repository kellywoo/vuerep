import Vue from 'vue'
import LangAbout from '@/components/pages/about/lang'
import LangBlog from '@/components/pages/blog/lang'
import LangContact from '@/components/pages/contact/lang'
import LangHome from '@/components/pages/home/lang'
import LangSkills from '@/components/pages/skills/lang'
import LangWork from '@/components/pages/work/lang'
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
export default new Vue({
  name: 'eventBus',
  data: {
    'language': Lang,
    'i18n': ''
  },
  methods: {
    setLang (lang) {
      document.documentElement.lang = lang;
      this.i18n = this.language[lang];
      this.$emit('changeLang', this.i18n);
    },
    langInit (vm, title, rtv) {
      vm.i18n = this.i18n[title];
      let handler = (lang) => {
        vm.i18n = lang[title];
        vm.errors.remove();
      }
      this.$on('changeLang', handler);
      // when removeEventHandler is needed, set rtv true
      // arrow function return eventbus as this
      if (rtv) {
        return () => { this.$off('changeLang', handler) }
      }
    },
    langOff () {
    },
    autoScrollReady (children){
      this.$emit('autoScrollReady', children);
    },
    openModal (obj, name) {
      this.$emit('openModal', [obj, name])
    },
    closeModal (next) {
      this.$emit('closeModal', next)
    }
  }
})
