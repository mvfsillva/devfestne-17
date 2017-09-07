<template>
  <div id="home" class="container main-header">
    <img :src="svgSalvador" class="svg-salvador" alt="">
    <!-- <div class="vertical">
      <span>#VemPraSalvador</span>
    </div> -->
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
  .main-header
    height 100vh
    display flex
    display -webkit-box
    display -webkit-flex
    align-items center
    .svg-salvador
      width 100%

  @media (max-width: 767px)
    .main-header
      border-left none
      border-right none
      padding: 0
    .svg-salvador
      width 89% !important
</style>
