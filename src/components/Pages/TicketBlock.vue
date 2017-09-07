<template>
  <div id="tickets" class="ticket-block">
		<div class="container">
      <h1>Compre agora seu ingresso!</h1>
      <a href="https://loja.tampa.works/produto/devfest-nordeste-2017/" target="_blank" class="link-ticket">
        <img :src="ticket" alt="Comprar" >
      </a>
	  </div>
  </div>
</template>

<script>
import Ticket from '../../assets/img/ticket.png'

export default {
  data () {
    return {
      ticket: Ticket
    }
  }
}
</script>

<style lang="stylus" scoped>
.ticket-block
  height 80vh
  color #ffc300
  font-size 2.5em
  text-align center
  line-height 30vh
  background url('../../assets/img/historic-center.jpg')
  background-size cover
  text-transform uppercase

  a
    display inline-block
    cursor pointer
    img
      cursor pointer
</style>
