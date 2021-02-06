<template>
  <div>
    <Navbar />
    <!-- <div
      class="px-6 md:px-20 grid grid-cols-2 gap-6 md:gap-12 md:grid-cols-4 mt-10"
    >
      <Card v-for="(_, i) in 9" :key="i" />
    </div> -->
    <Spinner />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 40px;
}
</style>
