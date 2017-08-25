<template>
  <div class="container">
    <menu-nav></menu-nav>
    <main-header></main-header>
    <cloud-section></cloud-section>
    <mini-clouds-section></mini-clouds-section>
  </div>
</template>

<script>
  import MenuNav from '../Template/MenuNav'
  import MainHeader from './MainHeader'
  import CloudSection from '../Template/CloudSection'
  import MiniCloudsSection from '../Template/MiniCloudsSection'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      MenuNav,
      MainHeader,
      CloudSection,
      MiniCloudsSection
    }
  }
</script>
