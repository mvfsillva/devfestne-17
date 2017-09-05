<template>
  <div class="cloud-section">
    <img :src="CloudSeparator" alt="salvador" class="img-fluid">
  </div>
</template>

<script>
  import CloudSeparator from 'assets/img/svg/nuvem_separadora.svg'

  export default {
    data () {
      return {
        CloudSeparator
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $border = solid 2px #fff
  $padding = 0 4rem
  .cloud-section
    //border-left $border
    //border-right $border

</style>
