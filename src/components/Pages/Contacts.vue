<template>
  <section class="contacts">
  	<div class="container">
  		<div class="row justify-content-center">
			<div class="col col-4">
				<a href="https://twitter.com/devfestne" target="_blank">
					<i class="fa fa-twitter" aria-hidden="true"></i>
				</a>
				<a href="https://pt-br.facebook.com/devfestne/" target="_blank">
					<i class="fa fa-facebook" aria-hidden="true"></i>
				</a>
				<a href="https://plus.google.com/+DevfestNEBR" target="_blank">
					<i class="fa fa-google-plus" aria-hidden="true"></i>
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
	min-height 10vh
	background #22292c
	padding 10px 0 10px
	a
		margin 16px
		text-decoration none
		color #fff
		font-size 2.6rem
		&:hover
			color #ffc300
</style>
