<template>
  <div class="cloud-section">
    <cloud-separator />
  </div>
</template>

<script>
  import CloudSeparator from '../Commom/Svg/CloudSeparator'

  export default {
    components: {
      CloudSeparator
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
