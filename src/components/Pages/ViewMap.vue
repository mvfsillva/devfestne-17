<template>
  <section class="map text-center">
    <div class="container">
      <block-title title="Local" color="white" />
      <div class="row">
        <div class="col-md-12">
          <h4 class="cimatec"> Centro Universitário SENAI CIMATEC </h4>
          <p> Av. Orlando Gomes, 1845 - Piatã, Salvador - BA, 41650-010 </p>
          <button class="btn my-2 my-sm-0 btn-map" type="submit" @click.prevent="viewMap">Ver no Mapa</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import mapsStyle from 'assets/json/maps-style.json'

export default {
  methods: {
      viewMap() {
        window.open('http://bit.ly/2yvuMHU', '_blank')
    }
  },
  components: { BlockTitle }
}
</script>

<style lang="stylus" scoped>
.map
  min-height 60vh
  padding 60px
  background-image url(../../assets/img/others/senai.png)
  background-size cover
  
 .cimatec
      font-weight 600
      font-size 1.4rem
      font-family 'Roboto', sans-serif
      text-transform uppercase
      margin-top 4rem
      color #fff
p 
      font-size 1rem
      font-weight 400
      line-height 1.5
      margin-top 1.6rem
      margin-bottom 3rem
      color #fff

@media screen and (max-width: 600px) 
  .map
    height 40vh

@media screen and (max-width: 400px) 
  .map
    height 30vh

.btn-map
  margin 8px
  padding 12px 16px
  border 2px solid #4887f7
  border-radius 2px
  text-transform uppercase
  cursor pointer
  font-size 1em
  font-family 'Roboto', sans-serif
  font-weight 200
  color #fff
  background #4887f7
  &:hover
    background #000
    color #4887f7    
</style>
