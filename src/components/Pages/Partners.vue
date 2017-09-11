<template>
  <section class="partners">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="header-title partner-title">Apoio</h1>
        </div>
      </div>
      <div class="row partners-logo">
        <sponsor-partner-logo :logoImage="Nine" />
         <sponsor-partner-logo :logoImage="Cdc" />
      </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SponsorPartnerLogo from '../Template/SponsorPartnerLogo'
  import Nine from 'assets/img/logos/nine.png'
  import Cdc from 'assets/img/logos/casa_codigo.png'

  export default {
    data() {
      return {
        Nine,
        Cdc
      }
    },
    components: {SponsorPartnerLogo}
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
</style>
