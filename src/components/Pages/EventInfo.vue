<template>
  <div class="event-info text-center">
    <div class="container">
      <div class="row">
        <div class="col border border-white">
          <h1 class="display-2">600</h1>
          <p class="text-warning text-uppercase">Participantes</p>
        </div>
        <div class="col border border-white">
          <h1 class="display-2">01</h1>
          <p class="text-success text-uppercase">Dias de evento</p>
        </div>
        <div class="col border border-white">
          <h1 class="display-2">20</h1>
          <p class="text-danger text-uppercase">Palestras</p>
        </div>
        <div class="col border border-white">
          <h1 class="display-2">02</h1>
          <p class="text-info text-uppercase">Trilhas</p>
        </div>
      </div>
      <circle-divisor></circle-divisor>
      <div class="info-text border border-white">
        <p class="text-warning">
          A maior conferência de tecnologia cuidadosamente elaborada
          para você pela comunidade GDG do Nordeste. Venha para a 1˚
          capital do Brasil prestigiar tudo sobre Frontend, Backend, Mobile,
          UI/UX, VR, comidas tipicas, musica e muito mais.
        </p>
        <p class="text-warning">
          Google Developers Group (GDG) - É uma comunidade global de pessoas interessadas em aprender, utilizar
          e promover as tecnologias oferecidas pelo Google.
        </p>
      </div>
      <circle-divisor></circle-divisor>
      <!--<div class="info-text border border-white">-->
        <!--<h1 class="">O que é gdg?</h1>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import CircleDivisor from '../Commom/Svg/CircleDivisor'

  export default {
    components: {
      CircleDivisor
    }
  }
</script>

<style lang="stylus" scoped>
  $border = solid 1px #fff
  $padding = 0 4rem
  .event-info
    padding $padding
    .container
      .row
        .col
          color: #fff
      .info-text
        padding 1rem 5rem
        border-radius 2rem


</style>
