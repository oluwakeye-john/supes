<template>
  <div>
    <h1 class="text-white mb-10 text-2xl">{{ title }} ({{ items.length }})</h1>

    <div v-if="!items.length">
      <img
        class="object-cover m-auto mt-5 h-64"
        src="https://res.cloudinary.com/johnprops/image/upload/c_scale,f_auto,w_400/v1612652863/superheroes/not-found_eavxgx.png"
      />
      <div class="text-center mt-4 text-gray-500">
        <h1 class="text-2xl text-gray-300">It's not here.</h1>
        <p class="text-sm mt-2">Check Hades, just in case...</p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-4 mb-10">
      <Card
        v-for="character in items"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
