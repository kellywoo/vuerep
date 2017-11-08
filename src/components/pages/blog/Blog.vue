<template>
  <div class="app-page pg-blog">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <p class="pg-summary">뷰티풀 코리아는 이제 3회를 맞이합니다.</p>
        <p class="pg-desc">1, 2회를 성공적으로 개최하고 이제 3회를 준비, 앞으로도 지속적으로 커퓨니티를 발전시켜 나갑니다.</p>
      </div>
      <div class="pg-inner-body transition-box">
        <div class="vuetiful-history">
          <div>
            <h4>1회</h4>
            <div>

            </div>
            <dl>
              <dt>일시</dt>
              <dd></dd>
              <dt>위치</dt>
              <dd></dd>
              <dt>참석자수</dt>
              <dd></dd>
              <dt>발표자수</dt>
              <dd></dd>
              <dt>발표자료</dt>
              <dd></dd>
            </dl>
          </div>
        </div>
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
