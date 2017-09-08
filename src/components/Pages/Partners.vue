<template>
  <section class="partners">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="header-title">Apoio</h1>
        </div>
      </div>
      <div class="row justify-content-center partners-logo">
        <div class="col col-2">
          <a href="http://www.99taxis.com/" target="_blank">
            <img class="img-fluid" :src="Nine" alt="Logotipo da 99 Táxis">
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import Nine from 'assets/img/99.png'

export default {
  data () {
    return {
      Nine
    }
  }
}
</script>

<style lang="stylus" scoped>
.partners
  padding 20px 0 20px 0
  min-height 50vh
  background #fff

.partners-logo
  margin-top 1rem
</style>
