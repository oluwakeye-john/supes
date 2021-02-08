<template>
  <img
    class="object-cover m-auto mt-5 h-64 empty-placeholder"
    :src="characterNotFound"
  />
</template>

<script>
import animations from '../animations'
import remoteImages from '~/assets/remote'
export default {
  computed: {
    characterNotFound() {
      return remoteImages.characterNotFound
    },
  },
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
