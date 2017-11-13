<template>
  <div class="msg-box" :class="{'is-error': isError, 'is-help': isHelp, 'is-warn': isWarn}">
    <slot></slot>
    <div class="msg-deliver" :class="{'with-btn': btn}">
      <div class="msg-content" v-html="msg"></div>
      <button v-if="btn" class="btn-hide-msg" type="button f-roboto" aria-label="hide message" @click="hide">x</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'msg-box',
    props: {
      msg: '',
      btn: {
        type: Boolean,
        default: false
      },
      isError: {},
      isHelp: {},
      isWarn: {}
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
      font-size: 0.75rem;
      &.with-btn {
        padding: 10px 25px 10px 15px;
      }
    }
    &.is-info .msg-deliver {
      background-color: rgba(#f1f1f1, 0.8);
      color: #f87c56;
      .btn-hide-msg {
        color: #f87c56;
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
    &.is-error .msg-deliver {
    }
    &.is-done .msg-deliver {
      background-color: rgba(#51a351, 0.8);
      color: $color;
    }
    .btn-hide-msg {
      position: absolute;
      color: inherit;
      top: 2px;
      right: 2px;
      padding: 10px;
    }
  }
</style>