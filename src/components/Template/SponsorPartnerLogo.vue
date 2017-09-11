<template>
    <div class="col col-4">
        <img class="img-logo" :src="logoImage" alt="Logotipo do patrocinador">
    </div>
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