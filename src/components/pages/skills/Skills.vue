<template>
  <div class="app-page pg-skills">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">&lt;Activity/&gt;</h2>
        <p class="pg-desc">영어로만 제공되어 읽기 힘든 API 문서를 한국어로 번역 누구나 쉽게 Vue.js를 배울 수 있도록 관리하고 vuex, router, next.js와 같이 vue와 관련된 많은 내용들을 업데이트 하고 있습니다. </p>
      </div>
      <div class="pg-inner-body">
        <div class="activity-desc">
          이렇게 다양한 내용을 번역하고 관리하고 업데이트하고 있습니다.
        </div>
        <transition-group name="list" class="activity-list lo-col" tag="ul">
          <li class="activity-list-item" v-for="page in pages" :key="page.idx">
            <a :href="page.url" target="_blank">
              {{page.name}}
            </a>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
  import { ko } from './lang.js'
  import setLang from '@/mixin/lang'
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
    mixins: [ setLang ],
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        language: 'skills',
        pages: [],
        ticks: []
      }
    },
    created () {
      this.setLang();
    },
    methods: {
      shiftPages () {
        this.pages.push(pages.splice(0, 1)[0]);
        if ( pages.length > 0 ) {
          setTimeout(() => {
            this.shiftPages();
          }, 1000)
        }
      }
    },
    mounted () {
      this.$parent.animateInit = () => {
        this.shiftPages();
      }
    }
  }
</script>
<style lang="scss">
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
.activity-list {
  margin-top: -50px;
  text-align: center;
  margin-left: 50%;
  & > li {
    width: 100%;
  }
}
$palette: #51c0bf, #59add0, #7095e1, #9fa3e3, #c993d4, #db8db2, #f1c3d0;
.activity-list-item {
  display: block;
  margin: 0 auto;
  @for $i from 1 through length($palette) {
    &:nth-child(#{$i}) > a {
      background-color: nth($palette, $i);
    }
  }

 & > a {
   color: rgba(#320d3f, 0.7);
   display: block;
   position: relative;
   line-height: 40px;
   margin: 10px;
   overflow: hidden;
   border-radius: 5px;
   &::after {
     position: absolute;
     box-sizing: border-box;
     text-align: center;
     opacity: 0;
     top: 0;
     width: 100%;
     right: 80%;
     bottom: 0;
     line-height: inherit;
     content: 'move to page';
     white-space: nowrap;
     color: #fff;
     background-color: rgba(0,0,0,0.5);
     transition: right 0.5s;
   }
    &:hover::after {
      opacity: 1;
      right: 0;
    }
 }
}


</style>
