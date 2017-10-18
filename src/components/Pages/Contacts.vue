<template>
  <section class="contacts">
  	<div class="container text-center">
		<h4> Acompanhe o devfest nordeste através das redes sociais:</h4>
  		<div class="row justify-content-center">		
			<div class="col col-4">
				<a href="https://twitter.com/devfestne" target="_blank">
					<i class="fa fa-twitter tw" aria-hidden="true"></i>
				</a>
				<a href="https://pt-br.facebook.com/devfestne/" target="_blank">
					<i class="fa fa-facebook facebook" aria-hidden="true"></i>
				</a>
				<a href="https://plus.google.com/+DevfestNEBR" target="_blank">
					<i class="fa fa-google-plus pl" aria-hidden="true"></i>
				</a>
			</div>
  		</div>
  	</div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.contacts
	min-height 4vh
	background #000
	padding 20px 0 20px
	a
		margin 16px
		text-decoration none
		font-size 2.8rem
		color #fff	
		&:hover
			color #FFFC00
h4
	font-family 'Raleway', sans-serif
	font-size 14px
	color #636363
	text-transform uppercase			
</style>
