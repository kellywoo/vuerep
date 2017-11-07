<template>
  <div class="app-page pg-about">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">&lt;Intro/&gt;</h2>
        <strong class="pg-summary"><span class="fc-m-green">Vue.js</span>는 MVVM 패턴을 녹여사용자 인터페이스를 만들기 위한 <span class="fc-m-green">진보적인 프레임 워크</span>입니다.</strong>
        <p class="pg-desc">
         <strong  class="fc-m-green">'에반 유'</strong>에 의해 2014년 2월 11일 깃헙을 통해 공개 되었으며<br class="p-br" /> 타 단일형 프레임 워크와 달리 점진적으로 채택할 수 있게 설계되어 있어<br class="p-br" /> 타 라이브러리나 기존 프로젝트와의 통합이 매우 쉬운 특징이 있습니다.</p>
      </div>
      <div class="pg-inner-body pg-about-content transition-box">
        <h3 class="pg-inner-title txt-c">Vue Launching History<br />2014년 2월 11일</h3>
        <ul class="about-launch lo-col col-3">
          <li>
            <dl class="about-launch-desc">
              <dt>누가?</dt>
              <dd class="img-box">
                <img src="/assets/img/evanyou.jpg" alt="evan you"/>
              </dd>
            </dl>
          </li>
          <li>
            <dl class="about-launch-desc">
              <dt>무엇을</dt>
              <dd class="img-box">
                <img src="/assets/img/logo-round.png" alt="evan you" />
              </dd>
              <!--<dd>2014년 2월 11일</dd>-->
            </dl>
          </li>
          <li>
            <dl class="about-launch-desc">
              <dt>결과는?</dt>
              <dd class="img-box txt-box"><span class="fc-m-green">26,809</span> visits<br />on first day<br /><span class="icon-thumbs-o-up"></span></dd>
            </dl>
          </li>
        </ul>
        <div class="about-launch-more">
            <a class="btn-more-launch" href="http://blog.evanyou.me/2014/02/11/first-week-of-launching-an-oss-project/"
               title="move to Evan You blog"
               target="_blank">더 자세한 내용은 여기서</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import setLang from '@/mixin/lang'

  export default {
    name: 'about-us',
    mixins: [ setLang ],
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        language: 'about'
      }
    },
    created () {
      this.setLang()
    }
  }
</script>

