<template>
  <div class="v-photostack">
    <div class="v-photostack-board">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import removeEvt from '@/mixin/handleEvent'
  import { $ } from '@/util/util'
  import PhotoStack from '@/util/photostack'
  export default {
    mixins: [ removeEvt ],
    data () {
      return {
        parentEl: null,
        items: [],
        buttons: [],
        len: 0,
        current: 0,
        photostack: {}
      }
    },
    methods: {},
    created () {
      this.len = this.$slots.default.length;
    },
    mounted () {
      this.$children.forEach((v, i) => {
        this.items.push(v.$el);
      });
      setTimeout(() => {
        this.photostack = new PhotoStack(this.$el, {
          callback: function (item) {
            console.log(item);
          }
        })
      },500)
    },
    beforeDestroy () {
      console.log('beforedestroy',)
      this.photostack._destroy();
    }
  }
</script>
<style lang="scss">
  .v-photostack {
    position: relative;
    text-align: center;
    padding-bottom: 50px;
  }

  .v-photostack-board {
    background-color: #ddd;
    position: relative;
    height: 45vh;
    overflow: hidden;
    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(4,4,4,0.05);
      box-shadow: inset 0 0 40px 8px rgba(#266590,0.1)
    }
  }

  .v-photostack-item {
    line-height: 0;
    position: absolute;
    width: 48%;
    max-width: 400px;
    padding: 10px 10px 10px;
    background-color: #f3f3f3;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.12);
    transition: transform 0.4s;
    img {
      width: 100%;
      vertical-align: top;
    }
    figcaption {
      display: block;
      line-height: 1;
      font-size: 0.75rem;
      margin-top: 10px;
      color: #41b883;
      text-align: right;
      letter-spacing: 3px;
    }
    &[data-dummy] {
      padding: 20px 10px 20px;
      text-align: center;
      img {
        width: 50%;
      }
    }
  }

  .photostack-current {
    transform-origin: 0% 50%;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.3)
  }

  /* Navigation dots */
  .photostack-btn {
    position: absolute;
    width: 100%;
    bottom: 5px;
    padding: 5px 0;
    z-index: 90;
    text-align: center;
    left: 0;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .photostack-start .photostack-btn {
    opacity: 0;
  }

  .photostack-btn {

    button {
      outline: none;
      position: relative;
      display: inline-block;
      margin: 0 10px;
      @include square(12px);
      cursor: pointer;
      background: #aaa;
      border-radius: 50%;
      text-align: center;
      -webkit-transition: -webkit-transform 0.6s ease-in-out, background 0.3s;
      transition: transform 0.6s ease-in-out, background 0.3s
    }

    button:last-child {
      margin-right: 0;
    }

    button.current {
      background: #a52a2d;
    }

    button.flippable::after {
      opacity: 1;
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
    }
  }

</style>
