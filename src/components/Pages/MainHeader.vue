<template>
  <main class="main">
    <div class="content">
      <img :src="City" alt="salvador" class="city-image img-fluid">
    </div>
  </main>
</template>

<script>
import City from 'assets/img/ssa_city.png'

export default {
  data () {
    return {
      City: City
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  height 100vh
  display flex
  display -webkit-box
  display -webkit-flex
  display -ms-flexbox
  align-items center
  -ms-flex-align center
  -ms-flex-pack center
  justify-content center
</style>
