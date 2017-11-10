<template>
  <div class="app-page pg-blog">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <p class="pg-summary">뷰티풀 코리아는 이제 3회를 맞이합니다.</p>
        <p class="pg-desc">1, 2회를 성공적으로 개최하고 이제 3회를 준비, 앞으로도 지속적으로 커퓨니티를 발전시켜 나갑니다.</p>
      </div>
      <div class="pg-inner-body transition-box">
        <div></div>
        <div class="btn-box" v-show="!openHistory">
          <button type="button" @click="openHistory = true">지난 회 보기</button>
        </div>
        <v-tabs class="vuetiful-history clear-fix">
          <v-tab class="first-vuetiful" title="1회">
            <div class="vuetiful-pics">
              <v-slider>
                <v-slider-item v-for="i in 6" :key="i" data-dummy>
                  <img src="/assets/img/logo_round.png" alt="vue 사진" />
                </v-slider-item>
                <v-slider-item v-for="i in 5" :key="i">
                  <img :src="'/assets/img/1st/meetup_'+i+'.jpg'" alt="첫번째 meetup 사진" />
                </v-slider-item>
              </v-slider>
            </div>
            <dl class="vuetiful-desc">
              <dt>일시</dt>
              <dd>2017.04.19</dd>
              <dt>위치</dt>
              <dd>D.CAMP(디캠프) 6층</dd>
              <dt>참석자수</dt>
              <dd>100명</dd>
              <dt>발표자(5명)</dt>
              <dd>
                <ul class="presenter-list">
                  <li v-for="i in 5">
                    <img :src="'/assets/img/1st/'+i+'.jpg'" alt="발표자 사진" />
                  </li>
                </ul>
              </dd>
              <dt>발표자료</dt>
              <dd class="break-url">
                <a class="break-url" href="https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/04/23/meet-up-slide/" target="_blank">https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/04/23/meet-up-slide/</a></dd>
            </dl>
          </v-tab>
          <v-tab class="second-vuetiful"  title="2회">
            <div class="vuetiful-pics">
              <v-slider>
                <v-slider-item v-for="i in 6" :key="i" data-dummy>
                  <img src="/assets/img/logo_round.png" alt="vue 사진" />
                </v-slider-item>
                <v-slider-item v-for="i in 5" :key="i">
                  <img :src="'/assets/img/2nd/meetup_'+i+'.jpg'" alt="두번째 meetup 사진" />
                </v-slider-item>
              </v-slider>
            </div>
            <dl class="vuetiful-desc">
              <dt>일시</dt>
              <dd>2017.08.23</dd>
              <dt>위치</dt>
              <dd>팁스타운 S1 지하 이벤트홀</dd>
              <dt>참석자수</dt>
              <dd>100명</dd>
              <dt>발표자(7명)</dt>
              <dd>
                <ul class="presenter-list">
                  <li v-for="i in 7">
                    <img :src="'/assets/img/2nd/'+i+'.jpg'" alt="발표자 사진" />
                  </li>
                </ul></dd>
              <dt>발표자료</dt>
              <dd class="break-url">
                <a class="break-url" href="https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/11/06/meet-up-2nd-slide/" target="_blank">https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/11/06/meet-up-2nd-slide/</a></dd>
            </dl>
          </v-tab>
        </v-tabs>
      </div>
      <div class="btn-box txt-c">
        <!--<a href="#" target="_blank" class="btn-jump f-roboto">{{i18n.btn}}</a>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'blog',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        language: 'blog',
        openHistory: false
      }
    }
  }
</script>
<style>

</style>
