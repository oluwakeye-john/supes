<template>
  <div class="bg-cardBg">
    <nuxt-link :to="link">
      <div class="relative">
        <img
          :src="character.image.url"
          class="w-full h-40 md:h-64 object-cover"
        />
        <span
          class="absolute top-0 right-0 text-white px-2 mt-2 mr-2 text-xs rounded font-bold bg-red-800"
          :class="{ 'bg-green-800': character.biography.alignment === 'good' }"
          >{{ character.biography.alignment }}</span
        >
      </div>
      <div class="p-4 flex justify-between items-start">
        <div>
          <h1 class="text-white text-lg md:text-2xl">{{ character.name }}</h1>
          <p class="text-gray-500 text-sm">
            {{ character.biography['full-name'] }}
          </p>
        </div>
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
