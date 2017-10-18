<template>
  <section class="presenter">
      <div class="container">
          <div class="row justify-content-center">
              <card-speaker speakerName="Rafael Verger" :speakerPhoto="Rafa" color="yellow" workAt="#verger" cityName="Apresentador"/>
          </div>
      </div>
  </section>
</template>

<script>
import CardSpeaker from '../Template/CardSpeaker'
import Rafa from 'assets/img/speakers/rafa.png'

export default {
  data() {
      return {
          Rafa
      }
  },
  components: {CardSpeaker}
}
</script>

<style lang="stylus" scoped>
.presenter
    background #000
</style>
