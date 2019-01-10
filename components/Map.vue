<template>
  <div v-editable="blok" class="map">
    <GmapMap
      :center="{lat: Number(blok.lat), lng: Number(blok.lon) }"
      :zoom="Number(blok.zoom)"
      class="gmaps"
      :options="options"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      mapTypeControl: false,
      markers: [],
      styles:
      [
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f85e5e"
            }
          ]
        },
        {
          "featureType": "landscape",
          "stylers": [
            {
              "color": "#f2f3ee"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#72a4b2"
            },
            {
              "visibility": "on"
            }
          ]
        }
]
    }
  },
  computed: {
    options() {
      return {
        styles: this.styles
      }
    }
  },
  created() {
    this.markers = [{
      position: {
        lat: Number(this.blok.lat),
        lng: Number(this.blok.lon)
      }
    }]
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
.map {
  @include margin-page-wide();
  .gmaps {
    width: 100%;
    height: 70vh;
  }
}
</style>
