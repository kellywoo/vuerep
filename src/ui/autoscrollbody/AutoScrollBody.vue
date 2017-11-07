<template>
  <article>
    <slot></slot>
  </article>
</template>
<script>
  import EventBus from '@/ui/eventBus'
  export default {
    name: 'autoscroll-body',
    mounted () {
      EventBus.autoScrollReady(this.$children);
    }
  }
</script>