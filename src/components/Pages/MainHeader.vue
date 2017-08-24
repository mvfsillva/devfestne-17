<template>
  <div class="main-header">
    <CidadeSsa />
  </div>
</template>

<script>
  import CidadeSsa from '../Commom/Svg/CidadeSsa'

  export default {
    data () {
      return {
        msg: 'Pagina Principal'
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
</style>
