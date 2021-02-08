<template>
  <div>
    <p v-for="(item, i) in items" :key="i" class="text-gray-500 text-sm mt-3">
      <span class="text-gray-300 font-bold w-24 inline-block">{{
        item.name
      }}</span>
      <span class="capitalize">{{ item.value }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
