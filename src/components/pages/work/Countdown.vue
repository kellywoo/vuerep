<template>
  <span>{{cn}}</span>
</template>
<script>
  import { $, requestAniFrame } from '@/util/util'
  import easingEquations from '@/util/easing'
  export default {
    props: {
      num: {
        type: Number,
        required: true
      },
      speed: {
        type: Number,
        default: 2400
      },
      flag: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cn: 0,
        current: 0,
        to: 0,
      }
    },
    methods: {
      countUp () {
        let p = this.current++ / this.to;
        this.cn = $.util.toCash(this.num * easingEquations[ 'easeOutQuint' ](p));

        if ( p < 1 ) {
          requestAniFrame()(this.countUp);
        } else {
          this.cn = $.util.toCash(this.num);
          this.endCounting();
        }
      },
      endCounting () {
        this.$emit('end')
      }
    },
    created () {
      this.to = this.speed * 60 / 1000
    },
    watch: {
      flag (nv) {
        if(nv) {
          this.countUp();
        }
      }
    }
  }
</script>
<style></style>