<template>
  <div class="location-map" id="location_map"></div>
</template>
<script>
  import { $ } from '@/util/util'

  export default {
    data () {
      return {
        apiKey: 'AIzaSyBmCBSOWnhm8vLJoae3XVXLIoUCZSmyasw',
        altitude: { lat: 37.51330625, lng: 127.04299219 },
        mapping: null,
        flag: false,
        map: null,
        marker: null
      }
    },
    props: {
      showMap: {}
    },
    methods: {
      initMap (vm) {
        return function () {
          vm.mapping = function () {
            function toggleBounce () {
              if ( vm.marker.getAnimation() !== null ) {
                vm.marker.setAnimation(null)
              } else {
                vm.marker.setAnimation(google.maps.Animation.BOUNCE)
              }
            }

            vm.map = new google.maps.Map(vm.$el, {
              zoom: 16,
              center: vm.altitude
            })
            vm.marker = new google.maps.Marker({
              position: vm.altitude,
              map: vm.map,
              animation: google.maps.Animation.DROP,
              title: 'NEWLINK'
            })
            vm.marker.addListener('click', toggleBounce)
          }
        }
      },
      loadScript () {
        let src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=initMap`
        if ( document.querySelectorAll(`script[src="${src}"]`).length < 1 ) {
          let script = document.createElement('script')
          script.src = src
          script.defer = true
          document.getElementsByTagName('head')[ 0 ].appendChild(script)
        }
      }
    },
    created () {
      window.initMap = this.initMap(this);
      this.loadScript();
    },
    watch: {
      showMap(nv, ov) {
        if(nv && !this.flag) {
          this.mapping();
          this.flag = true
        }
      }
    }
  }
</script>