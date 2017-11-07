<template>
  <div class="v-acc-dom" @click="$emit('toggle')">
    <a class="v-acc-trigger">
      <slot></slot>
    </a>
  </div>
</template>
<script>
  export default {
    created () {
      this.$parent.dom = this;
    }
  }
</script>
<style lang="scss">
  .v-acc-trigger {
    display: block;
  }
</style>