<template>
  <div class="app-page pg-blog">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <p class="pg-summary">뷰티풀 코리아는 이제 3회를 맞이합니다.</p>
        <p class="pg-desc">1, 2회를 성공적으로 개최하고 이제 3회를 준비, 앞으로도 지속적으로 커퓨니티를 발전시켜 나갑니다.</p>
      </div>
      <div class="pg-inner-body transition-box">
        <v-tabs class="vuetiful-history clear-fix">
          <v-tab class="first-vuetiful" title="1회">
            <div class="">

            </div>
            <dl class="vuetiful-desc">
              <dt>일시</dt>
              <dd>2017.04.19</dd>
              <dt>위치</dt>
              <dd>D.CAMP(디캠프) 6층</dd>
              <dt>참석자수</dt>
              <dd>100명</dd>
              <dt>발표자수</dt>
              <dd>
                <ul class="presenter-list">
                  <li v-for="i in 5">
                    <img :src="'/assets/img/1st/'+i+'.jpg'" alt="발표자 사진" />
                  </li>
                </ul>
                5명
              </dd>
              <dt>발표자료</dt>
              <dd>https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/04/23/meet-up-slide/</dd>
            </dl>
          </v-tab>
          <v-tab class="second-vuetiful"  title="2회">
            <div>

            </div>
            <dl class="vuetiful-desc">
              <dt>일시</dt>
              <dd>2017.08.23</dd>
              <dt>위치</dt>
              <dd>팁스타운 S1 지하 이벤트홀</dd>
              <dt>참석자수</dt>
              <dd>100명</dd>
              <dt>발표자수</dt>
              <dd>
                <ul class="presenter-list">
                  <li v-for="i in 7">
                    <img :src="'/assets/img/2nd/'+i+'.jpg'" alt="발표자 사진" />
                  </li>
                </ul>
                7명</dd>
              <dt>발표자료</dt>
              <dd>https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/11/06/meet-up-2nd-slide/</dd>
            </dl>
          </v-tab>
        </v-tabs>
      </div>
      <div class="btn-box txt-c">
        <a href="#" target="_blank" class="btn-jump f-roboto">{{i18n.btn}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { ko } from './lang'
  import setLang from '@/mixin/lang'

  export default {
    name: 'blog',
    mixins: [setLang],
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        language: 'blog'
      }
    },
    created () {
      this.setLang()
    }
  }
</script>
