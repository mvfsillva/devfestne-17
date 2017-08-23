<template>
  <div class="container">
    <menu-nav></menu-nav>
    <principal></principal>
  </div>
</template>

<script>
  import MenuNav from '../Template/MenuNav'
  import Principal from './Principal'

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    components: {
      MenuNav,
      Principal
    }
  }
</script>
