<template>
	<section class="container section-partners">
		<header class="header">
			<h4 class="partners-title">Apoio</h4>
		</header>
		<!-- Partners logo -->
		<div class="row">
			<div class="col-2 mx-auto">
				<div class="card">
					<div class="card-body">
						 <img class="card-img-top" :src="NineNine" alt="">
					</div>
				</div>
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
@import '~style/base/variables'
.section-partners
  padding 20px 0 20px
	.card
		background transparent
</style>
