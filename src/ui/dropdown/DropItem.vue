<template>
  <li class="option" :class="{'selected': isSelected}">
    <button type="button" class="option-item" @click.default="onClick">
      <slot></slot>
    </button>
  </li>
</template>
<script>
  export default {
    props: {
      value: {
        default: null
      }
    },
    data () {
      return {
        isSelected: false
      }
    },
    methods: {
      onClick () {
        this.$emit('click', this.value)
        this.$emit('selected', this)
      }
    }
  }
</script>
