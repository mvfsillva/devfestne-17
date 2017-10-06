<template>
	<div class="col col-md-4 col-sm-12 col-xs-12 speaker-box">
		<div class="card speaker-card">
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
	padding 30px

.speaker-card
	width 294px
	height 352px
	border-radius 3px
	background-color #151515
	color #fff

.card-header
	border-bottom none
	background-color #151515

.img-circle
	border-radius 50%
	margin 0 auto
	width 140px
	height 140px
	webkit-filter grayscale(100%)
	filter grayscale(100%)

.speaker-name
	font-family 'Raleway', cursive, sans-serif
	font-size 20px
	&.yellow
		color #ffc300
	&.green
		color #00a158
	&.red
		color #df4b3a
	&.blue
		color #4887f7

.divider
	width 10%
	margin-left auto
	margin-right auto

.talk
	margin 0 0 10px
	letter-spacing 1px
	font-size 14px
	font-family 'Exo 2', sans-serif
</style>
