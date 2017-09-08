<template>
  <div>
    <menu-nav/>
    <main-header/>
    <event-info/>
    <view-map />
    <sponsors/>
    <partners/>
    <contacts/>
    <footer-section/>
  </div>
</template>

<script>
  import MenuNav from '../Template/MenuNav'
  import MainHeader from './MainHeader'
  import EventInfo from './EventInfo'
  import ViewMap from './ViewMap'
  import Sponsors from './Sponsors'
  import Partners from './Partners'
  import Contacts from './Contacts'
  import FooterSection from './Footer'

  export default {
    components: {
      MenuNav,
      MainHeader,
      EventInfo,
      ViewMap,
      Sponsors,
      Partners,
      Contacts,
      FooterSection
    }
  }
</script>
