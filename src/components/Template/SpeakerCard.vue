<template>
	<figure :class="['speaker-figure', color]">
		<img class="speaker-photo" :src="speakerPhoto" alt="Imagem do palestrante" />
		<figcaption>
			<h2>{{speakerName}}
				<span class="speaker-last-name">{{speakerLastName}}</span>
			</h2>
		</figcaption>
	</figure>
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
			speakerLastName: {
				type: String,
				default: 'Sobrenome'
			},
			speakerPhoto: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="stylus" scoped>
figure
.speaker-figure
	font-family 'Raleway', sans-serif
	color #fff
	position relative
	float left
	margin 10px 1%
	min-width 220px
	max-width 310px
	max-height 310px
	width 100%
	text-align center

figure.speaker-figure * {
  -webkit-box-sizing padding-box
  box-sizing padding-box
}

figure.speaker-figure img {
  opacity: 1
	filter: grayscale(100%)
  max-width: 100%
  border: 10px solid #000000
  -webkit-transition: all 0.3s
  transition: all 0.3s
  -webkit-transform: scale(0.85)
  transform: scale(0.85)
  -webkit-transform-origin: 0 0
  transform-origin: 0 0
}
figure.speaker-figure figcaption {
  bottom: 0
  width: 60%
  right: 0
  position: absolute
  background: #000000
  padding: 20px
  -webkit-transition: all 0.3s
  transition: all 0.3s
  -webkit-transform: translateY(0)
  transform: translateY(0)
  box-shadow: 0 0px 10px -10px #000000
}
figure.speaker-figure figcaption h2,
figure.speaker-figure figcaption p {
  margin: 0
  color: #ffffff
}
figure.speaker-figure figcaption h2 {
  font-weight: 400
  text-transform: uppercase
  font-size: 17px
}
figure.speaker-figure figcaption h2 span {
  font-weight: 800
}
figure.speaker-figure figcaption p {
  font-size: 0.9em
  font-weight: 500
  opacity: 0.65
}
figure.speaker-figure a {
  left: 0
  right: 0
  top: 0
  bottom: 0
  position: absolute
  z-index: 1
}
figure.speaker-figure.blue figcaption {
  background: #4887f7
}
figure.speaker-figure.blue img {
  border: 10px solid #4887f7
}
figure.speaker-figure.green figcaption {
  background: #00a158
}
figure.speaker-figure.green img {
  border: 10px solid #00a158
}
figure.speaker-figure.red figcaption {
  background: #df4b3a
}
figure.speaker-figure.red img {
  border: 10px solid #df4b3a
}
figure.speaker-figure.yellow figcaption {
  background: #ffc300
}
figure.speaker-figure.yellow img {
  border: 10px solid #ffc300
}
figure.speaker-figure:hover figcaption,
figure.speaker-figure.hover figcaption {
  -webkit-transform: translateY(-8px)
  transform: translateY(-8px)
  box-shadow: 0 15px 15px -15px #000000
}
figure.speaker-figure:hover.blue img,
figure.speaker-figure.hover.blue img {
  border: 10px solid #2980b9
}
figure.speaker-figure:hover.red img,
figure.speaker-figure.hover.red img {
  border: 10px solid #c0392b
}
figure.speaker-figure:hover.yellow img,
figure.speaker-figure.hover.yellow img {
  border: 10px solid #e67e22
}
.speaker-last-name {
  display block
}
.speaker-photo {
  height: 19.4rem;
  width: 17.9rem;
}
</style>
