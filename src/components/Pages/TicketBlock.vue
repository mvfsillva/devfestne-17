<template>
  <div class="ticket-block">
		<div class="container">
      <a href="https://loja.tampa.works/produto/devfest-nordeste-2017/" target="_blank" class="link-ticket">
        <img :src="ticket" alt="Comprar" >
      </a>
	  	<mini-clouds-section/>
	  </div>
  </div>
</template>

<script>
import MiniCloudsSection from '../Template/MiniCloudsSection'
import Ticket from '../../assets/img/ticket.png'
export default {
  data () {
    return {
      ticket: Ticket
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

</style>
