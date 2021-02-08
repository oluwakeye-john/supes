<template>
  <div class="spinner-container">
    <div class="spinner">
      <img
        class="spinner-image"
        src="https://res.cloudinary.com/johnprops/image/upload/c_scale,f_auto,w_80/v1612652533/superheroes/loader_hmgb8g.png"
      />
    </div>
  </div>
</template>

<script>
import animations from '~/animations'
export default {
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
