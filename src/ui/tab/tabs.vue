<template>
  <div class="v-tab">
    <div class="v-tab-nav">
      <ul class="v-tab-menu">
        <li class="v-tab-item"
            v-for="child in items"
            :class="{'is-active': child.isActive}"
            :style="{'width': tabSize+'%'}">
          <a class="v-tab-link" href="#" @click.prevent="activeChild(child)">{{child.title}}</a>
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
    props: {
      maxWidth: {
        default: 100,
        type: Number
      }
    },
    data () {
      return {
        tabSize: 100,
        items: []
      }
    },
    methods: {
      activeChild (v) {
        let num = 0
        this.items.forEach(function (child, i) {
          num = (child.isActive = child === v) ? i: num;
        });
        this.$emit('changed', num)
      }
    },
    mounted () {
      this.items =this.$children;
      this.activeChild(this.items[0]);
      this.tabSize = 100 / this.items.length;
    }
  }
</script>
<style lang="scss">
  .v-tab-menu {

  }
</style>