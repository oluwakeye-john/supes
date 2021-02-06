<template>
  <div class="px-6 md:px-20 py-3 flex justify-between items-center">
    <img class="navbar__image" src="../assets/superhero.svg" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar__image {
  width: 70px;
  height: 70px;
  animation: slide 1.5s ease-in-out infinite alternate;
}
</style>
