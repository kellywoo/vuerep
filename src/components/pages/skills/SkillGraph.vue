<template>
  <svg class="v-pie-graph" :width="2*size+'px'" :height="2*size+'px'">
    <circle :cx="size" :cy="size" fill="none" :r="r" class="v-pie-back"></circle>
    <circle :cx="size" :cy="size" fill="none" :r="r" class="v-pie-line" :style="getStyle"></circle>
    <text class="v-pie-text"> {{ text }} </text>
  </svg>
</template>
<script>
  import { requestAniFrame } from '@/util/util'
  import easingEquations from '@/util/easing'
  export default {
    props: {
      size: {
        type: Number,
        required: true
      },
      percent: {
        type: Number,
        required: true,
        default: 100
      },
      colorstep: {
        type: Array,
        default: function () {
          return [ '#f00', 'yellow', 'black', 'green' ];
        }
      },
      time: {
        default: 800
      }
    },
    data () {
      return {
        line: 10,
        r: 0,
        dasharray: 0,
        dashoffset: 0,
        bgGraph: null,
        graph: null,
        svg: null,
        text: null,
        current: 0,
        gap: 100,
        to: 0,
        currentColorStep: 0
      }
    },
    computed: {
      getStyle () {
        return {
          strokeDasharray: this.dasharray,
          strokeDashoffset: this.dashoffset,
          stroke: this.colorstep[ this.currentColorStep ]
        }
      }
    },
    methods: {
      hexToRgb (hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[ 1 ], 16),
          g: parseInt(result[ 2 ], 16),
          b: parseInt(result[ 3 ], 16)
        } : null;
      },
      rgbToHex (r, g, b) {
        return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
      },
      componentToHex (c) {
        let hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      },
      updateGraph (percent) {
        this.text = parseInt(percent);
        for ( let i = 0; i < this.colorstep.length; i++ ) {
          if ( this.text > i * this.gap && this.text <= (i + 1) * this.gap ) {
            this.currentColorStep = i;
            console.log(i);
            break;
          }
        }
        this.dashoffset = (100 - parseInt(percent)) * this.dasharray / 100;
      },
      tick () {
        let p = this.current++ / this.to;
        let text = this.percent * easingEquations[ 'easeOutSine' ](p);

        if ( p < 1 ) {
          this.updateGraph.call(this, text);
          this.move();
        } else {
          this.updateGraph(this.percent);
        }
      },
      move () {
        requestAniFrame(this.tick.bind(this));
      }
    },
    created () {
      this.to = this.time * 60 / 1000;
      this.r = this.size - this.line;
      this.dasharray = 2 * Math.PI * this.r;
      this.dashoffset = 2 * Math.PI * this.r;
      this.gap = 100 / this.colorstep.length;
      this.updateGraph(0);
    },
    mounted () {
      this.$emit('readyTick', this.tick.bind(this));
    }
  }
</script>
<style lang="scss">
  .v-pie-graph {
    display: block;
    .v-pie-back {
      position: absolute;
      stroke-dashoffset: 0;
      stroke: #eee;
      stroke-width: 10;
    }
    .v-pie-line {
      position: absolute;
      stroke: #f00;
      stroke-width: 10;
      stroke-linecap: round;
      transform: rotate(90deg);
      transform-origin: 50% 50% 0;
    }
    .v-pie-text {
      margin-top: 20px;
      width: 100%;
      text-align: center;
    }
  }
</style>
