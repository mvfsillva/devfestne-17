<template>
  <section class="ticket text-center">
    <div class="container">
      <block-title title="21 de outubro 2017" color="green" />
      <h5 class="text-center info-date"> Sábado, das 8h às 18h </h5>
      <div class="row justify-content-center">
        <a href="https://loja.tampa.works/produto/devfest-nordeste-2017/" target="_blank" class="link-ticket">
          <img :src="Ticket" alt="Comprar ingresso">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import BlockTitle from '../Template/BlockTitle'
import Ticket from 'assets/img/ticket.png'
export default {
  data() {
    return {
      Ticket
    }
  },
  components: { BlockTitle }
}
</script>

<style lang="stylus" scoped>
.ticket
  min-height 18vh
  padding 40px 0 60px
  background-color #0f0f0f

.info-date
  color #eee
  font-family 'Roboto', sans-serif
  font-weight 100

.link-ticket
  margin-top 2rem
</style>
