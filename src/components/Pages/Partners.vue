<template>
  <section class="partners">
    <div class="container text-center">
      <block-title title="Apoio" color="black" />
      <div class="row align-items-center">
        <div class="col-sm sponsor-column">
          <a href="http://www.99taxis.com/" target="_black">
            <sponsor-partner-logo :logoImage="Nine" />
          </a>
        </div>
        <div class="col-sm sponsor-column">
          <a href="https://www.casadocodigo.com.br/" target="_black">
            <sponsor-partner-logo :logoImage="Cdc" />
          </a>
        </div>
        <div class="col-sm sponsor-column">
          <a href="https://www.novatec.com.br/" target="_black">
            <sponsor-partner-logo :logoImage="Nov" />
          </a>
        </div>
        <div class="col-sm sponsor-column">
          <a href="https://www.stone.com.br/" target="_black">
            <sponsor-partner-logo :logoImage="Stone" />
          </a>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm sponsor-column">
          <a href="https://auth0.com/" target="_black">
            <sponsor-partner-logo :logoImage="Auth" />
          </a>
        </div>
        <div class="col-sm sponsor-column">
          <a href="https://www.hotmart.com/pt/" target="_black">
            <sponsor-partner-logo :logoImage="Hotmart" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import SponsorPartnerLogo from '../Template/SponsorPartnerLogo'
import Nine from 'assets/img/logos/nine.png'
import Cdc from 'assets/img/logos/casa.png'
import Nov from 'assets/img/logos/novatec.png'
import Stone from 'assets/img/logos/stone.png'
import Auth from 'assets/img/logos/auth0.png'
import Hotmart from 'assets/img/logos/hotmart.png'

export default {
  data() {
    return {
      Nine,
      Cdc,
      Nov,
      Stone,
      Auth,
      Hotmart
    }
  },
  components: { BlockTitle, SponsorPartnerLogo }
}
</script>

<style lang="stylus" scoped>
.partners
  padding 10px 0 20px 0
  min-height 20vh
  background #e5e7ea

.sponsor-column
  padding 40px
</style>
