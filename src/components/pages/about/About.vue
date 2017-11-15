<template>
  <div class="app-page pg-about">
    <div class="pg-align layout-apart">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <strong class="pg-summary"><span class="fc-m-green">Vue.js</span>는 MVVM 패턴을 이용 보다 편한 사용자 인터페이스를 만들기 위한 <span
          class="fc-m-green">진보적인 프레임 워크</span>입니다.</strong>
        <p class="pg-desc">
          '에반 유'에 의해 2014년 2월 11일 깃헙을 통해 공개 된 자바스크립트 오픈소스로  가상 돔을 이용 html의 재렌더링을 최소화한 프레임 워크로 타 라이브러리와의 결합이 쉬워 프로젝트시 점진적으로 채택할 수 있게 설계할 수 있습니다. 또한 기존 html 문법을 그대로 본딴 템플릿 문법은 누구나 쉽게 사용할 수 있어 협업 시에 편리하며 메써드나 라이프싸이클 훅 이름이 직관적이라 러닝커브가 타 라이브러리에 비해 낮습니다.</p>
      </div>
      <div class="pg-inner-body pg-about-content transition-box">
        <h3 class="pg-inner-title txt-c">Vue 에 대한 몇가지 사실</h3>
        <ul class="about-vue lo-col col-3">
          <li>
            <figure></figure>
            <dl class="about-vue-fact">
              <dt>First Release</dt>
              <dd class="n-1">
                <div class="vue-fact-desc">
                  <strong class="">2014.02.11</strong>
                  <div v-align:aboutVue>
                    <p>
                      Github 페이지를 통해 버전 0.6이 2014년 2월 11일에 발표되었고 2월2일 부터 발표 당일까지 <span class="fc-m-green">26,809</span>회의 방문이 기록되었다.
                    </p>
                  </div>
                  <a class="vue-fact-link" target="_blank"
                     href="http://blog.evanyou.me/2014/02/11/first-week-of-launching-an-oss-project/">More about Launch</a>
                </div>
              </dd>
            </dl>
          </li>
          <li>
            <dl class="about-vue-fact">
              <dt>Creator</dt>
              <dd class="n-2">
                <div class="vue-fact-desc">
                  <strong>Evan You</strong>
                  <div v-align:aboutVue>
                    <p>Google의 Creative Lab에서 Technologist로 일하며 angular 커밋터로 활동했으며 현재는 풀타임 vue 커밋터로 일하고 있다.
                    </p>
                  </div>
                  <a class="vue-fact-link" target="_blank" href="https://www.linkedin.com/in/evanyou">More about Creator</a>
                </div>
              </dd>
            </dl>
          </li>
          <li>
            <dl class="about-vue-fact">
              <dt>Conference</dt>
              <dd class="n-3">
                <div class="vue-fact-desc">
                  <strong>Official VueConf</strong>
                  <div v-align:aboutVue>
                    <p>
                      첫 공식 행사는 2017.06.22-23 폴란드 Wroclaw에서 열렸으며 일본,중국,한국 등 아시이에서 많은 밋업 형식으로 행해지고 있다.
                      </p>
                  </div>
                  <a class="vue-fact-link" href="https://www.youtube.com/watch?v=TsgdiXGWlIY&feature=youtu.be"
                     target="_blank">More about Conf</a>
                </div>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about-us',
    props: {
      title: {
        type: String
      }
    }
  }
</script>
<style lang="scss">
  .about-vue-fact {
    position: relative;
  }

  $bg: #212121;
  .tooltip {
    position: absolute;
    width: 100%;
    text-align: center;
    z-index: 100;
  }

  .tooltip-desc {
    border-radius: 3px;
    padding: 8px 1.25rem 6px;
    background-color: $bg;
    color: #fff;
    position: relative;
    display: inline-block;
    &::before {
      content: ' ';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border: 1px solid #000;
      border-radius: 3px;
      background-color: inherit;
      z-index: -1;
    }
    &::after {
      content: ' ';
      background-color: $bg;
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      top: -5px;
      border: 1px solid #000;
      z-index: -1;
      transform: rotate(45deg);
      transform-origin: 50% 50%;
    }
  }

  .tooltip-tc {

  }
</style>
