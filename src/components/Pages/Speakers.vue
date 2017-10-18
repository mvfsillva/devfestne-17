<template>
	<section id="speakers" class="speakers text-center">
		<div class="container">
			<block-title title="Palestrantes" color="white"/>
			<div class="row justify-content-center">
				<card-speaker speakerName="Yan Magalhães" :speakerPhoto="Yan" color="yellow" workAt="4YouSee" cityName="Belo Horizonte, MG"/>
				<card-speaker speakerName="Matheus Marsiglio" :speakerPhoto="Matheus" color="green" workAt="#vivendo" cityName="São Paulo, SP"/>
				<card-speaker speakerName="Maciek Ruckgaber" :speakerPhoto="Maciek" color="blue" workAt="AdMobilize" cityName="Bogotá, Colômbia"/>
				<card-speaker speakerName="Serena Fernandes" :speakerPhoto="Serena" color="red" workAt="Meliuz" cityName="Belo Horizonte, MG"/>
				<card-speaker speakerName="Alda Rocha" :speakerPhoto="Alda" color="yellow" workAt="Senai" cityName="São Paulo, SP"/>
				<card-speaker speakerName="Marina Limeira" :speakerPhoto="Marina" color="green" workAt="Bionexo" cityName="São Paulo, SP"/>
				<card-speaker speakerName="Fernando Daciuk" :speakerPhoto="Daciuk" color="blue" workAt="Zimp" cityName="Curitiba, PR"/>
				<card-speaker speakerName="José Manzoli" :speakerPhoto="Manzoli" color="red" workAt="99" cityName="São Paulo, SP"/>
				<card-speaker speakerName="Andrews Medina" :speakerPhoto="Medina" color="yellow" workAt="Jusbrasil" cityName="Salvador, BA"/>
				<card-speaker speakerName="Geisa Santos" :speakerPhoto="Geisa" color="green" workAt="Periféricas" cityName="Salvador, BA"/>
				<card-speaker speakerName="Evelyn Mendes" :speakerPhoto="Evelyn" color="blue" workAt="transnerd.com.br" cityName="Porto Alegre, RS"/>
				<card-speaker speakerName="Thaise Dantas" :speakerPhoto="Thaise" color="red" workAt="Stone" cityName="Rio de Janeiro, RJ"/>
				<card-speaker speakerName="Thiago Almeida" :speakerPhoto="Thiago" color="yellow" workAt="Hotmart" cityName="Belo Horizonte, MG"/>
				<card-speaker speakerName="Bruno Pulis" :speakerPhoto="Pulis" color="green" workAt="Monetizze" cityName="Belo Horizonte, MG"/>
				<card-speaker speakerName="Italo Marcel" :speakerPhoto="Italo" color="blue" workAt="Stone" cityName="Rio de Janeiro, RJ"/>
				<card-speaker speakerName="Maria Clara" :speakerPhoto="Maria" color="red" workAt="Auth0 Ambassador" cityName="Maceió, AL"/>
				<card-speaker speakerName="Marla Dore" :speakerPhoto="Marla" color="yellow" workAt="Unijorge" cityName="Salvador, BA"/>
				<card-speaker speakerName="Alano Acioli" :speakerPhoto="Alano" color="green" workAt="Senai CIMATEC" cityName="Salvador, BA"/>

			</div>
		</div>
	</section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import CardSpeaker from '../Template/CardSpeaker'
import Yan from 'assets/img/speakers/Yan.png'
import Serena from 'assets/img/speakers/Serena.png'
import Matheus from 'assets/img/speakers/Matheus.png'
import Maciek from 'assets/img/speakers/Maciek.png'
import Daciuk from 'assets/img/speakers/Daciuk.png'
import Alda from 'assets/img/speakers/Alda.png'
import Manzoli from 'assets/img/speakers/Manzoli.png'
import Marina from 'assets/img/speakers/Marina.png'
import Geisa from 'assets/img/speakers/Geisa.png'
import Evelyn from 'assets/img/speakers/Evelyn.png'
import Medina from 'assets/img/speakers/Medina.png'
import Thaise from 'assets/img/speakers/Thaise.png'
import Maria from 'assets/img/speakers/Maria.png'
import Thiago from 'assets/img/speakers/Thiago.png'
import Pulis from 'assets/img/speakers/Pulis.jpg'
import Alano from 'assets/img/speakers/Alano.png'
import Paula from 'assets/img/speakers/Paula.png'
import Marla from 'assets/img/speakers/Marla.png'
import Italo from 'assets/img/speakers/Italo.png'

export default {
	data() {
		return {
			Yan,
			Serena,
			Matheus,
			Maciek,
			Daciuk,
			Alda,
			Manzoli,
			Marina,
			Geisa,
			Evelyn,
			Medina,
			Thaise,
			Maria,
			Thiago,
			Pulis,
			Alano,
			Paula,
			Marla,
			Italo
		}
	},
	components: {
		BlockTitle,
		CardSpeaker
	}
}
</script>

<style lang="stylus" scoped>
.speakers
	height auto
	background-color #000
	padding 2rem 0 2rem
</style>
