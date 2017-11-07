<template>
  <div class="v-slider">
    <ul class="v-slider-train">
      <slot></slot>
    </ul>
    <div class="v-slider-btns" v-if="length < 6">
      <button type="button" :title="'move to '+n " v-for="(item, n) in items"></button>
    </div>
    <div>
      <button type="button" title="to left" class="btn-to-left"></button>
      <button type="button" title="to right" class="btn-to-right"></button>
    </div>
  </div>
</template>
<script>
  import removeEvt from '@/mixin/handleEvent'
  import { $ } from '@/util/util'

  export default {
    mixins: [ removeEvt ],
    props: {
      max: {
        type: Number,
        default: 768
      },
      col: {
        type: Number,
        default: 3
      }
    },
    data () {
      return {
        parentEl: null,
        items: [],
        buttons: [],
        num: 0,
        length: 0,
        isActive: null
      }
    },
    methods: {

      trySlide (i) {
      },
      moveSlide () {
      },
      unFreezeSlide () {
      },
      freezeSlide () {
      },
      initItems () {
      },
      initParent () {
      },
      initButtons () {

      },
      checkWidth () {
      }
    },
    created () {
      this.length = this.$slots.default.length;
    },
    mounted () {
    }
  }
</script>
<style lang="scss">
  .slider-wrap {
    position: relative;

    &.is-moving {
      .slider-btn-box {
        display: block !important;
      }

      .slider-train {
        transition: left .4s linear;
      }
    }
  }

  .v-slider-train {
    position: relative;
  }

  .slider-btn-box {
    width: 100%;
    text-align: center;
    padding: 20px;
    display: none;
  }

  .btn-slide {
    width: 12px;
    height: 12px;
    background-color: #cecece;
    border-radius: 50%;
    margin: 0 7px;
    &.is-active {
      background-color: #768b98;
    }
  }
</style>
