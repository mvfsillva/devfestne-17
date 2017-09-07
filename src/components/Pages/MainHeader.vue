<template>
  <div id="home" class="main-header">
    <!--<CidadeSsa />-->
    <img :src="svgSalvador" class="svg-salvador" alt="">
    <div class="vertical">
      <span>#VemPraSalvador</span>
    </div>
  </div>
</template>

<script>
import svgSalvador from 'assets/img/svg/cidade_ssa.svg'

export default {
  data () {
    return {
      svgSalvador
    }
  }
}
</script>

<style lang="stylus" scoped>
  $border = solid 2px #fff
  $padding = 0 4rem
  .main-header
    padding: $padding
    .svg-salvador
      width 100%

  @media (max-width: 767px) {
    .main-header {
      border-left none
      border-right none
      padding: 0
    }
    .svg-salvador {
      width 89% !important
    }
  }
</style>
