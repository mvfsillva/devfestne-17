<template>
  <div class="container">
    <menu-nav></menu-nav>
    <main-header></main-header>
    <cloud-section></cloud-section>
    <mini-clouds-section></mini-clouds-section>
    <event-info></event-info>
  </div>
</template>

<script>
  import MainHeader from './MainHeader'
  import EventInfo from './EventInfo'
  import MenuNav from '../Template/MenuNav'
  import CloudSection from '../Template/CloudSection'
  import MiniCloudsSection from '../Template/MiniCloudsSection'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      MainHeader,
      EventInfo,
      MenuNav,
      CloudSection,
      MiniCloudsSection
    }
  }
</script>
