import {$} from '@/util/util'

const setLang = {
  data (){
    return {
      i18n: {}
    }
  },
  methods: {
    changeLang (lang) {
      this.i18n = this.$root.i18n[lang][this.language];
    },
    setLang () {
      this.$root.$on('changeLang', this.changeLang);
    }
  }
}

export default setLang
