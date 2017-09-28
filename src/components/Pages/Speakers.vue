<template>
<section id="speakers" class="speakers text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-md-offset-1">
				<h2>
	         <span class="block-title"> Palestrantes </span>
	      </h2>
			</div>
		</div>
		<div class="row speaker-grid">
			<speaker-card speakerName="Yan Magalhães" :speakerPhoto="Yan" color="yellow" talkName="#UseThePlatform - Levando suas aplicações ao próximo nível com polymer" />
			<speaker-card speakerName="Serena Fernandes" :speakerPhoto="Serena" color="red" talkName="Test Driven Development" />
			<speaker-card speakerName="Matheus Marsiglio" :speakerPhoto="Matheus" color="red" talkName="Imutabilidade em objetos com Javascript" />
		</div>
	</div>
</section>
</template>

<script>
import SpeakerCard from '../Template/SpeakerCard'
import Yan from 'assets/img/speakers/Yan.png'
import Serena from 'assets/img/speakers/Serena.png'
import Matheus from 'assets/img/speakers/Matheus.png'

export default {
	data() {
		return {
			Yan,
			Serena,
			Matheus
		}
	},
	components: { SpeakerCard }
}
</script>

<style lang="stylus" scoped>
.speakers
	height 100vh
	background-color #323131

.block-title
	text-transform uppercase
	padding 5px
	display inline-block
	line-height 48px
	font-size 28px
	font-family 'Exo 2', sans-serif
	color #fff

.speaker-grid
	display -webkit-box
	display -ms-flexbox
	display flex
	-ms-flex-wrap wrap
	flex-wrap wrap
</style>
