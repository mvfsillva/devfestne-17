<template>
  <section class="sponsors">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="header-title sponsors-title">Patrocínio</h1>
          <div class="praise-icon"><img :src="Praise" class="praise-icon" alt="praise icon"></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="header-text">
            Quem torna esse evento possível são as empresas que apoiam, investem e acreditam nesse projeto.
            <br> Faça parte dessa iniciativa,
            <a class="anchor" href="https://goo.gl/wMnezP" target="_blank">Seja um patrocinador!</a>
          </p>
        </div>
      </div>
      <div class="row sponsors-logo">
        <div class="col col-4">
          <sponsor-partner-logo :logoImage="GoogleDevs" />
        </div>
      </div>
      <div class="row sponsors-logo">
        <div class="col col-4">
          <sponsor-partner-logo :logoImage="Cimatec" />
        </div>
      </div>
      <div class="row sponsors-logo">
        <div class="col col-12 space-around">
          <sponsor-partner-logo :logoImage="Umbler" />
          <sponsor-partner-logo :logoImage="Tampa" />
          <sponsor-partner-logo :logoImage="Jus" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Praise from 'assets/img/praise.png'
import SponsorPartnerLogo from '../Template/SponsorPartnerLogo'
import GoogleDevs from 'assets/img/logos/google_devs.png'
import Cimatec from 'assets/img/logos/cimatec.png'
import Umbler from 'assets/img/logos/umbler.png'
import Tampa from 'assets/img/logos/tampa.png'
import Jus from 'assets/img/logos/jusbrasil.png'

export default {
  data() {
    return {
      Praise,
      GoogleDevs,
      Cimatec,
      Umbler,
      Tampa,
      Jus
    }
  },
  components: { SponsorPartnerLogo }
}
</script>

<style lang="stylus" scoped>
.sponsors
  padding 40px 0 40px 0
  min-height 50vh
  background #fff

.sponsors-title
  color #000

.praise-icon
  display inline-block
  width 44px
  height auto
  margin-left 10px
  font-size 3.8rem
  line-height 1

.sponsors-logo
  margin-top 3rem
  display flex
  justify-content center

.space-around
  display flex
  justify-content space-around
</style>
