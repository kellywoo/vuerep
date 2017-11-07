<template>
  <div class="app-page pg-home">
    <canvas class="home-visual" id="index_view"></canvas>
    <div class="pg-align">
      <!--<p class="pg-home-desc"><strong>3회</strong>를 맞이한 <strong>Vue컨퍼런스</strong>에 여러분의 후원을 요청합니다.</p>-->
      <h2 class="pg-home-title">
        <img src="/assets/img/logo-round.png" class="flipInX animated" alt="Vue conference" />
      </h2>
      <span class="animate-count f-roboto"></span>
    </div>
  </div>
</template>
<script>
  import { ko } from './lang'
  import setLang from '@/mixin/lang'
  import { Particler } from '@/util/particler'

  export default {
    name: 'home',
    mixins: [setLang],
    data () {
      return {
        language: 'home'
      }
    },
    props: {
      title: {
        type: String
      }
    },
    created () {
      this.setLang()
    },
    mounted () {
      this.$nextTick(() => {
        return new Particler('index_view', {
          fillColor: '#d3c1af'
        })
      })
      this.$parent.animateInit = () => {
        setTimeout(() => {
          this.$parent.goNext()
        }, 5000)
      }
    }
  }
</script>
<style lang="scss">
  .animate-count {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    font-size: 10rem;
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg,#f35626,#feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      content: ' ';
      animation-delay: 1s;
      animation-name: count;
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
  @keyframes count {
    0% {
      content: '1';
      opacity: 0;
    }
    33% {
      content: '1';
      opacity: 1
    }
    34% {
      opacity: 0;
    }
    66% {
      content: '2';
      opacity: 1;
    }
    67% {
      opacity: 0;
    }
    99% {
      content: '3';
      opacity: 1;
    }
    100% {
      content: ' '
    }
  }
</style>
