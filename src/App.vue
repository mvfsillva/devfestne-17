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
  *:before, *:after
  box-sizing border-box

  .app
    background #1A1F21
</style>
