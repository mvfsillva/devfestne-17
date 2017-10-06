<template>
  <main>
    <menu-nav/>
    <main-header/>
    <event-info/>
    <view-map/>
    <speakers/>
    <ticket/>
    <sponsors/>
    <partners/>
    <footer-page/>
  </main>
</template>

<script>
  import MenuNav from '../Template/MenuNav'
  import MainHeader from './MainHeader'
  import EventInfo from './EventInfo'
  import ViewMap from './ViewMap'
  import Speakers from './Speakers'
  import Ticket from './Ticket'
  import Sponsors from './Sponsors'
  import Partners from './Partners'
  import FooterPage from './Footer'

  export default {
    components: {
      MenuNav,
      MainHeader,
      EventInfo,
      ViewMap,
      Speakers,
      Ticket,
      Sponsors,
      Partners,
      FooterPage
    }
  }
</script>
