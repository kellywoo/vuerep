<template>
  <div class="app-page pg-home">
    <div class="pg-align">
      <!--<canvas class="home-visual" id="index_view"></canvas>-->
      <h2 class="pg-home-title animated bounceInDown">Vue&middot;tiful Korea 3rd!!</h2>
      <p class="pg-home-desc">
        <img src="/vue/assets/img/vue-optimized.png" class="flipInX animated" alt="Vue conference" />
      </p>
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
    }
  }
</script>

