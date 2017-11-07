<template>
  <section class="auto-section _autoSection" :style="styleObj" :class="{'with-next': arrow, 'dirty': dirty}">
    <slot :dirty="dirty"></slot>
    <button type="button" class="btn-autoscroll-next"  v-if="arrow"
            @click="goNext">
      <svg height="40" width="40" viewBox="0 0 80 46">
        <polyline points="10,10 40,40 70,10" stroke-linecap="round"
                  style="stroke:#d5d5d5; fill:transparent;stroke-width:6;"/>
      </svg>
    </button>
  </section>
</template>
<script>
  import { $ } from '@/util/util'

  export default {
    name: 'autoscroll-section',
    data () {
      return {
        dirty: false,
        toNext: function () {
        },
        animateInit: function () {

        }
      }
    },
    props: {
      className: {
        type: String
      },
      title: {
        type: String
      },
      minHeight: {
        default: '80vh'
      },
      arrow: {
        type: Boolean,
        default: false
      },
      direction: {
        default: 'none'
      },
      motion: {
        default: true
      }
    },
    computed: {
      styleObj () {
        return {
          minHeight: this.minHeight
        }
      }
    },
    methods: {
      markDirty () {
        if (!this.dirty) {
          this.dirty = true;
          $.util.isFunction(this.animateInit) && this.animateInit();
        }
      },
      goNext () {
        $.util.isFunction(this.toNext) && this.toNext()
      },
      getLocation (pageYOffset, top) {
        if ( pageYOffset >= top ) {
          return true;
        } else {
          return false;
        }
      }
    },
    mounted () {

    }
  }
</script>
<style lang="scss">
  $transition_distance: 200px;
  $target: '.transition-box';

  .auto-section {
    position: relative;
    width: inherit;
    overflow-x: hidden;
    overflow-y: hidden;

  }

  .auto-section {
    #{$target} {
      opacity: 0;
      transition: opacity 0.7s #{$easing_cubic}, transform 0.5s #{$easing_cubic};
    }

    &.top #{$target} {
      transform: translate(0, $transition_distance);
    }

    &.left #{$target} {
      transform: translate($transition_distance, 0px);
    }

    &.right #{$target} {
      transform: translate(#{-1 * $transition_distance}, 0);
    }

    &.bottom #{$target} {
      transform: translate(0, #{-1 * $transition_distance});
    }

    &.dirty #{$target} {
      opacity: 1 !important;
      transform: none;
    }
  }

  .btn-autoscroll-next {
    display: block;
    width: 60px;
    height: 60px;
    opacity: 0.5;
    position: absolute;
    border-radius: 50%;
    bottom: 50px;
    left: 50%;
    margin-left: -30px;
    transition: all 0.5s linear;
    outline: none;
    svg {
      margin-top: 5px;
      width: 50px;
      height: 50px;
    }
    &:hover {
      bottom: 30px;
      opacity: 1;
      background-color: #54aa8e;
      svg {
        polyline {
          stroke: #fff !important;
        }
      }
    }
  }

</style>
