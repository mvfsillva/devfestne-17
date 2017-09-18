<template>
	<section class="stats-block">
		<div class="container">
			<div class="row stats">
				<div class="col">
					<div class="circle red">
						<h1 class="display-2">600</h1>
						<p class="stats-text red">Participantes</p>
					</div>
				</div>
				<div class="col">
					<div class="circle blue">
						<h1 class="display-2">01</h1>
						<p class="stats-text blue">Dia de evento</p>
					</div>
				</div>
				<div class="col">
					<div class="circle green">
						<h1 class="display-2">22</h1>
						<p class="stats-text green">Palestras</p>
					</div>
				</div>
				<div class="col">
					<div class="circle yellow">
						<h1 class="display-2">02</h1>
						<p class="stats-text yellow">Trilhas</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.stats-block
	padding 60px 0 60px
.stats
	max-width 940px
	margin 0 auto
	color #fff
	text-align center
	overflow hidden
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
.circle
	display inline-block
	width 200px
	height 200px
	border-radius 50%
	border 5px solid #fff
	&.red
		border 5px solid #df4b3a
	&.blue
		border 5px solid #4887f7
	&.green
		border 5px solid #00a158
	&.yellow
		border 5px solid #ffc300
	h1
		margin-top 40px
		font-size 70px
</style>
