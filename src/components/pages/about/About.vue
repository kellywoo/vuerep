<template>
  <div class="app-page pg-about">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">&lt;Intro/&gt;</h2>
        <strong class="pg-summary">3회를 맞이한 Vue컨퍼런스에 여러분의 후원을 요청합니다.</strong>
        <p class="pg-desc">Vue.js는 MVVM 패턴을 녹여사용자 인터페이스를 만들기 위한 진보적인 프레임 워크입니다.
         타 단일형 프레임 워크와 달리 점진적으로 채택할 수 있게 설계되어 있으며 타 라이브러리나 기존 프로젝트와의 통합이 매우 쉬운 특징이 있습니다.</p>
      </div>
      <div class="pg-inner-body pg-about-ci transition-box">
        Vue Launching History : 2014년 2월 11일


        <ul class="about-launch lo-col col-3">
          <li>
            <dl>
              <dt>누가?</dt>
              <dd class="img-box">
                <img src="/assets/img/evanyou.jpg" alt="evan you"/>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>무엇을</dt>
              <dd class="img-box">
                <img src="/assets/img/logo.png" alt="evan you" style="width: 70px; height:70px;margin-top:20px;" />
              </dd>
              <!--<dd>2014년 2월 11일</dd>-->
            </dl>
          </li>
          <li>
            <dl>
              <dt>어디에?</dt>
              <dd>26,809 visits</dd>
            </dl>
          </li>
        </ul>
        <dl>
          <dt>더 자세한 내용은 아래에서</dt>
          <dd>http://blog.evanyou.me/2014/02/11/first-week-of-launching-an-oss-project/</dd>
        </dl>
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
<style lang="scss">
  .about-launch {
    .img-box {
      border: 5px solid #ffc564;
      @include square(120px);
      border-radius: 50%;
      overflow: hidden;
      background-color: #0f0f0f;
      text-align: center;
      & > img {
        width: 100%;
      }
    }
  }
</style>
