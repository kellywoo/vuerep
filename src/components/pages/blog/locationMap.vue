<template>
  <div class="location-map" id="location_map"></div>
</template>
<script>
  import { $ } from '@/util/util'

  export default {
    data () {
      return {
        apiKey: 'AIzaSyBmCBSOWnhm8vLJoae3XVXLIoUCZSmyasw',
        altitude: { lat: 37.495482, lng: 127.038741 },
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
        new google.maps.InfoWindow({
          content: `<div id="site_notice" class="location-notice">
                  서울특별시 강남구 역삼1동 790-6<br />마루 180
                </div>
            `
        }).open(vm.map, vm.marker);
      },
      loadScript () {
        let src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`
        if ( document.querySelectorAll(`script[src="${src}"]`).length < 1 ) {
          let script = document.createElement('script')
          script.src = src
          script.defer = true
          document.getElementsByTagName('head')[ 0 ].appendChild(script)
        }
      }
    },
    created () {
//      window.initMap = this.initMap(this);
      this.loadScript();
    },
    watch: {
      showMap (nv, ov) {
        if ( nv && !this.flag ) {
          this.initMap(this);
          this.flag = true
        }
      }
    }
  }
</script>