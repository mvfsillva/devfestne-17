<template>
	<div class="col col-md-4 col-sm-12 col-xs-12 speaker-box">
		<div class="card">
			<div class="card-header">
				<div class="mx-auto">
					<img :src="speakerPhoto" class="img-circle" alt="Foto de palestrante">
				</div>
			</div>
			<div class="card-body">
				<h4 :class="['card-title speaker-name', color]"> {{ speakerName }} </h4>
				<hr class="divider">
				<p class="card-text talk"> {{ talkName }} </p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		speakerPhoto: {
			type: String,
			default: ''
		},
		speakerName: {
			type: String,
			default: 'Nome'
		},
		color: {
			type: String,
			default: ''
		},
		talkName: {
			type: String,
			default: 'Palestra'
		}
	}
}
</script>

<style lang="stylus" scoped>
.speaker-box
	padding 26px

.card
	height 340px
	border-radius 2px
	background-color #0f0f0f
	color #fff

.card-header
	border-bottom none
	background-color #0f0f0f

.img-circle
	border-radius 50%
	margin 0 auto
	width 140px
	height 140px
	webkit-filter grayscale(100%)
	filter grayscale(100%)

.speaker-name
	text-transform uppercase
	font-family 'Roboto', sans-serif
	font-size 16px
	&.yellow
		color #ffc300
	&.green
		color #00a158
	&.red
		color #df4b3a
	&.blue
		color #4887f7

.talk
	font-size 16px
	font-family 'Exo 2', sans-serif
	color #a8a8a8
</style>
