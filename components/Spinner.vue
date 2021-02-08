<template>
  <div class="spinner-container">
    <div class="spinner"><img class="spinner-image" :src="spinner" /></div>
  </div>
</template>

<script>
import animations from '~/animations'
import remoteImages from '~/assets/remote'
export default {
  computed: {
    spinner() {
      return remoteImages.spinner
    },
  },
  mounted() {
    animations.spinnerAnimation('.spinner')
  },
}
</script>

<style scoped>
.spinner-container {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spinner {
  @apply bg-bgColor;
  @apply border-2;
  margin: auto;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-color: transparent;
  border-color: #17bd70;
  padding: 7px;
}

.spinner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
