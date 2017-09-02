<template>
  <div class="main-header">
    <!--<CidadeSsa />-->
    <img :src="svgSalvador" class="svg-salvador" alt="">
  </div>
</template>

<script>
  import CidadeSsa from '../Commom/Svg/CidadeSsa'
  import SvgSalvador from '../../assets/img/svg/cidade_ssa.svg'
  export default {
    data () {
      return {
        msg: 'Pagina Principal',
        svgSalvador: SvgSalvador
      }
    },
    components: {
      CidadeSsa
    }
  }
</script>

<style lang="stylus" scoped>
  $border = solid 2px #fff
  $padding = 0 4rem
  .main-header
    border-left $border
    border-right $border
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
