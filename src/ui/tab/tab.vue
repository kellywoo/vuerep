<template>
  <transition name="tab">
    <div class="v-tab-section" v-show="isActive">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'tab',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        isActive: false
      }
    }
  }
</script>
<style lang="scss">

  .tab-enter-active, .tab-leave-active {
    transition: opacity .5s, margin-left .5s;
    margin-left: 0;
  }
  .tab-enter, .tab-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    position: absolute;
    visibility: hidden;
    margin-left: 50px;
  }
  .v-tab {

  }
  .v-tab-nav {
    position: relative;
    padding: 0 10px;
    &::after {
      content: ' ';
      display: block;
      clear: both;
      border-top: 1px solid rgba(211,231,238, 0.7);
      margin-top: -1px;
      margin-left: -10px;
      margin-right: -10px;
    }
    text-align: center;
    line-height: 0;
  }
  .v-tab-menu {
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    width: 60%;
  }
  .v-tab-item {
    position: relative;
    height: inherit;
    line-height: inherit;
    float: left;
    text-align: center;
    color: #587c9a;
    $active_color: #266590;
    &.is-active{
      color: $active_color;
      &::after {
      content: ' ';
      clear: both;
      width: 100%;
      height: 3px;
      position: absolute;
      display: block;
      left: 0;
      bottom: 0px;
      background-color: $active_color;
      transition: left .3s;
    }}
  }
  .v-tab-link {
    height: inherit;
    line-height: inherit;
    display: block;
    padding: 0px 20px;
  }
  .v-tab-article {

  }
  .v-tab-section {
    padding: 3rem 1rem;
  }
</style>