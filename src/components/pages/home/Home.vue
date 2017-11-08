<template>
  <div class="app-page pg-home">
    <canvas class="home-visual" id="index_view"></canvas>
    <div class="pg-align">
      <p class="pg-home-desc animated bounceInDown"><strong class="fc-m-green">3회</strong>를 맞이한 <strong class="fc-m-green">Vue컨퍼런스</strong>에 여러분의 후원을 요청합니다.</p>
      <h2 class="pg-home-title">
        <img src="/assets/img/logo_3rd.png" class="flipInX animated" alt="Vue conference" />
      </h2>
      <span class="animate-count f-roboto"></span>
    </div>
  </div>
</template>
<script>
  import Confetti from '@/util/particler'

  export default {
    name: 'home',
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
    mounted () {
      this.$nextTick(() => {
        Confetti();
      })
    }
  }
</script>

