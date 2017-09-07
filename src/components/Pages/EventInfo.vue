<template>
  <div id="event">
    <div class="event-stats text-center">
      <div class="container">
        <div class="row">
          <div class="circle yellow">
            <div class="inner">
              <h1>600</h1>
              <p>Participantes</p>
            </div>
          </div>
          <div class="row">
            <div class="circle blue">
              <div class="inner">
                <h1>01</h1>
                <p>Dias de evento</p>
              </div>
            </div>
            <div class="circle green">
              <div class="inner">
                <h1>20</h1>
                <p>Palestras</p>
              </div>
            </div>
            <div class="circle red">
              <div class="inner">
                <h1>02</h1>
                <p>Trilhas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="event-info">
      <div class="info-box yellow">
        <div class="content">
          <h1>O que é o DevFest</h1>
          <p>
            A maior conferência de tecnologia cuidadosamente elaborada
            para você pela comunidade GDG do Nordeste. Venha para a 1˚
            capital do Brasil prestigiar tudo sobre Frontend, Backend, Mobile,
            UI/UX, VR, comidas tipicas, musica e muito mais.
          </p>
        </div>
      </div>
      <div class="info-box green">
        <div class="content">
          <h1 class="">O que é gdg?</h1>
          <p class="text-warning">
            Google Developers Group (GDG) - É uma comunidade global de pessoas interessadas em aprender, utilizar
            e promover as tecnologias oferecidas pelo Google.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>

bottom-arrow(path)
  content ' '
  position absolute
  background url(path)
  background-color rgba(255, 255, 255, 0.05)
  background-repeat no-repeat
  width 100%
  height 47%
  left 0
  background-size 100%
  -webkit-clip-path polygon(100% 0, 100% 41%, 51% 100%, 49% 100%, 0% 40%, 0 0)
  clip-path polygon(100% 0, 100% 39%, 51% 100%, 49% 100%, 0% 39%, 0 0)

.event-info
  color #fff
  display flex
  justify-content space-between
  padding: 60px 0 120px 0
  background url(../../assets/img/elevador.jpg)
  background-size cover
  .info-box
    min-width 200px
    max-width 500px
    width 100%
    position relative
    margin 0 50px
    h1
      text-transform uppercase
      font-size 2.5em
      margin 0 0 20px 0
    p
      font-size 1.5em
      font-family 'Roboto', sans-serif
      font-weight 100
    &.yellow
      padding-bottom 190px
      .content
        border-top-left-radius 30px
        border-top-right-radius 30px

      &::after
        bottom-arrow('../../assets/img/svg/arrow-down-yellow.svg')

      h1
        color #ffc300

    &.green
      padding-top 232px
      .content
        border-bottom-left-radius 30px
        border-bottom-right-radius 30px

      &::after
        bottom-arrow('../../assets/img/svg/arrow-down-green.svg')
        top 0
        transform rotate(180deg)
      h1
        color #00a158

    .content
      padding 20px
      background-color rgba(255, 255, 255, 0.05)
      min-height 100%



.event-stats
  color #fff
  text-align center
  background url(/static/img/ssa_farol.png)
  background-size cover
  .container
    padding 80px 0
    background-color rgba(0,0,0,.9)

  .circle
    display inline-block
    width 200px
    height 200px
    border-radius 50%
    border 5px solid #fff
    margin: 20px

    h1
      font-size 3.2em
      margin 0

    .inner
      width 200px
      margin-top 46px
      height 100px
      display block

    &.yellow
      border-color #ffc300

    &.green
      border-color #00a158

    &.blue
      border-color #4887f7

    &.red
      border-color #df4b3a



</style>
