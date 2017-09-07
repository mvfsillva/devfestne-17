<template>
	<section class="container section-partners">
		<div class="header">
			<h4 class="partners-title">Apoio</h4>
		</div>
		<!-- Partners logo -->
		<div class="row">
			<div class="partner">
				<img class="card-img-top" :src="NineNine" alt="">
			</div>
		</div>
	</section>
</template>

<script>
import NineNine from 'assets/img/99.png'

export default {
  data () {
    return {
      NineNine: NineNine
    }
  }
}
</script>

<style lang="stylus" scoped>
	.header
		padding-bottom 40px

	.section-partners
		.row
			display flex
			justify-content space-around
			.partner
				width 300px
				display block

				img
					width 100%
</style>
