<template>
  <div class="menu-nav">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" v-smooth-scroll="{ duration: 2000 }" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-smooth-scroll="{ duration: 2000 }" href="#event">O evento</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-smooth-scroll="{ duration: 2000 }" href="#where">Onde?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-smooth-scroll="{ duration: 2000 }" href="#tickets">Comprar Ingresso</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
        text-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)

  @media (max-width: 767px) {
    .menu-nav {
      display none
    }
  }
</style>
