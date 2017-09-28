<template>
	<div class="col-sm-4">
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
			<div class="card-footer text-muted"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: ''
			},
			speakerName: {
				type: String,
				default: 'Nome'
			},
			talkName: {
				type: String,
				default: 'Palestra'
			},
			speakerPhoto: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="stylus" scoped>
.speaker-card
	-webkit-box-flex 1
	-ms-flex-positive 1
	flex-grow 1
	width 294px
	height 352px
	border-radius 3px
	background-color #242424
	color #fff
	font-size 16px

.card-header
	border-bottom none
	background-color #242424

.img-circle
	border-radius 50%
	margin 0 auto
	width 120px
	height 120px

.speaker-name
	letter-spacing 2px
	font-family 'Indie Flower', cursive, sans-serif
	font-size 26px

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
