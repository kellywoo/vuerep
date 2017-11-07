<template>
  <transition name="fade">
    <div class="v-tab-section" v-if="isActive">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        isActive: false,
        title: 'hello'
      }
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>