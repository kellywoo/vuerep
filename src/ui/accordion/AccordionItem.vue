<template>
<li class="v-acc-item" :class="{'is-open': isActive}">
  <slot></slot>
</li>
</template>
<script>
  export default {
    data () {
      return {
        items: [],
        isActive: false,
        dom: null,
        sub: null
      }
    },
    methods: {
      toggle () {
        this.isActive ? this.changeActive(false) : this.changeActive(true)
      },
      changeActive (b) {
        this.isActive = b;
        this.sub.isActive = b;
        if (b) {
          this.$emit('changeItem', this );
        }
      }
    },
    mounted () {
      if (this.dom && this.sub){
        this.dom.$on('toggle', this.toggle)
      }
    }
  }
</script>