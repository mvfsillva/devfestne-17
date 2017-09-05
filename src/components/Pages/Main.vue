<template>
  <div>
    <menu-nav/>
    <main-header/>
    <cloud-section/>
   <mini-clouds-section/>
    <event-info/>
    <view-map />
    <ticket-block/>
    <sponsors/>
    <partners/>
  </div>
</template>

<script>
  import MenuNav from '../Template/MenuNav'
  import MainHeader from './MainHeader'
  import StatisticsBlock from './StatisticsBlock'
  import EventInfo from './EventInfo'
  import CloudSection from '../Template/CloudSection'
  import MiniCloudsSection from '../Template/MiniCloudsSection'
  import TicketBlock from './TicketBlock'
  import ViewMap from './ViewMap'
  import Sponsors from './Sponsors'
  import Partners from './Partners'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      MainHeader,
      StatisticsBlock,
      EventInfo,
      ViewMap,
      MenuNav,
      CloudSection,
      MiniCloudsSection,
      TicketBlock,
      Sponsors,
      Partners
    }
  }
</script>
