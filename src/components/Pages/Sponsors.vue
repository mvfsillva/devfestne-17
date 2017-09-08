<template>
  <section class="sponsors">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="header-title">Patrocínio</h1>
          <div class="praise-icon"><img :src="Praise" class="praise-icon" alt="praise icon"></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="header-text">
            Quem torna esse evento possível são as empresas que apoiam, investem e acreditam nesse projeto.
            <br>
            Quer fazer parte dessa iniciativa?
            <a class="anchor" href="https://goo.gl/wMnezP" target="_blank">Seja um patrocinador!</a>
          </p>
        </div>
      </div>
      <div class="row justify-content-center sponsors-logo">
        <div class="col col-6">
          <a href="https://developers.google.com" target="_blank">
            <img class="img-fluid" :src="GoogleDevs" alt="Logotipo do Google Developers">
          </a>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-3">
          <a href="https://tampa.works/" target="_blank">
            <img class="card-img-top" :src="Tampa" alt="Logotipo do Tampa Works">
          </a>
        </div>
        <div class="col col-3">
          <a href="http://www.senaicimatec.com.br/" target="_blank">
            <img class="card-img-top" :src="Cimatec" alt="Logotipo do Cimatec">
          </a>
        </div>
        <div class="col col-3">
          <a href="https://www.umbler.com/" target="_blank">
            <img class="card-img-top" :src="Umbler" alt="Logotipo do Umbler">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Praise from 'assets/img/praise.png'
import GoogleDevs from 'assets/img/svg/google_devs.svg'
import Tampa from 'assets/img/tampa.png'
import Cimatec from 'assets/img/cimatec.png'
import Umbler from 'assets/img/umbler.png'

export default {
  data () {
    return {
      Praise,
      GoogleDevs,
      Tampa,
      Cimatec,
      Umbler
    }
  }
}
</script>

<style lang="stylus" scoped>
.sponsors
  padding 40px 0 40px 0
  min-height 50vh
  background #fff

.praise-icon
  display inline-block
  width 44px
  height auto
  margin-left 10px
  font-size 3.8rem
  line-height 1

.sponsors-logo
  margin 2rem 0 4rem
</style>
