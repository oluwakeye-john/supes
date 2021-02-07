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
import { TimelineLite } from 'gsap'
export default {
  mounted() {
    const timeline = new TimelineLite()
    timeline.to('.spinner', {
      duration: 1.5,
      rotate: 360,
      repeat: -1,
      yoyo: true,
    })
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
