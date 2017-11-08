<template>
  <div class="app-page pg-skills">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <p class="pg-desc">
          Vue와 관련된 article 들입니다.
        </p>
      </div>
      <div class="pg-inner-body">
        <img src="/assets/img/download.png" alt="">
        <img src="/assets/img/stat2.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  let pages = [
    { name: 'Vue.js', url: 'https://kr.vuejs.org/', idx: 1 },
    { name: 'Vuex', url: 'https://vuex.vuejs.org/kr/', idx: 2 },
    { name: 'SSR Guide', url: 'https://ssr.vuejs.org/ko/', idx: 3 },
    { name: 'vue-router', url: 'https://router.vuejs.org/kr/', idx: 4 },
    { name: 'vue-loader', url: 'https://vue-loader.vuejs.org/kr/', idx: 5 },
    { name: 'Nuxt.js', url: 'https://ko.nuxtjs.org/', idx: 6 },
    { name: 'Component Guide', url: 'https://pablohpsilva.github.io/vuejs-component-style-guide/#/korean', idx: 7 }
  ];
  export default {
    name: 'skills',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        pages: []
      }
    },
    methods: {
      shiftPages () {
        this.pages.push(pages.splice(0, 1)[ 0 ]);
        if ( pages.length > 0 ) {
          setTimeout(() => {
            this.shiftPages();
          }, 1000)
        }
      },
      display (item) {
        this.displayingItem = item;
      }
    },
    mounted () {
      this.$parent.animateInit = () => {
        this.shiftPages();
      }
    }
  }
</script>

