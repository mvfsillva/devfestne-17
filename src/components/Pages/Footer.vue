<template>
	<footer class="footer clearfix">
		<div class="container">
			<div class="copyright">2017 © Todos os direitos reservados</div>
			<div class="links-footer">
				<a class="sponsor-info" href="https://drive.google.com/file/d/0B4z-oNdUcmdZb3R1UUc1NDgzdWs/view?usp=sharing" target="_blank">Apresentação</a>
				<a href="http://bit.ly/2xTDjnt" target="_blank">Código de Conduta</a>
				<a href="mailto:gdg.salvador@gmail.com">Contato</a>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {}
</script>

<style lang="stylus" scoped>
.footer
	color #fff
	text-align center
	background-color #000
	font-family 'Exo 2', sans-serif

.links-footer
	float right
	a
		display inline-block
		vertical-align middle
		color #fff
		padding 6px
		margin 0 10px
		-webkit-transition all .1s linear
		-moz-transition all .1s linear
		transition all .1s linear
		&:hover
			background-color #fff
			color #000

.copyright
	padding 6px 0
	float left

.footer
	padding 10px 0
</style>
