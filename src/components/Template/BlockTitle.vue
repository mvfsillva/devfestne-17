<template>
	<div class="row">
		<div class="col-md-12 col-md-offset-1">
			<h2>
				<span :class="['block-title', color]"> {{ title }} </span>
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Título'
		},
		color: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="stylus" scoped>
.block-title
	text-transform uppercase
	padding 5px
	display inline-block
	line-height 48px
	font-size 30px
	font-family 'Roboto', sans-serif
	font-weight 800
	&.black
		color #000
	&.white
		color #fff
	&.green
		color #00a158
</style>
