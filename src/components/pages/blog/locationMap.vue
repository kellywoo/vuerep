<template>
  <div class="location-map" id="location_map"></div>
</template>
<script>
  import { $ } from '@/util/util'

  export default {
    data () {
      return {
        apiKey: 'AIzaSyBmCBSOWnhm8vLJoae3XVXLIoUCZSmyasw',
        altitude: {lat: 37.51330625, lng: 127.04299219}
      }
    },
    methods: {
      initMap (vm) {
        return function () {
          function toggleBounce () {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null)
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE)
            }
          }

          var map = new google.maps.Map(document.getElementById('location_map'), {
            zoom: 16,
            center: vm.altitude
          })
          var marker = new google.maps.Marker({
            position: vm.altitude,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'NEWLINK'
          })
          marker.addListener('click', toggleBounce)
        }
      },
      loadScript () {
        let src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=initMap`
        if (document.querySelectorAll(`script[src="${src}"]`).length < 1) {
          let script = document.createElement('script')
          script.src = src
          script.defer = true
          document.getElementsByTagName('head')[0].appendChild(script)
        }
      }
    },
    created () {
      window.initMap = this.initMap(this)
    },
    mounted () {
      this.loadScript()
    },
    destroy () {
      window.initMap = function () {}
    }
  }
</script>
<style lang="scss">
  .location-map {
    height: 400px;
  }
  .gm-bundled-control-on-bottom {
    right: auto !important;
    left: 0px !important;
    bottom: 120px !important
  }
</style>