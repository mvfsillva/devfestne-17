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
        <button class="btn-ticket" type="button" @click.prevent="buyTicket">
      		Comprar ingresso
      		<span></span>
      	</button>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      buyTicket () {
        window.open('https://loja.tampa.works/produto/devfest-nordeste-2017/', '_blank')
      }
    }
  }
</script>

<style lang="stylus" scoped>
.menu-nav
  background-color #000
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

// BUTTON
.btn-ticket
  margin 6px
  padding 10px 16px
  border 2px solid #ffc300
  border-radius 2px
  text-transform uppercase
  cursor pointer
  font-weight 600
  font-size .8em
  color #000
  background #ffc300
  &:hover
    background #000
    color #ffc300
</style>
