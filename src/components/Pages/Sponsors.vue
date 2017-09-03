<template>
  <section class="container section-sponsors">
    <header class="header">
      <h1 class="header-title">Patrocinadores</h1>
      <p class="header-text">
        Quem torna o DevFest Nordeste possível são as empresas que apoiam, investem e acreditam nesse projeto.
        <br>
        Quer fazer parte dessa iniciativa?
        <a class="anchor" href="https://goo.gl/wMnezP" target="_blank">Seja um patrocinador!</a>
      </p>
    </header>
    <!-- Sponsors logo -->
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <div class="card">
          <div class="card-body">
             <img class="img-fluid mx-auto d-block" :src="Google" alt="google logo">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 mx-auto">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top" :src="Tampa" alt="tampa logo">
          </div>
        </div>
      </div>
      <div class="col-sm-3 mx-auto">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top" :src="Cimatec" alt="cimatec logo">
          </div>
        </div>
      </div>
      <div class="col-sm-3 mx-auto">
        <div class="card">
          <div class="card-body">
             <img class="card-img-top" :src="Umbler" alt="">
          </div>
        </div>
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
.section-sponsors
  padding 255px 0 40px
  .card
    background-color transparent
</style>
