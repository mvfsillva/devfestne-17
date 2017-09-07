<template>
  <div id="where" class="map">
    <div id="map" class="view-map"></div>
    <div class="location-info">
      <img :src="fachadaSenai" class="svg-salvador" alt="">
      <div class="address">
        <h1>
          SENAI CIMATEC - SENAI Bahia - FIEB <br> Centro Universitário SENAI CIMATEC
        </h1>
        <p>
          Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import mapsStyle from '../../assets/json/maps-style.json'
import fachadaSenai from '../../assets/img/fachada_cimatec.jpg'
export default {
  mounted () {
    this.createMap()
  },
  data () {
    return {
      fachadaSenai: fachadaSenai
    }
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

<style lang="stylus">
  .map
    position relative

    .location-info
      position absolute
      width 65vw
      height 219px
      background #434444
      bottom 0

      .address
        color #fff
        display inline-block
        vertical-align top
        padding 0 20px

    .view-map
      width 100%
      height 100vh
      margin-top 5rem

</style>
