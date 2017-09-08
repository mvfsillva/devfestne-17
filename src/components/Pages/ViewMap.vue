<template>
  <div id="where" class="map">
    <div class="container">
      <div class="row">
        <div class="col header">
          <h1 class="header-title">Localização</h1>
          <h4 class="address">Centro Universitário SENAI CIMATEC</h4>
          <p class="location">
            Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010
          </p>
        </div>
      </div>
      <div id="map" class="view-map"></div>
    </div>
  </div>
</template>

<script>
import mapsStyle from 'assets/json/maps-style.json'

export default {
  mounted () {
    this.createMap()
  },
  methods: {
    createMap: function () {
      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -12.9381642, lng: -38.3861483},
        zoom: 15,
        styles: mapsStyle
      })

      this.marker = new google.maps.Marker({
        position: {lat: -12.9388791, lng: -38.3864129},
        map: map
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .map
    min-height 100vh
    padding 80px 0 20px 0
    background url('../../assets/img/historic-center.jpg')
    background-size cover

    .address
      color #fff
      font-weight 100
      padding-top 2rem

    .location
      color #fff

    .view-map
      width 100%
      height 60vh
      margin-top 2rem
</style>
