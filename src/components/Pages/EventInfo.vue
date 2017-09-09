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
        <div class="col col-md-8 col-sm-12 col-xs-12">
        <p class="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra justo at accumsan posuere. Donec facilisis enim efficitur sagittis aliquet.
          Quisque massa tellus, varius vitae vulputate nec, cursus quis quam. Curabitur in lorem a mi convallis cursus. Duis faucibus nibh non diam aliquam, at varius augue consectetur.
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
</style>
