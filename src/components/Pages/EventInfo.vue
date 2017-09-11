<template>
  <section class="about" id="event">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="header-title">Sobre o evento</h1>
        </div>
      </div>
      <statistics-block/>
      <div class="row justify-content-center">
        <div class="col col-8">
        <p class="about-text">
          É um grande evento organizado pela comunidade GDG, que pode oferecer sessões de palestras de várias áreas, codelabs e muito mais.
        </p>
        <p class="about-text">
          Google Developers Group (GDG) - é uma comunidade voluntária e aberta que compartilha e discute conteúdos e conhecimentos sobre tecnologias Google.
        </p>
      </div>
    </div>
  </div></section>
</template>

<script>
  import StatisticsBlock from './StatisticsBlock'
  import Ticket from 'assets/img/ticket.png'

  export default {
    data () {
      return {
        Ticket
      }
    },
    components: {
      StatisticsBlock
    }
  }
</script>

<style lang="stylus" scoped>
.about
  min-height 100vh
  padding 80px 0 80px
  background url('../../assets/img/historic-center.jpg')
  background-size cover
  
  .about-text
    font-family 'Raleway', sans-sans-serif
    font-weight 100
</style>
