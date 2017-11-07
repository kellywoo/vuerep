<template>
  <div class="msg-box">
    <slot></slot>
    <div class="msg-deliver" :class="{'with-btn': btn}" v-show="show">
      <div class="msg-content" v-html="msg"></div>
      <button class="btn-hide-msg" type="button" aria-label="hide message" @click="hide">X</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'msg-box',
    props: {
      msg: '',
      show: {
        type: Boolean
      },
      btn: {
        type: Boolean
      }
    },
    methods: {
      hide () {
        this.$emit('hide')
      }
    }
  }
</script>
<style lang="scss">
  .msg-box {
    $color: rgba(255,255,255,0.8);
    .msg-deliver {
      padding: 10px 15px;
      border-radius: 5px;
      margin-top: 5px;
      position: relative;

      &.with-btn {
        padding: 10px 25px 10px 15px;
      }
    }
    &.is-info .msg-deliver {
      background-color: rgba(#f1f1f1, 0.8);
      color: #d5d5d5;
      .btn-hide-msg {
        color: #d5d5d5;
      }
    }
    &.is-help .msg-deliver {
      background-color: rgba(#2f96b4, 0.8);
      color: $color;
    }
    &.is-warn .msg-deliver {
      background-color: rgba(#f0ad4e, 0.8);
      color: $color;
    }
    &.is-gentle-error .msg-deliver {
      background-color: #f2dede;
      border: 1px solid #b33b21;
      color: #b33b21
    }
    &.is-error .msg-deliver {
      background-color: rgba(#d14836, 0.8);
      color: $color;
    }
    &.is-done .msg-deliver {
      background-color: rgba(#51a351, 0.8);
      color: $color;
    }
    .btn-hide-msg {
      font-size: 0.8em;
      position: absolute;
      color: inherit;
      top: 12px;
      right: 12px;
    }
  }
</style>