<template>
  <button :type="type" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'button',
    props: {
      type: {
        default: 'button'
      }
    },
    methods: {
      onClick (e) {
        this.$emit('click', e);
      }
    }
  }
</script>
