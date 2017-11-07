<template>
  <div class="switch" :class="{'is-right' : isRight}">
    <label v-if="left" class="switch-left-label" @click="goLeft">{{leftTarget.label}}</label>
    <div class="switch-path" @click="switchOption">
      <span class="switch-button" :class="isRight && 'right'"></span>
    </div>
    <label v-if="right" class="switch-right-label" @click="goRight">{{rightTarget.label}}</label>
  </div>
</template>
<script>
  import { $ } from '@/util/util'
  export default {
    props: {
      left: {},
      right: {},
      width: {
        type: Number
      },
      start: {
        default: 'left'
      },
      onOff: {
        default: false
      }
    },
    data () {
      return {
        isRight: false,
        leftTarget: {},
        rightTarget: {}
      }
    },
    created () {
      this.leftTarget = this.initValue(this.right);
      this.rightTarget = this.initValue(this.left);
      this.isRight = this.start !== 'left';
    },
    computed: {
      styleObj () {
        return {
          color: this.color
        }
      }
    },
    methods: {
      initValue (obj) {
        let ret = {};
        if ( $.util.isString(obj) ) {
          ret.value = obj;
          ret.label = obj;
        } else if ( $.util.isObject(obj) ) {
          if ( obj.hasOwnProperty('value') && obj.hasOwnProperty('label') ) {
            ret.value = obj.value;
            ret.label = obj.label;
          } else {
            console.warn('object is expected to have a value and a label property');
            this.$destory();
          }
        }
        return ret;
      },
      switchOption (e) {
        if ( e.target === e.currentTarget ) {
          this.isRight ? this.goLeft() : this.goRight();
        }
      },
      goLeft () {
        this.isRight = false;
        this.emitSelected(this.leftTarget);
      },
      goRight () {
        this.isRight = true;
        this.emitSelected(this.rightTarget);
      },
      emitSelected (obj) {
        this.$emit('onChange', obj);
      }
    }
  }
</script>
<style lang="scss">
  $height : 1.6em;
  .switch {
    display: inline-block;
    cursor: pointer;
    white-space: nowrap;
    line-height: $height;
  }

  .switch-path {
    height: $height;
    border-radius: 0.8em;
    width: 3.2em;
    vertical-align: middle;
    background-color: #d5ecf8;
    display: inline-block;
    position: relative;
    box-shadow: inset 0 2px 3px -1px rgba(0, 0, 0, .4);

    &::before {
      display: block;
      float: left;
      height: 100%;
    }

    &::after {
      display: block;
      float: right;
      height: 100%;
    }
  }

  .switch-left-label {
    margin-right: 5px;
    color: inherit;
    cursor: pointer;
  }

  .switch-right-label {
    margin-left: 5px;
    color: inherit;
    cursor: pointer;
  }

  .switch-button {
    font-size: inherit;
    background-color: #2c9fdd;
    display: block;
    border-radius: 100%;
    position: absolute;
    width: 1.6em;
    height: 1.6em;
    padding: 1px;
    top: 0px;
    left: 0px;
    cursor: pointer;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12), inset -1px 2px 3px -1px rgba(255, 255, 255, .2), inset -1px -2px 3px -1px rgba(0, 0, 0, .3);
    transition: left .3s cubic-bezier(.25, .8, .25, 1);
  }

  .switch-button.right {
    left: 50%;
  }

</style>