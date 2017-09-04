<template>
  <div class="container">
    <div class="content">
      <div class="row">
        <div class="circle">
          <h1 class="display-2">600</h1>
          <p class="text-warning text-uppercase">Participantes</p>
        </div>
        <div class="circle">
          <h1 class="display-2">01</h1>
          <p class="text-success text-uppercase">Dias de evento</p>
        </div>
        <div class="circle">
          <h1 class="display-2">20</h1>
          <p class="text-danger text-uppercase">Palestras</p>
        </div>
        <div class="circle">
          <h1 class="display-2">02</h1>
          <p class="text-info text-uppercase">Trilhas</p>
        </div>
      </div>
      <div class="info-text border border-white">
        <p class="text-warning">
          A maior conferência de tecnologia cuidadosamente elaborada
          para você pela comunidade GDG do Nordeste. Venha para a 1˚
          capital do Brasil prestigiar tudo sobre Frontend, Backend, Mobile,
          UI/UX, VR, comidas tipicas, musica e muito mais.
        </p>
      </div>
      <div class="info-text border border-white">
        <h1 class="">O que é gdg?</h1>
        <p class="text-warning">
          Google Developers Group (GDG) - É uma comunidade global de pessoas interessadas em aprender, utilizar
          e promover as tecnologias oferecidas pelo Google.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  .content
    padding 20px 0 20px
  .event-column
    margin auto
    > .card
        background transparent
        color #00a158
        border 2px solid #fff
        border-radius 1em
        padding 3em
        line-height 2
        font-weight 100
</style>
