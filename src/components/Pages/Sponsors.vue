<template>
  <section class="container section-sponsors">
    <div class="header">
      <h1 class="header-title">Patrocinadores</h1>
      <p class="header-text">
        Quem torna o DevFest Nordeste possível são as empresas que apoiam, investem e acreditam nesse projeto.
        <br>
        Quer fazer parte dessa iniciativa?
        <a class="anchor" href="https://goo.gl/wMnezP" target="_blank">Seja um patrocinador!</a>
      </p>
    </div>
    <!-- Sponsors logo -->
    <div class="row">
      <div class="sponsor">
        <img class="img-fluid mx-auto d-block" :src="Google" alt="google logo">
      </div>
      <div class="sponsor">
        <img class="card-img-top" :src="Tampa" alt="tampa logo">
      </div>
      <div class="sponsor">
        <img class="card-img-top" :src="Cimatec" alt="cimatec logo">
      </div>
      <div class="sponsor">
        <img class="card-img-top" :src="Umbler" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import Google from 'assets/img/svg/google.svg'
import Tampa from 'assets/img/tampa.png'
import Cimatec from 'assets/img/cimatec.png'
import Umbler from 'assets/img/umbler.png'

export default {
  data () {
    return {
      Google: Google,
      Tampa: Tampa,
      Cimatec: Cimatec,
      Umbler: Umbler
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  padding-bottom 40px
  .header-title
    font-size 2.5em

  .header-text
    font-size 18px
    color #e0e0e0
    a
      color #e0e0e0

.section-sponsors
  .row
    display flex
    justify-content space-around
    .sponsor
      width 300px
      display block

      img
        width 100%
</style>
