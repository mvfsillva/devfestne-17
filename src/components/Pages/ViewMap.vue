<template>
  <section id="where" class="map text-center">
    <div class="container">
      <block-title title="Local" color="white" />
      <div class="row justify-center-content">
        <div class="col-md-12">
          <div class="address">
            <h4 class="cimatec"> Centro Universitário SENAI CIMATEC </h4>
            <p> Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010 </p>
          </div>
        </div>
        <div id="map" class="map-pointer"></div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import mapsStyle from 'assets/json/maps-style.json'

export default {
  mounted() {
    this.createMap()
  },
  methods: {
    createMap: function() {
      let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -12.9381642, lng: -38.3861483 },
        zoom: 15,
        styles: mapsStyle
      })

      this.marker = new google.maps.Marker({
        position: { lat: -12.9388791, lng: -38.3864129 },
        map: map
      })
    }
  },
  components: { BlockTitle }
}
</script>

<style lang="stylus" scoped>
.map
  min-height 60vh
  padding 20px

.address
  margin 10px
  font-family 'Roboto', sans-serif
  > .cimatec
      font-weight 800
      font-size 1rem
      text-transform uppercase
      color #4887f7
  > p 
      font-size 1rem
      font-weight 400
      line-height 1.5
      color #4887f7

.map-pointer
  width 100%
  height 60vh
  text-align center

@media screen and (max-width: 600px) 
  .map-pointer
    height 40vh

@media screen and (max-width: 400px) 
  .map-pointer
    height 30vh
</style>
