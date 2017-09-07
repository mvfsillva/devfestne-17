<template>
  <div class="mini-clouds-section">
    <circle-multiple-line></circle-multiple-line>
  </div>
</template>

<script>
  import CircleMultipleLine from '../Commom/Svg/CircleMultipleLine'

  export default {
    components: {
      CircleMultipleLine
    }
  }
</script>

<style lang="stylus" scoped>
  $border = solid 2px #fff
  $padding = 0 4rem
  .cloud-section
    border-left $border
    border-right $border

</style>
