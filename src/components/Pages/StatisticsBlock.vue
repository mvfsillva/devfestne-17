<template>
	<div class="container">
		<div class="content">
			<div class="row stats">
				<div class="col border border-white">
					<h1 class="display-2">600</h1>
					<p class="stats-text red">Participantes</p>
				</div>
				<div class="col border border-white">
					<h1 class="display-2">01</h1>
					<p class="stats-text blue">Dia de evento</p>
				</div>
				<div class="col border border-white">
					<h1 class="display-2">22</h1>
					<p class="stats-text green">Palestras</p>
				</div>
				<div class="col border border-white">
					<h1 class="display-2">02</h1>
					<p class="stats-text yellow">Trilhas</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.content
	padding 40px 0 10px
.stats
	max-width 980px
	margin 0 auto
	color #fff
	text-align center
	overflow hidden
	padding-bottom 30px
	.stats-text
		text-transform uppercase
		&.red
			color #df4b3a
		&.blue
			color #4887f7
		&.green
			color #00a158
		&.yellow
			color #ffc300
</style>
