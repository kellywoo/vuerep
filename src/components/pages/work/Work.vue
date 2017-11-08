<template>
  <div class="app-page pg-community">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
      </div>
      <div class="pg-inner-body transition-box">
        <dl class="community-summary">
          <dt>가입자수</dt>
          <dd>
            <ul class="community-list">
              <li>
                <figure class="community-kind" title="Slack">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="49 65 150 150" aria-label="Slack"
                       shape-rendering="geometricPrecision">
                    <path fill="#ECB32D"
                          d="M141.8 87.1c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path>
                    <path fill="#63C1A0"
                          d="M98.3 101.2c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path>
                    <path fill="#E01A59"
                          d="M177.2 158.6c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7L84 166.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.5-28.1 86.5-28.1z"></path>
                    <path fill="#331433"
                          d="M102 183.1c5.6-1.8 12.9-4.2 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
                    <path fill="#D62027"
                          d="M145.6 168.9c7.8-2.5 15.1-4.9 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
                    <path fill="#89D3DF"
                          d="M163 115.1c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.4 28.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.4-28 86.4-28z"></path>
                    <path fill="#258B74"
                          d="M87.9 139.5c5.6-1.8 12.9-4.2 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
                    <path fill="#819C3C"
                          d="M131.4 125.4c7.8-2.5 15.1-4.9 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path>
                  </svg>
                </figure>
                <div class="community-size"><span class="community-people-num">{{slack}}</span><span>명</span></div>
              </li>
              <li>
                <figure class="community-kind" title="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-45 -45 360 360" arial-label="Facebook"
                       shape-rendering="geometricPrecision">
                    <path id="Blue_1_" fill="#3C5A99"
                          d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812  c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225  H248.082z"></path>
                    <path id="f" fill="#FFFFFF"
                          d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935  l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585  v99.803H182.409z"></path>
                  </svg>
                </figure>
                <div class="community-size"><span class="community-people-num">{{facebook}}</span><span>명</span></div>
              </li>
            </ul>
          </dd>
          <dt>활동 페이지</dt>
          <dd>
            <transition-group name="list" class="activity-list" tag="ul">
              <li class="activity-list-item"
                  v-for="page in pages"
                  :key="page.idx">
                <h4 class="community-page">{{page.name}}
                <p>{{page.url}}</p></h4>
                <a href="#" target="_blank"
                   @click.prevent="display(page)">
                  Go
                  </a>
              </li>
            </transition-group>
          </dd>
        </dl>
        <div>
          짧은 시간안에 빠르게 성장한 vue community는 꾸준히 크기를 키워가고 있으며 가장 친절한 커뮤니티로 정평이 나 있습니다. community의 성지 slack에는 매일 많은 글이 오가며 question 채널에 질문을 올리면 동시에 여기저기서 답변을 얻을 수 있습니다.

        </div>
      </div>
      <div class="btn-box txt-c">
        <a href="#" class="btn-jump f-roboto"></a>
      </div>
    </div>
  </div>
</template>
<script>
  import { $, requestAniFrame } from '@/util/util'
  import easingEquations from '@/util/easing'
  const fMember = 2133;
  const sMember = 668;
  let pages = [
    { name: 'Vue.js', url: 'https://kr.vuejs.org/', idx: 1 },
    { name: 'Vuex', url: 'https://vuex.vuejs.org/kr/', idx: 2 },
    { name: 'vue-router', url: 'https://router.vuejs.org/kr/', idx: 3 },
    { name: 'SSR Guide', url: 'https://ssr.vuejs.org/ko/', idx: 4 },
    { name: 'vue-loader', url: 'https://vue-loader.vuejs.org/kr/', idx: 5 },
    { name: 'Nuxt.js', url: 'https://ko.nuxtjs.org/', idx: 6 },
    { name: 'Component Guide', url: 'https://pablohpsilva.github.io/vuejs-component-style-guide/#/korean', idx: 7 }
  ];
  export default {
    name: 'work',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        pages: [],
        slack: 0,
        facebook: 0,
        current: 0,
        to: 0
      }
    },
    methods: {
      tick () {
        let p = this.current++ / this.to;
        this.facebook = $.util.toCash(fMember * easingEquations[ 'easeOutSine' ](p));
        this.slack = $.util.toCash(sMember * easingEquations[ 'easeOutSine' ](p));

        if ( p < 1 ) {
          requestAniFrame()(this.tick);
        } else {
          this.facebook = $.util.toCash(fMember);
          this.slack = $.util.toCash(sMember);
        }
      },
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
    created () {
      this.to = 1500 * 60 / 1000
    },
    mounted () {
      this.$parent.animateInit = () => {
        setTimeout(() => {
          this.tick();
          this.shiftPages();
        }, 500)
      }
    }
  }
</script>
