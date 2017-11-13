<template>
  <nav class="gnb f-roboto" :class="isOpen &&'is-open'">
    <button type="button" class="btn-gnb-toggle"
            :class="{'is-open' : isOpen}"
            @click="toggleGnb">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="off-grid" v-if="isOpen">Menu Close</span>
      <span class="off-grid" v-else>Menu Open</span>
    </button>
    <div class="gnb-nav">
      <v-autoscroll-menu :generateItem="generateItem" class="gnb-menu">
      </v-autoscroll-menu>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'gnb',
    props: {
      sections: { type: Array }
    },
    data () {
      return {
        title: 'gnb',
        isOpen: false
      }
    },
    methods: {
      generateItem (item) {
        return `
                  <span class="scroll-menu-icon"></span>
                  <span class="scroll-menu-text f-roboto">${item.title}</span>`
      },
      toggleGnb () {
        this.isOpen = !this.isOpen;
      }
    },
    created () {
    }
  }
</script>