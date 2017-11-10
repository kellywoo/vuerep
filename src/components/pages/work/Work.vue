<template>
  <div class="app-page pg-community">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <strong class="pg-summary">
          <span class="fc-m-green">Vue Community</span>는 많은 도움을 드립니다.
        </strong>
        <p class="pg-desc">
          짧은 시간안에 빠르게 성장한 vue community는 꾸준히 크기를 키워가고 있으며 가장 친절한 커뮤니티로 정평이 나 있습니다. community의 성지 slack에는 매일 많은 글이 오가며 question 채널에 질문을 올리면 동시에 여기저기서 답변을 얻을 수 있습니다.
        </p>
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
                <div class="community-page">
                  <h4>{{page.name}}</h4>
                  <a :href="page.url" target="_blank" class="break-url">{{page.url}}</a>
                </div>
                <a target="_blank" :href="page.url">
                  Go
                </a>
              </li>
            </transition-group>
            <div class="community-great" v-show="lastTouch" :class="{'ani-on': lastTouch}">
              <svg class="svgIcon-use" width="33" height="33" viewBox="0 0 33 33"><path d="M28.86 17.342l-3.64-6.402c-.292-.433-.712-.729-1.163-.8a1.124 1.124 0 0 0-.889.213c-.63.488-.742 1.181-.33 2.061l1.222 2.587 1.4 2.46c2.234 4.085 1.511 8.007-2.145 11.663-.26.26-.526.49-.797.707 1.42-.084 2.881-.683 4.292-2.094 3.822-3.823 3.565-7.876 2.05-10.395zm-6.252 11.075c3.352-3.35 3.998-6.775 1.978-10.469l-3.378-5.945c-.292-.432-.712-.728-1.163-.8a1.122 1.122 0 0 0-.89.213c-.63.49-.742 1.182-.33 2.061l1.72 3.638a.502.502 0 0 1-.806.568l-8.91-8.91a1.335 1.335 0 0 0-1.887 1.886l5.292 5.292a.5.5 0 0 1-.707.707l-5.292-5.292-1.492-1.492c-.503-.503-1.382-.505-1.887 0a1.337 1.337 0 0 0 0 1.886l1.493 1.492 5.292 5.292a.499.499 0 0 1-.353.854.5.5 0 0 1-.354-.147L5.642 13.96a1.338 1.338 0 0 0-1.887 0 1.338 1.338 0 0 0 0 1.887l2.23 2.228 3.322 3.324a.499.499 0 0 1-.353.853.502.502 0 0 1-.354-.146l-3.323-3.324a1.333 1.333 0 0 0-1.886 0 1.325 1.325 0 0 0-.39.943c0 .356.138.691.39.943l6.396 6.397c3.528 3.53 8.86 5.313 12.821 1.353zM12.73 9.26l5.68 5.68-.49-1.037c-.518-1.107-.426-2.13.224-2.89l-3.303-3.304a1.337 1.337 0 0 0-1.886 0 1.326 1.326 0 0 0-.39.944c0 .217.067.42.165.607zm14.787 19.184c-1.599 1.6-3.417 2.392-5.353 2.392-.349 0-.7-.03-1.058-.082a7.922 7.922 0 0 1-3.667.887c-3.049 0-6.115-1.626-8.359-3.87l-6.396-6.397A2.315 2.315 0 0 1 2 19.724a2.327 2.327 0 0 1 1.923-2.296l-.875-.875a2.339 2.339 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.647l-.139-.139c-.91-.91-.91-2.39 0-3.3.884-.884 2.421-.882 3.301 0l.138.14a2.335 2.335 0 0 1 3.948-1.24l.093.092c.091-.423.291-.828.62-1.157a2.336 2.336 0 0 1 3.3 0l3.384 3.386a2.167 2.167 0 0 1 1.271-.173c.534.086 1.03.354 1.441.765.11-.549.415-1.034.911-1.418a2.12 2.12 0 0 1 1.661-.41c.727.117 1.385.565 1.853 1.262l3.652 6.423c1.704 2.832 2.025 7.377-2.205 11.607zM13.217.484l-1.917.882 2.37 2.837-.454-3.719zm8.487.877l-1.928-.86-.44 3.697 2.368-2.837zM16.5 3.293L15.478-.005h2.044L16.5 3.293z" fill-rule="evenodd"></path></svg>
              <span class="d-block txt-c">Great!!</span>
            </div>
          </dd>
        </dl>
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
        pages: [],
        slack: 0,
        facebook: 0,
        current: 0,
        to: 0,
        lastTouch: false
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
          }, 800)
        } else {
          setTimeout(() => {
            this.lastTouch = true
          }, 1200)
        }
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
