<template>
  <div class="ticket-block">
		<div class="container">
      <a href="https://loja.tampa.works/produto/devfest-nordeste-2017/" target="_blank" class="link-ticket">
        <img :src="ticket" alt="Comprar" >
      </a>
	  	<mini-clouds-section/>
      <!-- <div class="sum">
        <img :src="sum" alt="">
      </div>
      <div class="farol-barra">
        <img :src="farol" alt="">
      </div>
      <div class="wave-yellow">
        <img :src="wave" alt="">
      </div> -->
	  </div>
  </div>
</template>

<script>
import MiniCloudsSection from '../Template/MiniCloudsSection'
import Ticket from '../../assets/img/ticket.png'
import FarolBarra from '../../assets/img/svg/farol_da_barra.svg'
import WaveYellow from '../../assets/img/svg/ondas_amarelas.svg'
import Sum from '../../assets/img/svg/sol.svg'

export default {
  data () {
    return {
      ticket: Ticket,
      sum: Sum,
      farol: FarolBarra,
      wave: WaveYellow
    }
  },
  components: {MiniCloudsSection}
}
</script>

<style lang="stylus" scoped>
.ticket-block
  margin-top 2em
  .link-ticket
    position: absolute
    left: 0
    right: 0
    display: flex
    align-items: center
    justify-content: center
    margin-top: 14rem
    img
      background-color #000
  .sum
    width: 5rem
    position: absolute
    right: 12rem
    margin-top: 8rem
  .farol-barra
    width: 10rem
    position: absolute
    right: 7rem
    margin-top: 12rem
  .wave-yellow
    position: relative
    top: 18rem

</style>
