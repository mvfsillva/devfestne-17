<template>
  <section class="sponsors">
    <div class="container text-center">
      <block-title title="Patrocínio" color="black" />
      <div class="row">
        <div class="col">
          <p class="header-text">
            <!-- Agradecemos as empresas que apoiam, investem e acreditam nesse projeto. <br> -->
             Faça parte,
            <a class="anchor" href="https://goo.gl/wMnezP" target="_blank">seja um patrocinador!</a>
          </p>
        </div>
      </div>
      <!-- sponsors: Block 1 -->
      <div class="row align-items-center">
        <div class="col-sm sponsors-column">
          <a href="https://developers.google.com/" target="_black">
            <sponsor-partner-logo :logoImage="Google" class="google-img" />
          </a>
        </div>
      </div>
      <!-- sponsors: Block 2 -->
      <div class="row align-items-center">
        <div class="col-sm sponsors-column">
          <a href="http://www.senaicimatec.com.br/" target="_black">
            <sponsor-partner-logo :logoImage="Cimatec" />
          </a>
        </div>
        <div class="col-sm sponsors-column">
          <a href="http://tampa.works/" target="_black">
            <sponsor-partner-logo :logoImage="Tampa" />
          </a>
        </div>
        <div class="col-sm sponsors-column">
          <a href="https://www.umbler.com/" target="_black">
            <sponsor-partner-logo :logoImage="Umbler" />
          </a>
        </div>
      </div>
      <!-- sponsors: Block 3 -->
      <div class="row align-items-center">
        <div class="col-sm sponsors-column">
          <a href="https://www.jusbrasil.com.br/home" target="_black">
            <sponsor-partner-logo :logoImage="Jus" />
          </a>
        </div>
        <div class="col-sm sponsors-column">
          <a href="http://www.wexinc.com.br/" target="_black">
            <sponsor-partner-logo :logoImage="Wex" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import SponsorPartnerLogo from '../Template/SponsorPartnerLogo'
import Google from 'assets/img/logos/google.png'
import Cimatec from 'assets/img/logos/cimatec.png'
import Tampa from 'assets/img/logos/tampa.png'
import Umbler from 'assets/img/logos/umbler.png'
import Jus from 'assets/img/logos/jusbrasil.png'
import Wex from 'assets/img/logos/wex.png'

export default {
  data() {
    return {
      Google,
      Cimatec,
      Tampa,
      Umbler,
      Jus,
      Wex
    }
  },
  components: { BlockTitle, SponsorPartnerLogo }
}
</script>

<style lang="stylus" scoped>
.sponsors
  padding 20px 0 20px 0
  min-height 40vh
  background #eee

.sponsors-column
  padding 40px

@media screen and (max-width: 400px) 
  .google-img
    width 260px
</style>