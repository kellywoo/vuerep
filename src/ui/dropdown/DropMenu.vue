<template>
  <div class="dropdown-menus" v-show="isOpen" @click.stop="closeOption">
    <ul class="dropdown-menu-list">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'drop-menu',
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      closeOption () {
        this.isOpen = false;
        this.emitIsOpen();
      },
      openOption () {
        this.isOpen = true;
        console.log('openOption');
        this.emitIsOpen();
      },
      toggleOption () {
        this.isOpen ? this.closeOption() : this.openOption();
      },
      emitIsOpen () {
        this.$emit('isOpen', this.isOpen)
      },
      shutDonwOption (e) {
        console.log(e.currentTarget)
      },
      markSelected (e) {
        this.$children.forEach((v) => v.isSelected = e === v );
      }
    },
    created () {

      function dropdownCloseHandler (e) {
        this.$root.$emit('shutDownOption', e)
      }

      if (this.$root.$data.addedDropdownHandler) {
        this.$root.$data.addedDropdownHandler = true
        console.log('documentaddEvent')

        document.body.addEventListener('click', dropdownCloseHandler, false)
        document.body.addEventListener('focus', dropdownCloseHandler, false)
      }
      this.$on('shutDownOption', this.shutDownOption)
    },
    mounted () {
      this.$children.forEach((v) => {
        v.$on('selected', this.markSelected)
      })
    }
  }
</script>
<style>
  .dropdown-menus {
    margin-top: 3px;
    border: 1px solid rgba(0, 0, 0, .15);
    box-shadow: 0 1px 3px 0 rgba(2, 23, 34, .15);
    border-radius: 3px;
    padding: 3px 0;
    color: #333;
    font-size: 0.875rem;
    background-color: #fff;
    position: absolute;
    z-index: 100;
    top: 100%;
    min-width: 100%;
  }

  .dropdown-menus.left {
    left: 0 !important;
    right: auto !important;
  }

  .dropdown-menus.right {
    right: 0 !important;
    left: auto !important;
  }

  .dropdown-menus.top {
    bottom: 100% !important;
    top: auto !important;
  }

  .open > .dropdown-menus {
    display: block;
  }

  .jnd-option-title {
    position: relative;
    padding: 0 0.625rem;
    font-size: 0.625rem;
    color: #9f9f9f;
    line-height: 2em;
    font-weight: 700;
  }

  .jnd-option-group {
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    border-top: 1px solid rgba(215, 225, 230, 0.75);
  }

  .jnd-option-group:first-of-type {
    padding: 0;
    margin: 0;
    border-top: none;
  }

  .option-list {
    min-width: 100%;
  }

  .option-item {
    position: relative;
    padding: 0 0.75rem;
    display: block;
    width: 100%;
    line-height: 2.0625rem;
    cursor: pointer;
    text-align: left;
  }

  .option-item:focus,
  .option-item:hover {
    background-color: #ecf3f9;
    outline: none;
  }

  .option-list.with-selected .option-item {
    white-space: nowrap;
  }

  .option-list.with-selected .option-item.selected {
    color: #124671;
    font-weight: 700;
  }

  .option-list.with-selected .option-item.selected::after {
    font-family: 'jandi-icon' !important;
    content: "\e92c";
    font-size: 0.625rem;
    margin-left: 0.5rem;
  }

  .option-txt {
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
  }

  .jnd-option-title:first-child {
    margin-top: -3px;
  }

  .jnd-option-icon + .option-txt {
    padding-left: 1.625rem;
    padding-right: 0.5rem;
  }

  .bg-flag + .option-txt {
    padding-left: 2.25rem;
  }

  .jnd-option-icon {
    position: absolute;
    left: 0.875rem;
    color: #7f7f7f;
    line-height: inherit;
  }

  .dropdown-menus .bg-flag {
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 4px;
    left: 12px;
    border: 1px solid #c8ccd9;
    border-radius: 100%;
    box-sizing: content-box;
  }

</style>