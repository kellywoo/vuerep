<template>
  <nav class="gnb f-roboto" :class="isOpen &&'is-open'">
    <button type="button" class="btn-gnb-open"
            v-show="!isOpen"
            @click="isOpen=true">
      <span class="off-grid">Menu Open</span></button>
    <div class="gnb-nav">
      <v-autoscroll-menu :generateItem="generateItem" class="gnb-menu">
      </v-autoscroll-menu>
    </div>
    <button type="button" class="btn-gnb-close"
            v-show="isOpen"
            @click="isOpen=false">
      <span class="off-grid">Menu Close</span>
    </button>
  </nav>
</template>
<script>
  export default {
    name: 'gnb',
    props: {
      sections: {type: Array}
    },
    data () {
      return {
        title: 'gnb',
        isOpen: false,
        scrollingElement: null,
        koObj: {
          label: '한국어',
          value: 'ko'
        },
        enObj: {
          label: 'English',
          value: 'en'
        }
      }
    },
    methods: {
      generateItem (item) {
        return `
                  <span class="scroll-menu-icon"></span>
                  <span class="scroll-menu-text">${item.title}</span>`
      },
      changeLang (data) {
        this.$root.$emit('changeLang', data.value);
      }
    },
    created () {}
  }
</script>