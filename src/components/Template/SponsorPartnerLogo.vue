<template>
  <img :src="logoImage" alt="Logotipo do patrocinador">
</template>

<script>
export default {
  props: {
    logoImage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
img
  display block
  margin 0px auto
</style>