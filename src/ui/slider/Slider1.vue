<template>
  <div class="v-slider">
    <ul class="v-slider-train">
      <slot></slot>
    </ul>
    <nav class="v-slider-btns" v-if="len < 6">
      <button type="button" :title="'move to '+n " v-for="(item, n) in items"></button>
    </nav>
    <div>
      <button type="button" title="to left" class="v-slider-wheel wheel-left icon-arrow-left"
              @click="moveLeft"><span class="off-grid">왼쪽으로</span></button>
      <button type="button" title="to right" class="v-slider-wheel wheel-right icon-arrow-right"
              @click="moveRight"><span class="off-grid">오른쪽으로</span></button>
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
        len: 0,
        current: 0
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

      },
      setPosition () {

      },
      goSlider (n) {
        // direction true means direction is right;
        var direction = this.current - n > 0;
        direction ? this.setLeft(n) : this.setRight(n);
        direction ? this.setRight(this.current) : this.setLeft(this.current);
        this.setCenter(n);
      },
      setLeft (n) {
        this.items[ n ].style.left = '-100%';
      },
      setRight (n) {
        this.items[ n ].style.left = '100%';
      },
      setCenter (n) {
        this.items[ n ].style.left = '0';
        this.current = n;
      },
      getLeft (n) {
        return n === 0 ? this.len - 1 : n - 1;
      },
      getRight (n) {
        return n === this.len - 1 ? 0 : n + 1;
      },
      moveLeft () {
        this.goSlider(this.getRight(this.current))
      },
      moveRight () {
        this.goSlider(this.getLeft(this.current))
      }
    },
    created () {
      this.len = this.$slots.default.length;
    },
    mounted () {
      this.$children.forEach((v, i) => {
        let _style = 'top: 0;width:100%';
        if ( i !== 0 ) {
          _style += ';position:absolute;left: 100%'
        } else {
          _style += ';position:relative;left: 0%'
        }
        v.$el.style.cssText = _style;
        this.items.push(v.$el);
      });
    }
  }
</script>
<style lang="scss">
  .v-slider {
    position: relative;
    box-shadow: inset 0 0 5px 0 rgba(0,0,0,0.1);
    overflow: hidden;
  }

  .v-slider-train {
    position: relative;
  }

  .v-slider-item {
    line-height: 0;
    img {
      width: 100%;
      vertical-align: top;
    }
  }

  .slider-btn-box {
    width: 100%;
    text-align: center;
    padding: 20px;
    display: none;
  }
  $wheel_size: 25px;
  .v-slider-wheel {
    outline: none;
    position: absolute;
    top: 0;
    height: 100%;
    width: $wheel_size;
    font-size: 1rem;
    text-align: center;
    background-color: rgba(255,255,255, 0.3);
    color: #000;
    transition: left .3s, right .3s;
    &:hover {
    }
    &.wheel-left {
      left: -1 * $wheel_size;
    }
    &.wheel-right {
      right: -1 * $wheel_size;
    }
  }
  .v-slider:hover {
    .v-slider-wheel {
      &.wheel-left {left:0;}
      &.wheel-right {right: 0}
    }
  }
  .v-slider-btns {
    position: absolute;
  }

  .v-slider-btn {
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
