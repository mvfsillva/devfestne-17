<template>
  <section class="ticket text-center">
    <div class="container">
      <block-title title="21 de outubro 2017" color="white" />
      <h5 class="text-center info-date"> Sábado, das 8h às 18:30h </h5>
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
import Ticket from 'assets/img/others/ticket.png'
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
  min-height 22vh
  padding 60px 0 80px
  background-color #2b3137

.info-date
  color #eee
  text-transform uppercase
  letter-spacing .8px
  font-family 'Roboto', sans-serif
  font-weight 100
  font-size 16px

.link-ticket
  margin-top 2rem
</style>
