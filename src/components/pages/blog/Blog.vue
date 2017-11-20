<template>
  <div class="app-page pg-blog">
    <div class="pg-align layout-apart">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{title}}</h2>
        <p class="pg-summary">뷰티풀 코리아는<br/><strong class="fc-m-green">3번째 이야기를 준비</strong>하고 있습니다.</p>
        <p class="pg-desc">많은 분들의 격려와 성원에 힘입어 1,2 회를 성공적으로 끝내고
          많은 아쉬움이 남았습니다.<br />
          Vue는 프론트엔드 개발자분들 뿐 아니라 디자이너분, 퍼블리셔분 백엔드 개발자분들까지<br/>다양한 영역의 관심을 받고 있으며 다양한 시선의 질문이 오갑니다.
          <br/>이런 내용들을 함께 다루고 나눈다면 더 의미있는 일이라고 생각합니다.<br/>
        </p>
      </div>
      <div class="pg-inner-body">
        <h3 class="great-third">
          <span></span>
          <svg class="svgIcon-use" width="33" height="33" viewBox="0 0 33 33">
            <path
              d="M28.86 17.342l-3.64-6.402c-.292-.433-.712-.729-1.163-.8a1.124 1.124 0 0 0-.889.213c-.63.488-.742 1.181-.33 2.061l1.222 2.587 1.4 2.46c2.234 4.085 1.511 8.007-2.145 11.663-.26.26-.526.49-.797.707 1.42-.084 2.881-.683 4.292-2.094 3.822-3.823 3.565-7.876 2.05-10.395zm-6.252 11.075c3.352-3.35 3.998-6.775 1.978-10.469l-3.378-5.945c-.292-.432-.712-.728-1.163-.8a1.122 1.122 0 0 0-.89.213c-.63.49-.742 1.182-.33 2.061l1.72 3.638a.502.502 0 0 1-.806.568l-8.91-8.91a1.335 1.335 0 0 0-1.887 1.886l5.292 5.292a.5.5 0 0 1-.707.707l-5.292-5.292-1.492-1.492c-.503-.503-1.382-.505-1.887 0a1.337 1.337 0 0 0 0 1.886l1.493 1.492 5.292 5.292a.499.499 0 0 1-.353.854.5.5 0 0 1-.354-.147L5.642 13.96a1.338 1.338 0 0 0-1.887 0 1.338 1.338 0 0 0 0 1.887l2.23 2.228 3.322 3.324a.499.499 0 0 1-.353.853.502.502 0 0 1-.354-.146l-3.323-3.324a1.333 1.333 0 0 0-1.886 0 1.325 1.325 0 0 0-.39.943c0 .356.138.691.39.943l6.396 6.397c3.528 3.53 8.86 5.313 12.821 1.353zM12.73 9.26l5.68 5.68-.49-1.037c-.518-1.107-.426-2.13.224-2.89l-3.303-3.304a1.337 1.337 0 0 0-1.886 0 1.326 1.326 0 0 0-.39.944c0 .217.067.42.165.607zm14.787 19.184c-1.599 1.6-3.417 2.392-5.353 2.392-.349 0-.7-.03-1.058-.082a7.922 7.922 0 0 1-3.667.887c-3.049 0-6.115-1.626-8.359-3.87l-6.396-6.397A2.315 2.315 0 0 1 2 19.724a2.327 2.327 0 0 1 1.923-2.296l-.875-.875a2.339 2.339 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.647l-.139-.139c-.91-.91-.91-2.39 0-3.3.884-.884 2.421-.882 3.301 0l.138.14a2.335 2.335 0 0 1 3.948-1.24l.093.092c.091-.423.291-.828.62-1.157a2.336 2.336 0 0 1 3.3 0l3.384 3.386a2.167 2.167 0 0 1 1.271-.173c.534.086 1.03.354 1.441.765.11-.549.415-1.034.911-1.418a2.12 2.12 0 0 1 1.661-.41c.727.117 1.385.565 1.853 1.262l3.652 6.423c1.704 2.832 2.025 7.377-2.205 11.607zM13.217.484l-1.917.882 2.37 2.837-.454-3.719zm8.487.877l-1.928-.86-.44 3.697 2.368-2.837zM16.5 3.293L15.478-.005h2.044L16.5 3.293z"
              fill-rule="evenodd"></path>
          </svg>
        </h3>
        <div class="transition-box">
          <div class="pg-inner-group">
            <dl class="vuetiful-third">
              <dt>날짜는?</dt>
              <dd>2017.12.01<span>(금)</span></dd>
              <dt>장소는?</dt>
              <dd>선릉 Dcamp(변경가능)<br /><button type="button" class="tgg-location icon-location" @click="showLocation = !showLocation">지도보기</button>
                <location class="vuetiful-location"
                          v-show="showLocation" :showMap="showLocation"></location></dd>
              <dt>참여자는?</dt>
              <dd>100명 내 외</dd>
              <dt>발표주제?</dt>
              <dd>Digging Deep Vue</dd>
              <dt>스케쥴은?</dt>
              <dd>
                <div class="vuetiful-schedule">
                  <dl><dt>7:00</dt><dd>시작</dd></dl>
                  <dl><dt>7:00-7:20</dt><dd>발표1</dd></dl>
                  <dl><dt>7:20-7:30</dt><dd>스폰서 채용광고 및 break</dd></dl>
                  <dl><dt>7:30-7:50</dt><dd>발표2</dd></dl>
                  <dl><dt>7:50-8:00</dt><dd>스폰서 채용광고 및 break</dd></dl>
                  <dl><dt>8:00-8:20</dt><dd>발표3</dd></dl>
                  <dl><dt>8:20-8:30</dt><dd>스폰서 채용광고 및 break</dd></dl>
                  <dl><dt>8:30-9:20</dt><dd>Q&A 및 레크리에이션</dd></dl>
                  <dl><dt>9:20-9:50</dt><dd>네트워킹</dd></dl>
                  <dl><dt>9:50-10:00</dt><dd>정리</dd></dl>
                </div>
                <p style="font-size:0.8rem;margin-top:20px;letter-spacing:1px">위 스케쥴은 추후 변경 가능합니다.</p>
              </dd>
              <dt>후원</dt>
              <dd>
                <ul class="sponsor-list">
                  <li class="sponsor-item"><a title="coin one" href="https://coinone.co.kr/" target="_blank"><span class="off-grid">coin one</span></a></li>
                </ul>
              </dd>
              <dt>개인참여신청?</dt>
              <dd><a href="https://www.tumblbug.com/bb93f593-459b-40fe-9695-81ad4cb2e814" target="_blank" class="btn-green">3회 신청하러 가기</a></dd>
              <dt>1,2회가 궁금해?</dt>
              <dd>
                <history></history>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import History from './History.vue'
  import Location from './locationMap'
  export default {
    name: 'blog',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        showLocation: false
      }
    },
    components: {
      history: History,
      location: Location
    }
  }
</script>
<style lang="scss">
  .great-third {
    $great_color: #fff;
    background-color: #000;
    color: $great_color;
    text-align: center;
    padding: 7px 0 10px;

    margin-bottom: 100px;
    font-size: 1.5rem;
    span {
      display: inline-block;
      line-height: 1.8;
      letter-spacing: 10px;
      &::before {
        content: '그래서 3회l!!';
        white-space: nowrap;
        animation: textshow 3s infinite;
      }
      &::after {
        content: ' ';
        display: inline-block;
        margin-left: calc(-1em - 10px);
        height: 2px;
        vertical-align: bottom;
        width: 1em;
        background-color: #eee;
      }
    }
    svg {
      vertical-align: text-bottom;
      stroke: $great_color;
    }
  }

  @keyframes textshow {

    0% {
      content: '그'
    }
    15% {
      content: '그래'
    }

    25% {
      content: '그래서'

    }
    50% {
      content: '그래서 3'

    }
    65% {
      content: '그래서 3회!!!'

    }
    100% {
      content: '그래서 3회!!!'
    }
  }

</style>
