<template>
  <section class="about text-center">
    <div class="container">
      <block-title title="O evento" color="white" />
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="info-image">
            <img :src="Info" class="image" alt="Imagem com informações sobre o evento">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import Info from 'assets/img/svg/info.svg'

export default {
  data() {
    return {
      Info
    }
  },
  components: {
    BlockTitle
  }
}
</script>

<style lang="stylus" scoped>
.about
  min-height 100vh
  padding 20px 0 80px
  background-image url(../../assets/img/elevador.jpg)
  background-size cover

.info-image
  margin-top 2rem

.image
  width 40rem

@media screen and (max-width: 800px)
  .image
    width 30rem    

@media screen and (max-width: 600px)
  .image
    width 18rem        
</style>