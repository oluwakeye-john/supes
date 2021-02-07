<template>
  <img
    class="object-cover m-auto mt-5 h-64 empty-placeholder"
    src="https://res.cloudinary.com/johnprops/image/upload/c_scale,f_auto,w_400/v1612652863/superheroes/not-found_eavxgx.png"
  />
</template>

<script>
import { TimelineLite, Elastic } from 'gsap'
export default {
  mounted() {
    const timeline = new TimelineLite()
    timeline.to('.empty-placeholder', {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: Elastic.easeInOut,
    })
  },
}
</script>

<style scoped>
.empty-placeholder {
  opacity: 0;
  transform: scale(0);
}
</style>
