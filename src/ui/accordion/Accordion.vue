<template>
  <div class="v-accordion">
    <ul class="v-acc-list">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      changeItem (item){
        this.$children.forEach((v, i) => {
          v.isActive = item === v
        })
      }
    },
    mounted () {
      this.$children.forEach((v, i) => {
        v.$on('changeItem', this.changeItem)
      })
    },
    beforeDestroy () {
      this.$children.forEach((v, i) => {
        v.$off('changeItem', this.changeItem)
      })
    }
  }
</script>
<style></style>