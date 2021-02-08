<template>
  <img
    class="object-cover m-auto mt-5 h-64 empty-placeholder"
    src="https://res.cloudinary.com/johnprops/image/upload/c_scale,f_auto,w_400/v1612652863/superheroes/not-found_eavxgx.png"
  />
</template>

<script>
import animations from '../animations'
export default {
  mounted() {
    animations.emptyPlaceholder('.empty-placeholder')
  },
}
</script>

<style scoped>
.empty-placeholder {
  opacity: 0;
  transform: scale(0);
}
</style>
