<template>
  <div class="menu-nav">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Comprar Ingresso</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Equipe</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contato</a>
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
    margin-top $margin
    border-top $border
    border-left $border
    border-right $border
    .nav
      a
        color: #fff

</style>
