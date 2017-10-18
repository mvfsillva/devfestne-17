<template>
  <section class="about text-center">
    <div class="container">
      <div class="row">
        <div class="col col-md-6 col-sm-12 col-xs-12">
          <block-title title="O evento" color="black" />
          <p>
            Organizada pela comunidade Google Developers Group de cada região, a temporada devfest acontece em várias partes 
            do mundo entre os meses de setembro e novembro.
          </p>
          <p>
            E no Brasil o primeiro foi em 2012 em São Paulo, sendo que no nordeste o primeiro DevfestNE aconteceu em Aracaju em 2014, 
            posteriormente Recife 2015, Maceió 2016 e este ano chegou a vez de nossa querida Salvador - BA.
          </p>
          <p>
            O GDG Salvador com o apoio de grande parte dos GDGs do nordeste espera você para viver uma experiência incrível e única.
          </p>
        </div>
        <div class="col col-md-5 text-center">
          <h2 class="about-title"> #dfne2k17 </h2>
          <h2 class="about-title"> #vemprabahia </h2>
          <img :src="Pelo" class="mt-60" alt="Iconografia de casas">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import Pelo from 'assets/img/svg/pelo.svg'

export default {
  data() {
    return {
      Pelo
    }
  },
  components: {
    BlockTitle
  }
}
</script>

<style lang="stylus" scoped>
.about
  min-height 60vh
  padding 40px 0 40px
  background #fff

  p 
    font-weight 100
    font-size 18px
    font-family 'Roboto', sans-serif
    text-align justify

.mt-60
  margin-top 60px

.about-title 
  font-weight 600
  text-transform uppercase
  font-family 'Roboto', sans-serif
</style>