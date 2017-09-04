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
  $border = solid 2px #fff
  $padding = 0 4rem
  $margin = 1rem
  .menu-nav
    .nav
      a
        color: #fff

  @media (max-width: 767px) {
    .menu-nav {
      display none
    }
  }
</style>
