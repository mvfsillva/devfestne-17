<template>
	<section class="speakers" id="speakers">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col">
					<h1 class="header-title speak-title">Palestrantes</h1>
					<p class="header-text speak-info">Em breve anunciaremos a lista completa.</p>
				</div>
			</div>
		</div>
		<div class="container speaker-container">
			<div class="row justify-content-center">
				<speaker-card color="yellow" speakerName="Yan" speakerLastName="Magalhães" :speakerPhoto="Yan" />
				<speaker-card color="red" speakerName="Serena" speakerLastName="Fernandes" :speakerPhoto="Serena" />
				<speaker-card color="green" speakerName="Matheus" speakerLastName="Marsiglio" :speakerPhoto="Matheus" />
			</div>
			<div class="row justify-content-center row-margin">
				<speaker-card color="blue" speakerName="Maciek" speakerLastName="Ruckgaber" :speakerPhoto="Maciek" />
				<speaker-card color="yellow" speakerName="Evelyn" speakerLastName="Mendes" :speakerPhoto="Evelyn" />
				<speaker-card color="red" speakerName="Fernando" speakerLastName="Daciuk" :speakerPhoto="Daciuk" />
			</div>
      <div class="row justify-content-center">
        <speaker-card color="green" speakerName="Alda" speakerLastName="Rocha" :speakerPhoto="Alda" />
        <speaker-card color="blue" speakerName="Jose" speakerLastName="Manzoli" :speakerPhoto="Manzoli" />
        <speaker-card color="yellow" speakerName="Marina" speakerLastName="Limeira" :speakerPhoto="Marina" />
      </div>
      <div class="row justify-content-center">
        <speaker-card color="red" speakerName="Andrews" speakerLastName="Medina" :speakerPhoto="Medina" />
      </div>
		</div>
	</section>
</template>

<script>
	import SpeakerCard from '../Template/SpeakerCard'

  import Yan from 'assets/img/speakers/Yan.png'
	import Matheus from 'assets/img/speakers/Matheus.png'
  import Maciek from 'assets/img/speakers/Maciek.png'
	import Daciuk from 'assets/img/speakers/Daciuk.png'
	import Medina from 'assets/img/speakers/Medina.png'
	import Manzoli from 'assets/img/speakers/Manzoli.png'

  import Serena from 'assets/img/speakers/Serena.png'
	import Evelyn from 'assets/img/speakers/Evelyn.png'
	import Alda from 'assets/img/speakers/Alda.png'
	import Marina from 'assets/img/speakers/Marina.png'

  export default {
		data() {
			return {
				Yan,
				Matheus,
				Maciek,
				Daciuk,
				Medina,
				Manzoli,
				Serena,
				Evelyn,
        Alda,
        Marina,
			}
		},
		components: {
			SpeakerCard
		}
	}
</script>

<style lang="stylus" scoped>
.row-margin
	margin-top 4rem
.speakers
	padding 80px 0 80px
	height auto
	background #000
	.speak-title
		color #fff
	.speak-info
		color #ffc300
	.speaker-container
		margin-top 2rem
</style>
