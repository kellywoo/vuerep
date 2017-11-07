<template>
  <div class="app-page pg-contact no-pad m-block">
    <div class="pg-align no-pad m-block">
      <location-map></location-map>
      <cs-contact></cs-contact>
      <footer class="footer">
        <p class="f-roboto">© Copyright 2017 NEWLINK All Rights Reserved</p>
      </footer>
    </div>
  </div>
</template>
<script>
  import { ko } from './lang'
  import setLang from '@/mixin/lang'
  import LocationMap from './locationMap'
  import CsContact from './CsContact'

  export default {
    name: 'contact-us',
    mixins: [setLang],
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        language: 'contact',
        onFirstDisplay: null
      }
    },
    created () {
      this.setLang()
    },
    components: {
      'location-map': LocationMap,
      'cs-contact': CsContact
    }
  }
</script>
