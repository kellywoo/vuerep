<template>
  <div class="v-acc-sub" v-show="isActive">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isActive: false
      }
    },
    created () {
      this.$parent.sub = this;
    }
  }
</script>