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
