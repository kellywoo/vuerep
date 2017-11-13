<template>
  <ul class="scroll-menu">
    <li v-for="(item, idx) in items" :key="idx">
      <a href="#" class="scroll-menu-item" :class="{['n-' + (idx+1)]: true, 'is-active': isActive === item}"
         @click.prevent="menuMove(item)"
         v-html="generateItem(item)"></a>
    </li>
  </ul>
</template>
<script>
  import scrollTo from '@/util/scrollto'
  import EventBus from '@/ui/eventBus'
  import { $ } from '@/util/util'
  import handleEvent from '@/mixin/handleEvent'

  export default {
    name: 'autoscroll-menu',
    mixins: [ handleEvent ],
    props: {
      generateItem: {
        type: Function
      },
      offtop: { }
    },
    data () {
      return {
        items: [],
        isActive: 0,
        screenHeight: 0,
        pad: function () {
          return Math.floor(window.innerHeight * 1 / 5);
        }
      }
    },
    methods: {
      activeMenu (item) {
        this.isActive = item;
        item.markDirty();
      },
      menuMove (item) {
        this.activeMenu(item);
        scrollTo($.offset(item.$el).top, 500)
      },
      init (items) {
        let vm = this;
        this.items = items;
        this.items.forEach((v, i, arr) => {
          if (arr[i + 1]) {
            v.toNext = this.menuMove.bind(vm, vm.items[i + 1])
          }
        })
      },
      headerFixed (vm, pageYOffset, top) {
        if (pageYOffset + 10 >= top) {
          vm.$root.$el.classList.contains('is-fixed') || vm.$root.$el.classList.add('is-fixed')
        } else {
          vm.$root.$el.classList.remove('is-fixed')
        }
      },
      setScroll () {
        let pageYOffset = window.pageYOffset;
        let passedItems = this.items.filter((v, i) => {
          let top = $.offset(v.$el).top;
          if (i === 1) {
            this.headerFixed(this, pageYOffset, top)
          }
          return v.getLocation(pageYOffset + this.pad(), top)
        })
        this.activeMenu(passedItems.slice(-1)[0])
      },
      handleResize () {
        this.setScroll.apply(this);
      },
      initDomEvent () {
        let vm = this

        this.evListeners.windowScroll = $.addEventHandler(window, 'scroll',
          vm.$throttle(this.setScroll.bind(vm), 300)
        )
        this.evListeners.windowResize = $.addEventHandler(window, 'resize',
          vm.$throttle(this.handleResize.bind(vm), 800)
        )

      },
      removeOnEvent () {
        EventBus.$off('autoScrollReady', this.init)
      }
    },
    created () {
      EventBus.$on('autoScrollReady', this.init);
      if ( typeof this.offset === 'number' ) {
        this.pad = function () {
          return this.offset
        }
      } else if ( typeof this.offset === 'string' ) {
        this.pad = function () {
          return parseInt(this.offset)
        }
      } else if ( typeof this.offset === 'function' ) {
        this.pad = this.offset
      }
    },
    mounted () {
      this.initDomEvent()
      this.$nextTick(this.setScroll)
    }
  }
</script>
