<template>
  <div>
    <v-tabs class="vuetiful-history clear-fix" @changed="getChange">
      <v-tab class="first-vuetiful" title="1회">
        <div class="vuetiful-pics">
          <v-slider v-if="display===0">
            <v-slider-item v-for="i in 6" :key="i" data-dummy>
              <img src="/assets/img/logo_round.png" alt="vue 사진" />
            </v-slider-item>
            <v-slider-item v-for="i in 5" :key="i">
              <img :src="'/assets/img/1st/meetup_'+i+'.jpg'" alt="첫번째 meetup 사진" />
              <figcaption>1회 뷰티풀 코리아</figcaption>
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
          <dt>발표자</dt>
          <dd>
            <ul class="presenter-list">
              <li v-for="(name, i) in first" :key="i">
                <img :src="'/assets/img/1st/'+(i+1)+'.jpg'" :title="name" alt="발표자 사진" />
              </li>
            </ul>
          </dd>
          <dt>발표자료</dt>
          <dd class="break-url">
            <a class="break-url f-hu" href="https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/04/23/meet-up-slide/" target="_blank">https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/04/23/meet-up-slide/</a></dd>
        </dl>
      </v-tab>
      <v-tab class="second-vuetiful"  title="2회">
        <div class="vuetiful-pics">
          <v-slider v-if="display===1">
            <v-slider-item v-for="i in 6" :key="i" data-dummy>
              <img src="/assets/img/logo_round.png" alt="vue 사진" />
            </v-slider-item>
            <v-slider-item v-for="i in 5" :key="i">
              <img :src="'/assets/img/2nd/meetup_'+i+'.jpg'" alt="두번째 meetup 사진" />
              <figcaption>2회 뷰티풀 코리아</figcaption>
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
          <dt>발표자</dt>
          <dd>
            <ul class="presenter-list">
              <li v-for="(name, i) in second" :key="i">
                <img :src="'/assets/img/2nd/'+(i+1)+'.jpg'" :title="name" alt="발표자 사진" />
              </li>
            </ul></dd>
          <dt>발표자료</dt>
          <dd class="break-url f-hu">
            <a class="break-url" href="https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/11/06/meet-up-2nd-slide/" target="_blank">https://vuejs-kr.github.io/vue/meetup/vuetiful/korea/2017/11/06/meet-up-2nd-slide/</a></dd>
        </dl>
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        display: 0,
        first: ['박새미님','차경묵님','이승민님','김인숙님','조민환님'],
        second: ['정준석님','박새미님','이치웅님','이승민님','김한웅님','이선협님','임석민님'],
      }
    },
    methods: {
      getChange (num) {
       this.display = num;
      }
    }
  }
</script>