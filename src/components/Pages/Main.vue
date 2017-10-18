<template>
  <main>
    <main-header/>
    <event-info/>
    <view-map/>
    <speakers/>
    <ticket/>
    <schedule/>
    <sponsors/>
    <partners/>
    <presenter/>
    <footer-page/>
  </main>
</template>

<script>
  import MainHeader from './MainHeader'
  import EventInfo from './EventInfo'
  import ViewMap from './ViewMap'
  import Speakers from './Speakers'
  import Ticket from './Ticket'
  import Schedule from './Schedule'
  import Sponsors from './Sponsors'
  import Partners from './Partners'
  import Presenter from './Presenter'
  import FooterPage from './Footer'
  

  export default {
    components: {
      MainHeader,
      EventInfo,
      ViewMap,
      Speakers,
      Ticket,
      Schedule,
      Sponsors,
      Partners,
      Presenter,
      FooterPage
    }
  }
</script>
