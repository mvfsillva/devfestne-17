<template>
  <nav class="menu-nav navbar fixed-top navbar-expand-lg">
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link active" v-smooth-scroll="{ duration: 2000 }" href="#home">Home</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-smooth-scroll="{ duration: 2000 }" href="#event">Sobre o evento</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-smooth-scroll="{ duration: 2000 }" href="#where">Local</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" v-smooth-scroll="{ duration: 2000 }" href="#speakers">Palestrantes</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn my-2 my-sm-0 btn-ticket" type="submit" @click.prevent="buyTicket">Comprar ingresso</button>
        </form>
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
  background #000
  .nav
    .nav-link
      color #fff
      &:hover
        color #ffc300

@media (max-width: 767px)
  .menu-nav
    display none

.btn-ticket
  margin 6px
  padding 10px 16px
  border 2px solid #ffc300
  border-radius 2px
  text-transform uppercase
  cursor pointer
  font-size .8em
  font-family 'Exo 2', sans-serif
  color #000
  background #ffc300
  &:hover
    background #000
    color #ffc300
</style>
