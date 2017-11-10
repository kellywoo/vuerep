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
        <h3>vue-cli downloads in past 1year from npm</h3>
        <div id="vue_download"></div>
        <img src="/assets/img/download.png" alt="">
        <img src="/assets/img/stat2.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import { bb, d3 } from '/nm/billboard.js/src/core.js'
  const $http = require('axios')

  const npmurl =
    'https://api.npmjs.org/downloads/range/!!!/vue-cli'
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
      },
      drawChart (data) {
        bb.generate({
          bindto: '#vue_download',
          data: {
            'x':'x',
            'columns': data
          },
          axis: {
            x: {
              type: 'timeseries',
              tick: {
                format: "%Y-%m-%d"
              }
            }
          }
        });
      }
    },
    beforeCreate () {
      let url = npmurl.replace('!!!','last-year')
      $http.get(url).then((res) => {
        let data = res.data.downloads.reduce((p,c) => {
          p[0].push(c.day)
          p[1].push(c.downloads)
          return p;
        },[['x'],['downloads']]);
        console.log(data);
        if (data.length && document.getElementById('vue_download')) {
          this.drawChart(data)
        } else {
          setTimeout( () => {
            this.drawChart(data);
          }, 300)
        }
      })
    },
    mounted () {
      this.$parent.animateInit = () => {
        this.shiftPages();
      }
    }
  }
</script>
<style lang="scss">
  .bb-tooltip-container {
    max-width: 170px  !important;
    .bb-tooltip {
      table-layout: auto;
    }
    .name {
      width: 100px;
    }
  }
</style>

