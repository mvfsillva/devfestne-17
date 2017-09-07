<template>
  <div id="app" class="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
 @import '~style/main'
  body
    background $black
</style>
