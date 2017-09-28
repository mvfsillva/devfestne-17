<template>
<section id="speakers" class="speakers text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-md-offset-1">
				<h2 class="m-t-0 m-b-2">
	          <span class="block-title"> Palestrantes </span>
	        </h2>
			</div>
		</div>
		<div class="row speaker-grid">
			<div class="col-sm-4 m-b-2 js-speaker">
				<div class="speaker-card p-a-1">
					<div class="row">
						<div class="col-xs-6 col-xs-offset-3">
							<img :src="Maciek" class="img-responsive img-circle" alt="Maciek" width="112" height="112">
						</div>
					</div>

					<h3>
                    Nickolas Means

                    <a href="https://twitter.com/nmeans">
                      <svg aria-hidden="true" class="icon" fill="currentcolor" role="icon" width="16" height="16" viewBox="0 0 16 16" version="1.1">
  <path d="M16,3a6.56,6.56,0,0,1-1.89.52,3.29,3.29,0,0,0,1.44-1.82,6.57,6.57,0,0,1-2.08.8,3.3,3.3,0,0,0-5.59,3A9.32,9.32,0,0,1,1.11,2.1a3.32,3.32,0,0,0,1,4.38A3.27,3.27,0,0,1,.64,6.07,3.32,3.32,0,0,0,3.28,9.33a3.32,3.32,0,0,1-1.48.06,3.29,3.29,0,0,0,3.07,2.28A6.66,6.66,0,0,1,0,13a9.48,9.48,0,0,0,10.71-.39,9.61,9.61,0,0,0,3.65-7.9A6.67,6.67,0,0,0,16,3C15.41,3.3,15.56,3.7,16,3Z"></path>
</svg>

                    </a>

                  </h3>


					<p>
						Muve Health
					</p>



					<hr class="m-y-1">
					<p>
						The Original Skunk Works
					</p>

					<a href="/speakers/nickolas-means.html">See talk description</a>


				</div>
			</div>
		</div>
	</div>
</section>
</template>




			<!-- <div class="row justify-content-center">
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
      </div> -->


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
.speakers
	height 100vh
	background-color #22292C

.block-title
	color #c3c3c3
	font-weight normal
	font-family "Exo 2", sans-serif
	font-size 30px
	text-transform uppercase
	padding 5px
	display inline-block
	line-height 48px

.speaker-grid
	display -webkit-box
	display -ms-flexbox
	display flex
	-ms-flex-wrap wrap
	flex-wrap wrap

.speaker-card
	-webkit-box-flex: 1;
	-ms-flex-positive: 1;
	flex-grow: 1;
	height: 100%;
	border-radius: 3px;
	background-color: #000;
	color: #c9c2e1;
	font-size: 16px;
.p-a-1
	 padding: 20px 20px

.img-responsive
	display block
	max-width 100%
	height auto

.img-circle
	border-radius 50%


</style>
