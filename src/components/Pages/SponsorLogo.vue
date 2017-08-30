<template>
  <div class="container">
		  <circle-divisor/>
      <div class="aa">
        <h2 class="h2-heading text-success">Patrocinadores</h2>
        <partner-balloon/>
      </div>
  </div>
</template>

<script>
import CircleDivisor from '../Commom/Svg/CircleDivisor'
import PartnerBalloon from '../Commom/Svg/PartnerBalloon'
export default {
  components: {CircleDivisor, PartnerBalloon}
}
</script>

<style lang="stylus" scoped>
</style>
