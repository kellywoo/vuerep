<template>
  <div class="app-page pg-community">
    <div class="pg-align layout-apart">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <strong class="pg-summary">
          <span class="fc-m-green">그래서 Vue 커뮤니티</span>는<br/>많은 도움이 되려 합니다.
        </strong>
        <p class="pg-desc">
          Vue가 짧은 시간동안에 이렇게 빠른 괘도로 성장할 수 있었던 것은 커뮤니티의 힘이 가장 큽니다.<br/>어떤 언어든 커뮤니티가 잘 발달해 있어야 많은 정보와 지식을 교환할 수 있고 이 힘이 언어의 발전을 도모합니다.<br/>
          무엇보다 잘 정리된 API 문서를 제공, 새로운 교재가 아닌 공식 API로 공부를 가능케 하여 빠른 변화에도 대처할 수 있도록 돕습니다.
        </p>
      </div>
      <div class="pg-inner-body transition-box">
        <div class="pg-inner-group">
          <h3 class="pg-inner-title">커뮤니티 구성원</h3>
          <ul class="community-growth">
            <li>
              <div class="community-size">
                <transition name="title">
                  <h4 class="community-kind" title="Slack" v-show="showSlackTitle">
                    <svg class="img-community-kind" xmlns="http://www.w3.org/2000/svg" viewBox="49 65 150 150"
                         aria-label="Slack"
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
                    <span>Slack</span>
                  </h4>
                </transition>
                <v-count-down :num="slack" :flag="slackStart" @end="endSlack"
                              class="community-people-num"></v-count-down>
                <span>명</span>
              </div>
            </li>
            <li>
              <div class="community-size">
                <transition name="title">
                  <h4 class="community-kind" title="Facebook" v-show="showFbTitle">
                    <svg class="img-community-kind" xmlns="http://www.w3.org/2000/svg" viewBox="-45 -45 360 360"
                         arial-label="Facebook"
                         shape-rendering="geometricPrecision">
                      <path id="Blue_1_" fill="#3C5A99"
                            d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812  c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225  H248.082z"></path>
                      <path id="f" fill="#FFFFFF"
                            d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935  l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585  v99.803H182.409z"></path>
                    </svg>
                    <span>FB</span>
                  </h4>
                </transition>
                <v-count-down :num="facebook" :flag="fbStart" @end="endFB"
                              class="community-people-num"></v-count-down>
                <span>명</span>
              </div>
            </li>
          </ul>
          <div class="community-slogan txt-c" v-show="showSlogan">
            <span>우</span>
            <span>리</span>
            <span>는</span>
            <span>지</span>
            <span>금</span>
            <span>도</span>
            <br class="m-br">
            <span>폭</span>
            <span>풍</span>
            <span>성</span>
            <span>장</span>
            <span>중</span>
            <span>!!</span>
          </div>
        </div>
        <div class="pg-inner-group">
          <h3 class="pg-inner-title">커뮤니티 활동</h3>
          <div>
            <ul class="community-activity txt-c">
              <li class="community-activity-item"
                  v-for="page in pages"
                  :key="page.idx">
                <div class="community-page">
                  <h4>{{page.name}}</h4>
                </div>
                <a class="community-page-link" target="_blank" :href="page.url">
                  <span class="community-link-box">
                  <span class="community-text">이동</span>
                  <span class="community-icon icon-forward"></span>
                    </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { $, requestAniFrame } from '@/util/util'
  import easingEquations from '@/util/easing'
  import CountDown from './Countdown'
  let pages = [
    { name: '공식 블로그', url: 'https://vuejs-kr.github.io/', idx: 0 },
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
        pages: pages,
        slack: 668,
        facebook: 2133,
        fbStart: false,
        slackStart: false,
        showFbTitle: false,
        showSlackTitle: false,
        showSlogan: false
      }
    },
    methods: {
      endSlack () {
        this.showSlackTitle = true;
        setTimeout(() => {
          this.fbStart = true
        }, 800);
      },
      endFB () {
        this.showFbTitle = true;
        setTimeout(() => {
          this.showSlogan = true
        }, 800);
      }
    },
    mounted () {
      this.$parent.animateInit = () => {
        setTimeout(() => {
          this.slackStart = true;
        }, 1000)
      }
    },
    components: {
      'v-count-down': CountDown
    }
  }
</script>
<style lang="scss">

  .title-enter-active, .title-leave-active {
    transition: all 1s;
  }

  .title-enter, .title-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
