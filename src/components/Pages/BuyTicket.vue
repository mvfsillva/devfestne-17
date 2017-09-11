<template>
    <section class="ticket" id="ticket">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="ticket-title">#vemprabahia #defne2k17</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                <a href="https://loja.tampa.works/produto/devfest-nordeste-2017/" target="_blank" class="link-ticket">
                    <img :src="Ticket" alt="Comprar ingresso">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import Ticket from 'assets/img/ticket.png'
    export default {
        data() {
            return {
                Ticket
            }
        }
    }
</script>

<style lang="stylus" scoped>
.ticket
    min-height 16vh
    padding 40px 0 40px
    background-color #00a158

.ticket-title
  text-transform uppercase
  font-weight 800
  font-family 'Raleway', sans-serif
  color #000
</style>
