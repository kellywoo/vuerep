<template>
  <div class="app-page pg-skills">
    <div class="pg-align layout-apart">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <strong class="pg-summary">Vue는 지난 한해 동안 <span class="fc-m-green">많은 가능성</span>을 제시했습니다.</strong>
        <p class="pg-desc">
          한 기업에 소속되지 않은 오픈소스로서 Vue는 Evan You와 코어 멤버분 들을 비롯, 여러 개발자분들의 도움으로 매일같이 발전하여 이제는 react나 angular와 함께 자바스크립트의 프레임워크로 이름을 올리고 있습니다. 이 행보를 기록한 그래프와 article 입니다.
        </p>
      </div>
      <div class="pg-inner-body">
        <div class="pg-inner-group">
          <h3 class="pg-inner-title">지난 1년 npm을 통한 누적 vue-cli 다운로드</h3>
          <div id="vue_download"></div>
        </div>
        <div class="pg-inner-group">
          <h3 class="pg-inner-title">Github API를 통한 React, Angular 비교</h3>
          <div id="github_status"></div>
        </div>
        <div class="pg-inner-group">
          <h3 class="pg-inner-title">지금 react, angular, vue 중에 고민한다면?</h3>
          <ul class="about-vue lo-col col-3"><li><figure></figure> <dl class="about-vue-fact"><dt>First Release</dt> <dd class="n-1"><div class="vue-fact-desc"><strong>2014.02.11</strong> <div style="height: 67px;"><p>
            Github 페이지를 통해 버전 0.6이 2014년 2월 11일에 발표되었고 2월2일 부터 발표 당일까지 <span class="fc-m-green">26,809</span>회의 방문이 기록되었다.
                  </p></div> <a target="_blank" href="http://blog.evanyou.me/2014/02/11/first-week-of-launching-an-oss-project/" class="vue-fact-link">More of Launch</a></div></dd></dl></li> <li><dl class="about-vue-fact"><dt>Creator</dt> <dd class="n-2"><div class="vue-fact-desc"><strong>Evan You</strong> <div style="height: 67px;"><p>Google의 Creative Lab에서 Technologist로 일하며 angular 커밋터로 활동했으며 현재는 풀타임 vue 커밋터로 일하고 있다.
                  </p></div> <a target="_blank" href="https://www.linkedin.com/in/evanyou" class="vue-fact-link">More of him</a></div></dd></dl></li> <li><dl class="about-vue-fact"><dt>Conference</dt> <dd class="n-3"><div class="vue-fact-desc"><strong>Official VueConf</strong> <div style="height: 67px;"><p>
            첫 공식 행사는 2017.06.22-23 폴란드 Wroclaw에서 열렸으며 일본,중국,한국,EU등 비공식적으로 행해지고 있다.
            </p></div> <a href="https://www.youtube.com/watch?v=TsgdiXGWlIY&amp;feature=youtu.be" target="_blank" class="vue-fact-link">More of Conf</a></div></dd></dl></li></ul>
        </div>
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
        pages: [],
        ghurl: 'https://api.github.com/repos/',
        angular: 'angular/angular',
        react: 'facebook/react',
        vue: 'vuejs/vue',
        ghtoken: '5efa432c7508cde93da25be3da1900e012b378f6'
      }
    },
    methods: {

      display (item) {
        this.displayingItem = item;
      },
      drawChart (data) {
        bb.generate({
          bindto: '#vue_download',
          data: {
            'x': 'x',
            'columns': data,
            'colors': {
              downloads: '#41b883'
            }
          },
          "padding": {
            'right': 30
          },
          type: 'spline',
          axis: {
            x: {
              type: 'timeseries',
              tick: {
                format: "%Y-%m-%d"
              }
            }
          }
        });
      },
      getNpmApi () {
        let url = npmurl.replace('!!!', 'last-year')
        $http.get(url).then((res) => {
          let data = res.data.downloads.reduce((p, c, i) => {
            let sum = p[1][i-1] || 0;
            p[ 0 ].push(c.day);
            p[ 1 ].push( sum + c.downloads)
            return p;
          }, [ [], []]);
          data[0].unshift('x');
          data[1].unshift('downloads');
          if ( data.length && document.getElementById('vue_download') ) {
            this.drawChart(data)
          } else {
            setTimeout(() => {
              this.drawChart(data);
            }, 300)
          }
        })
      },
      drawGraph () {
        let data = [].slice.call(arguments).map(v => v.data).map(v => [ v.name, v.stargazers_count, v.forks_count, v.watchers_count, v.network_count ]);
        data.unshift([ 'title', 'stars', 'forks', 'watchers', 'networks' ]);
        bb.generate({
          "data": {
            "x": 'title',
            "columns": data,
            "type": 'bar',
            "colors": {
              angular: '#dc0032',
              react: '#ffc564',
              vue: '#41b883',
            }
          },
          "axis": {
            "rotated": true,
            "x": {
              "type": "category"
            }
          },
          bar: {
            width: {
              ratio: 0.7
            }
          },
          "bindto": '#github_status'
        })


// watchers_count network_count forks_count subscribers_count stargazers_count
      },
      getGithubApi () {
        let vm = this;
        let angular = () => $http.get(this.ghurl + this.angular, { access_token: this.ghtoken })
        let react = () => $http.get(this.ghurl + this.react, { access_token: this.ghtoken })
        let vue = () => $http.get(this.ghurl + this.vue, { access_token: this.ghtoken })
        $http.all([  vue(), react(), angular() ]).then(
          $http.spread(function (vue, react, angular) {
            vm.drawGraph(vue, react, angular);
          })
        )
      }
    },
    mounted () {
      this.getNpmApi();
      this.getGithubApi();
    },
    mounted () {}
  }
</script>
<style lang="scss">
  .bb-tooltip-container {
    max-width: 170px !important;
    .bb-tooltip {
      table-layout: auto;
    }
    .name {
      width: 100px;
    }
  }
</style>

