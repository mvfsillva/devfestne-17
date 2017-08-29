<template>
  <div class="event-info text-center">
    <div class="container">
      <div class="row">
        <div class="col border border-white">
          <h1 class="display-2">600</h1>
          <p class="text-warning text-uppercase">Participantes</p>
        </div>
        <div class="col border border-white">
          <h1 class="display-2">01</h1>
          <p class="text-success text-uppercase">Dias de evento</p>
        </div>
        <div class="col border border-white">
          <h1 class="display-2">20</h1>
          <p class="text-danger text-uppercase">Palestras</p>
        </div>
        <div class="col border border-white">
          <h1 class="display-2">02</h1>
          <p class="text-info text-uppercase">Trilhas</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="stylus" scoped>
  $border = solid 1px #fff
  $padding = 0 4rem
  .event-info
    padding $padding
    .container
      .row
        .col
          color: #fff


</style>
