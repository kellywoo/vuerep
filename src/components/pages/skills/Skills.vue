<template>
  <div class="app-page pg-skills">
    <div class="pg-align layout-apart">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <strong class="pg-summary">Vue는 지난 한해 동안 <span class="fc-m-green">많은 가능성</span>을 제시했습니다.</strong>
        <p class="pg-desc">
          한 기업에 소속되지 않은 오픈소스로서 Vue는 Evan You와 코어 멤버분 들을 비롯, 여러 개발자분들의 도움으로 매일같이 발전하여 이제는 react나 angular와 함께 자바스크립트의 프레임워크로 이름을 올리고 있습니다. 하지만 굳이 react나 angular가 있는데 또 다시 Vue를 알아야 하는 이유가 무엇일까 라고 생각할 수 있습니다. 아래의 내용들이 도움이 되실거라 생각합니다.
        </p>
      </div>
      <div class="pg-inner-body">

        <section class="pg-inner-group">
          <h3 class="pg-inner-title">Vue의 성장그래프</h3>
          <div class="graph-item">
            <figure id="vue_download"></figure>
            <figcaption class="graph-title">지난 1년 npm을 통한 누적 vue-cli 다운로드</figcaption>
          </div>
          <div class="graph-item">
            <figure id="github_status"></figure>
            <figcaption class="graph-title">Github API를 통한 React, Angular 비교</figcaption>
          </div>
        </section>
        <section class="pg-inner-group">
          <article class="pg-inner-group">
            <h4 class="pg-inner-title">
              1. react, angular, vue 중에 고민한다면?
            </h4>
            <ul class="reference-list">
              <li><a class="reference-item"
                     href="https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176"
              target="_blank">Angular vs. React vs. Vue: A 2017 comparison</a>
              </li>
              <li><a class="reference-item" href="https://www.slideshare.net/GunheeLee2/angular-react-vue" target="_blank">목적에 맞게 Angular React Vue</a>
              </li>
              <li><a class="reference-item"
                     href="https://www.valuecoders.com/blog/technology-and-apps/vue-js-comparison-angular-react/" target="_blank">Vue.js Is Good, But Is It Better Than Angular Or React?</a>
              </li>
            </ul>
          </article>
          <article class="pg-inner-group">
            <h4 class="pg-inner-title">2. 어디서 공부해야할까?</h4>
            <ul class="reference-list">
              <li><a class="reference-item" href="https://kr.vuejs.org" target="_blank">역시 API 부터: 잘 정리된 한국 문서</a></li>
              <li><a class="reference-item" href="https://laracasts.com/" target="_blank">영어가 좀 되면 동영상으로</a></li>
              <li><a class="reference-item" href="https://joshua1988.github.io/web_dev/vuejs-tutorial-for-beginner/" target="_blank">미리 공부한 분들의 실전기 및 분석</a>
              </li>
            </ul>
          </article>
          <article class="pg-inner-group">
            <h4 class="pg-inner-title">3. 공부하다가 모르는게 있으면?</h4>
            <ul class="reference-list">
              <li><a href="https://www.facebook.com/groups/vuejs.korea/"
                     class="reference-item" target="_blank">faceBook</a></li>
              <li><a href="https://vuejs-korea.signup.team/"
                     class="reference-item" target="_blank">slack</a></li>
            </ul>
          </article>
          <article class="pg-inner-group">
            <h4 class="pg-inner-title">4. 간단하게 쓸수 있는 UI 컴포넌트는?</h4>
            <ul class="reference-list">
              <li><a class="reference-item" href="https://github.com/vuejs/awesome-vue" target="_blank">Awesome Vue</a></li>
              <li><a class="reference-item" href="https://madewithvuejs.com/" target="_blank">Made with Vue.js</a></li>
              <li><a class="reference-item" href="https://www.npmjs.com/" target="_blank">npm</a></li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
  import { bb, d3 } from '@/util/billboard/core.js'

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
          padding: {
            'right': 30
          },
          type: 'spline',
          axis: {
            x: {
              type: 'timeseries',
              tick: {
                format: '%Y-%m-%d'
              }
            }
          }
        });
      },
      getNpmApi () {
        let url = npmurl.replace('!!!', 'last-year')
        $http.get(url).then((res) => {
          let data = res.data.downloads.reduce((p, c, i) => {
            let sum = p[ 1 ][ i - 1 ] || 0;
            p[ 0 ].push(c.day);
            p[ 1 ].push(sum + c.downloads)
            return p;
          }, [ [], [] ]);
          data[ 0 ].unshift('x');
          data[ 1 ].unshift('downloads');
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
          data: {
            x: 'title',
            columns: data,
            type: 'bar',
            colors: {
              angular: '#dc0032',
              react: '#ffc564',
              vue: '#41b883'
            }
          },
          axis: {
            rotated: true,
            x: {
              type: 'category'
            }
          },
          bar: {
            width: {
              ratio: 0.7
            }
          },
          'bindto': '#github_status'
        })

// watchers_count network_count forks_count subscribers_count stargazers_count
      },
      getGithubApi () {
        let vm = this;
        let angular = () => $http.get(this.ghurl + this.angular, { access_token: this.ghtoken })
        let react = () => $http.get(this.ghurl + this.react, { access_token: this.ghtoken })
        let vue = () => $http.get(this.ghurl + this.vue, { access_token: this.ghtoken })
        $http.all([ vue(), react(), angular() ]).then(
          $http.spread(function (vue, react, angular) {
            vm.drawGraph(vue, react, angular);
          })
        )
      }
    },
    mounted () {
      this.getNpmApi();
      this.getGithubApi();
    }
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

