<template>
  <div class="bg-cardBg">
    <nuxt-link :to="link">
      <img
        :src="character.image.url"
        class="w-full h-40 md:h-64 object-cover"
      />
      <div class="p-4">
        <h1 class="text-white text-2xl">{{ character.name }}</h1>
        <h1 class="text-gray-500 text-sm">
          {{ character.biography['full-name'] }}
        </h1>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    link() {
      return `/character/${this.character.id}`
    },
  },
}
</script>
