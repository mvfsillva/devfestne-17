<template>
  <div class="container">
    <menu-nav></menu-nav>
    <main-header></main-header>
  </div>
</template>

<script>
  import MenuNav from '../Template/MenuNav'
  import MainHeader from './MainHeader'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      MenuNav,
      MainHeader
    }
  }
</script>
