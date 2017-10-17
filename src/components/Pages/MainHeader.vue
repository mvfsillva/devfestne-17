<template>
  <div id="home" class="container main-header">
    <img :src="Salvador" class="salvador" alt="cidade de salvador">
  </div>
</template>

<script>
import Salvador from 'assets/img/svg/cidade_ssa.svg'

export default {
  data () {
    return {
      Salvador
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

    // .salvador
    //   width 100%
</style>
