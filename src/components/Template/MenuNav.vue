<template>
  <nav class="navbar fixed-top menu-nav">
    <div class="container">
      <!-- Navigation -->
      <div class="center-block">
        <!-- <ul class="site-navigation nav">
          <li>
            <a class="nav-link" href="#">Home</a>
          </li>
          <li>
            <a class="nav-link" href="#">Sobre</a>
          </li>
          <li>
            <a class="nav-link" href="#">Local</a>
          </li>
          <li>
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul> -->
      </div>
      <!-- Ticket Button -->
      <div class="right-block">
        <a href="https://loja.tampa.works/produto/devfest-nordeste-2017/"></a>
        <button class="btn-ticket" type="submit">
      		Ingressos
      		<span></span>
      	</button>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
@import '~style/base/variables'
.menu-nav
  background-color $black
.container
  >.center-block
    width 75%
  >.right-block
    width 25%
    text-align center

.site-navigation
  text-align center
  padding 40px 0
  li
    flex-grow 1
  a
   display inline-block
   font-size 1.2rem
   line-height 2
   font-weight 700
   letter-spacing 3px
   text-transform uppercase
   color $white
   position relative
   padding 5px

@media (min-width: 850px)
 .site-navigation a
   font-size .8rem

@media (min-width: 1025px)
 .site-navigation a
   font-size 1rem
   line-height 1.8
   padding 5px 5px 6px

.site-navigation a:after
  content ''
  display block
  position absolute
  width 100%
  height 2px
  bottom 0
  left 0
  z-index 1
  opacity 1
  background linear-gradient(to right, #E67207 0%, #EF4E7B 50%, #A166AB 100%)
  transform-origin center
  transform scaleX(0)
  transition transform .4s ease-out

.site-navigation li.is-active a:after,.site-navigation a:hover:after
  transform:scaleX(1)

@media (max-width: 849px)
 .site-navigation
   position fixed
   bottom 40px
   right 3%
   transform scale(0)
   z-index 12

 .site-navigation li
    opacity 0
    display block
    transform translate3d(4px, 0px, 0)
    transition all .3s ease
    text-align left

 .site-navigation li+li
   margin-top 10px

 .site-navigation a
    text-decoration none
    padding 4px 8px
    color white

@media (min-width: 850px)
 .site-navigation
    display flex
    justify-content flex-end
    align-items center
    padding 0

 .site-navigation ul
    display flex
    align-items center
    justify-content space-between
    width 100%
    max-width 445px

@media (min-width: 850px)
 .site-navigation
  justify-content:center

@media (min-width: 1025px)
 .site-navigation ul
  max-width:640px

.btn-ticket
	 border none
	 position relative
	 display inline-block
	 vertical-align middle
	 width auto
	 height 48px
	 min-width 160px
	 z-index 1
	 padding 9px 24px
   padding-top 3px
	 font-size 14px
	 font-weight 700
	 letter-spacing 1px
	 text-transform uppercase
	 color $google-yellow
	 text-align center
	 border-radius 4px
	 overflow hidden
	 background linear-gradient(to right, $google-yellow)
	 transform translate3d(0, 0, 0)
	 transition all .4s ease-out
	 &:before
		 content ""
		 width calc(100% - 4px)
		 height calc(100% - 4px)
		 background $black
		 position absolute
		 top 2px
		 left 2px
		 border-radius 2px
		 z-index -1
	span
	 position absolute
	 left 0
	 bottom 7px
	 display block
	 width 200%
	 height 2px
	 background linear-gradient(to right, $google-yellow 0%)
	 z-index -1
	 transition all 0.8s ease-out


.btn-ticket:active,.btn-ticket:focus,.btn-ticket:hover
  cursor pointer
  transform translate3d(0, -3px, 0)
  box-shadow 0px 8px 18px -3px rgba(206, 203, 6, 0.58)

.btn-ticket:active span,.btn-ticket:focus span,.btn-ticket:hover span
  left -10%

.btn-ticket:active:after,.btn-ticket:focus:after,.btn-ticket:hover:after
  opacity 1

@media (max-width: 600px)
  .btn-ticket
    font-size 12px
    min-width 120px
    margin-left -30px
</style>
