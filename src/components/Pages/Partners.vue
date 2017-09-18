<template>
  <section class="partners">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="header-title partner-title">Apoio</h1>
        </div>
      </div>
      <div class="row partners-logo">
        <div class="col col-4">
          <sponsor-partner-logo class="img-logo" :logoImage="Nine" />
        </div>
        <div class="col col-4">
          <sponsor-partner-logo class="img-logo" :logoImage="Cdc" />
        </div>
        <div class="col col-4">
          <sponsor-partner-logo class="img-logo img-50" :logoImage="Nov" />
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import SponsorPartnerLogo from '../Template/SponsorPartnerLogo'
import Nine from 'assets/img/logos/nine.png'
import Cdc from 'assets/img/logos/casa_codigo.png'
import Nov from 'assets/img/logos/novatec.png'

export default {
  data() {
    return {
      Nine,
      Cdc,
      Nov
    }
  },
  components: { SponsorPartnerLogo }
}
</script>

<style lang="stylus" scoped>
.partners
  padding 20px 0 20px 0
  min-height 20vh
  background #fff

  .partner-title
    color #000

.partners-logo
  margin-top 2rem
  display flex
  justify-content center

  .img-50
    width 50%
</style>
