<template>
  <div class="container">
    <menu-nav></menu-nav>
    <main-header></main-header>
    <cloud-section></cloud-section>
  </div>
</template>

<script>
  import MenuNav from '../Template/MenuNav'
  import MainHeader from './MainHeader'
  import CloudSection from '../Template/CloudSection'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      MenuNav,
      MainHeader,
      CloudSection
    }
  }
</script>
