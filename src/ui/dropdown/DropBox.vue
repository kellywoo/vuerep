<script>
  import Vue from 'vue'
  import EventBus from '../eventBus'
  import { $ } from '@/util/util'
  import handleEvent from '@/mixin/handleEvent'

  export default {

    mixins: [handleEvent],
    props: {
      tag: {type: String, default: 'div'},
      width: {type: Number}
    },
    data () {
      return {
        btn: null,
        option: null,
        isOpen: false
      }
    },
    methods: {
      toggleDropdown (e) {
        this.option.toggleOption()
        e.stopPropagation()
      },
      closeOption () {
        this.option.closeOption()
      },
      failedInit (msg) {
        this.$destroy()
      },
      initBtn () {
        return this.btn = $.util.default($.util.ifExists(this.$children.filter(c => c.$options.name === 'drop-btn'), '0', '$el'), null)
      },
      initOption () {
        return this.option = $.util.ifExists(this.$children.filter(c => c.$options.name === 'drop-menu'), '0')
      },
      addOnEvent () {
        EventBus.$on('dropdown:close', this.closeOption)
      },
      removeOnEvent () {
        EventBus.$off('dropdown:close', this.closeOption)
      },
      addOpenClass (isOpen) {
        this.isOpen = isOpen;
      }
    },
    mounted () {
      if (!this.initBtn()) {
        this.failedInit(`can't initiate the dropdown component since it can't find the trigger.`)
        return
      }

      if (!this.initOption()) {
        this.failedInit(`can't initiate the dropdown component since it can't find the options.`)
        return
      }
      this.addOnEvent()
      this.option.$on('isOpen', this.addOpenClass)
    },
    render (h) {
      let _class = {'dropdown-box ': true,
                    'is-open': this.isOpen};
      return h(this.tag,
        {
          class: _class
        },
        this.$slots.default)
    }
  }
</script>
<style lang="scss">
  .dropdown-box {
    position: relative;
  }
</style>
