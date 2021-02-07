<template>
  <div>
    <Navbar />
    <MarginalContainer>
      <div class="flex flex-col md:flex-row md:justify-between items-center">
        <img src="../assets/404.png" class="not-found-image w-full md:w-5/12" />

        <div class="text-gray-500 w-full md:w-7/12 text-center">
          <h1 class="text-gray-300 text-5xl font-bold">404</h1>
          <p>That page has been snapped out existence.</p>
          <p>Unfortunately, the mad titan was a step ahead of you.</p>
          <p>To snap back, click the gauntlet.</p>

          <!-- <nuxt-link to="/"> -->
          <div ref="gauntlet">
            <img
              src="../assets/gauntlet.png"
              class="h-20 mx-auto mt-10 mb-3 home-image"
              @click="goHome"
            />
          </div>
          <!-- </nuxt-link> -->
        </div>
      </div>
    </MarginalContainer>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$refs.gauntlet.style.animation = 'explode 2s 1 linear'
      setTimeout(() => {
        this.$router.push('/')
      }, 1500)
    },
  },
}
</script>

<style scoped>
.not-found-image {
  height: 400px;
  object-fit: cover;
}

.home-image {
  animation: glow 1s infinite linear alternate;
}
</style>
