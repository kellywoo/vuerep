<template>
  <div class="app-page pg-skills">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <p class="pg-desc">
          영어로만 제공되어 읽기 힘든 API 문서를 한국어로 번역 누구나 쉽게 Vue.js를 배울 수 있도록 관리하고 vuex, router, next.js와 같이 vue와 관련된 많은 내용들을 업데이트 하고 있습니다. </p>
      </div>
      <div class="pg-inner-body">
        <div class="activity-content">
          <div class="activity-desc">
            {{displayingItem.name}}
            {{displayingItem.desc}}
          </div>
          <transition-group name="list" class="activity-list" tag="ul">
            <li class="activity-list-item"
                v-for="page in pages"
                :key="page.idx">
              <a href="#" target="_blank"
                 @click.prevent="display(page)">
                {{page.name}}
              </a>
            </li>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SkillGraph from './SkillGraph'

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
        language: 'Activity',
        pages: [],
        displayingItem: {
          name: 'Click Any pages',
          desc: '이곳에 있는 모든 페이지들은 Vue community에 의해 한국어로 번역, 관리되고 있습니다.'
        }
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

