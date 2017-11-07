<template>
  <div class="modal-dialogue">
    <div class="modal-content">
      <div class="model-head">{{}}</div>
      <div class="modal-body"></div>
      <div class="btn-box">
        <button type="button" class="btn btn-ok" @click=""></button>
        <button type="button" class="bnt btn-cancel" @click=""></button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'modal',
    data () {
      return {
        title: '',
        content: '',
        button: ''
      }
    },
    mounted () {}
  }
</script>
<style>

</style>