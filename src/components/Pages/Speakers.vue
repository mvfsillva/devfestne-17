<template>
	<section id="speakers" class="speakers text-center">
		<div class="container">
			<block-title title="Palestrantes" color="white" />
			<div class="row justify-content-center">
				<card-speaker speakerName="Yan Magalhães" :speakerPhoto="Yan" color="yellow" talkName="#UseThePlatform - Levando suas aplicações ao próximo nível com polymer" />
				<card-speaker speakerName="Serena Fernandes" :speakerPhoto="Serena" color="red" talkName="Test Driven Development" />
				<card-speaker speakerName="Matheus Marsiglio" :speakerPhoto="Matheus" color="green" talkName="Imutabilidade em objetos com Javascript" />
				<card-speaker speakerName="Maciek Ruckgaber" :speakerPhoto="Maciek" color="blue" talkName="IoT with raspberry Pi and MATRIX Creator" />
				<card-speaker speakerName="Fernando Daciuk" :speakerPhoto="Daciuk" color="green" talkName="The secret of functions" />
				<card-speaker speakerName="Alda Rocha" :speakerPhoto="Alda" color="yellow" talkName="Raio-x de UX" />
				<card-speaker speakerName="José Manzoli" :speakerPhoto="Manzoli" color="blue" talkName="Troubleshooting - Do caos à rápida solução de problemas utilizando ferramentas como: Splunk, NewRelic e Perf4j" />
				<card-speaker speakerName="Marina Limeira" :speakerPhoto="Marina" color="red" talkName="Crie sua própria realidade utilizando A-frame" />
				<card-speaker speakerName="Geisa Santos" :speakerPhoto="Geisa" color="yellow" talkName="Hackeando além do Wi-Fi" />
				<card-speaker speakerName="Evelyn Mendes" :speakerPhoto="Evelyn" color="red" talkName="Angular 4 + Firebase, realtime não precisa ser complicado" />
				<card-speaker speakerName="Andrews Medina" :speakerPhoto="Medina" color="green" talkName="Escrevendo uma aplicação realtime para milhares de usuários simultâneos" />
				<card-speaker speakerName="Thaise Dantas" :speakerPhoto="Thaise" color="blue" talkName="Testes! E aí de quem é essa responsabilidade?" />
				<card-speaker speakerName="Maria Clara" :speakerPhoto="Maria" color="green" talkName="O guia do mochileiro para segurança client-side" />
				<card-speaker speakerName="Thiago Almeida" :speakerPhoto="Thiago" color="yellow" talkName="Acessibilidade web - como estamos pensando?" />
				<card-speaker speakerName="Bruno Pulis" :speakerPhoto="Pulis" color="blue" talkName="Componentes: o lado sombrio que não te contam!" />
				<card-speaker speakerName="Alano Acioli" :speakerPhoto="Alano" color="green" talkName="Realidade virtual e o futuro" />
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
			Alano
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
	padding 4rem 0 2rem
</style>
