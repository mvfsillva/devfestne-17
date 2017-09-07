<template>
  <div class="container">
    <menu-nav/>
    <main-header/>
    <event-info/>
    <view-map />
    <ticket-block/>
    <sponsors/>
    <partners/>
    <footer-section/>
  </div>
</template>

<script>
  import MainHeader from './MainHeader'
  import EventInfo from './EventInfo'
  import MenuNav from '../Template/MenuNav'
  import CloudSection from '../Template/CloudSection'
  import MiniCloudsSection from '../Template/MiniCloudsSection'
  import TicketBlock from './TicketBlock'
  import ViewMap from './ViewMap'
  import Sponsors from './Sponsors'
  import Partners from './Partners'
  import FooterSection from './Footer'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      MainHeader,
      EventInfo,
      ViewMap,
      MenuNav,
      CloudSection,
      MiniCloudsSection,
      TicketBlock,
      Sponsors,
      Partners,
      FooterSection
    }
  }
</script>
