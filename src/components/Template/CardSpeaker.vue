<template>
	<div class="col col-md-4 col-sm-12 col-xs-12 speaker-box">
		<div class="card">
			<div class="card-header">
				<div class="mx-auto">
					<img :src="speakerPhoto" class="img-circle" alt="Foto de palestrante">
				</div>
			</div>
			<div class="card-body">
				<h4 :class="['speaker-name', color]"> {{ speakerName }} </h4>
				<span class="work"> <strong> {{ workAt }} </strong> - {{ cityName }} </span>
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
			default: ''
		},
		color: {
			type: String,
			default: ''
		},
		workAt: {
			type: String,
			default: ''
		},
		cityName: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="stylus" scoped>
.speaker-box
	padding 10px

.card 
	color #fff
	border none
	background-color #000

.card-header 
	border-bottom none
	background-color #000

.img-circle
	border-radius 50%
	margin 0 auto
	width 170px
	height 170px

.speaker-name 
	text-transform uppercase
	font-family 'Raleway', sans-serif
	font-size 20px
	font-weight 600
	&.yellow 
		color #ffc300
	&.green 
		color #00a158
	&.red
		color #df4b3a
	&.blue
		color #4887f7

.work
	font-size .9em
	font-family 'Raleway', sans-serif
	letter-spacing .8px
</style>
