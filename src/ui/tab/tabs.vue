<template>
  <div class="v-tab">
    <div class="v-tab-nav">
      <ul>
        <li class="v-tab-menu"
            v-for="child in $children"
            :class="{'is-active': child.isActive}">
          <a href="#" @click.prevent="activeChild(child)">{{child.title}}</a>
        </li>
      </ul>
    </div>
    <div class="v-tab-article">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      activeChild (child) {
        this.$children.forEach(function (v) {
          v.isActive = child === v
        });
      }
    },
    created () {
      this.tabs = this.$children
    }
  }
</script>
<style></style>