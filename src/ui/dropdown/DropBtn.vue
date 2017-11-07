<script>
  export default {
    props: {
      tag: {type: String, default: 'div'},
      width: {type: Number}
    },
    data () {
      return {
        display: false
      }
    },
    methods: {
      toggleOption (e){
        this.$parent.toggleDropdown(e);
      }
    },
    name: 'drop-btn',
    render (h) {
      return h(this.tag,
        {
          class: `dropdown-btn ${this.class ? this.class : ''}`,
          on: {
            click: this.toggleOption
          }
        },
        this.$slots.default)
    }
  }
</script>
<style>
  .dropdown-btn {
    cursor: pointer
  }
</style>