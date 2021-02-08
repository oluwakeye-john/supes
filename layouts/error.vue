<template>
  <div>
    <Navbar />
    <MarginalContainer>
      <div
        class="flex flex-col md:flex-row md:justify-between items-center mb-10"
      >
        <img :src="pageNotFound" class="not-found-image w-full md:w-5/12" />

        <div class="text-gray-500 w-full md:w-7/12 text-center">
          <h1 class="text-gray-300 text-5xl font-bold">Sorry</h1>
          <p>What you are looking for has been deleted</p>
          <p>or prolly never existed.</p>

          <div ref="gauntlet">
            <img
              :src="gauntletImage"
              class="h-20 mx-auto mt-10 mb-3 home-image"
              @click="goHome"
            />
          </div>
          <p class="text-sm">
            Click
            <span class="up-icon">☝️</span>
            to go home
          </p>
        </div>
      </div>
    </MarginalContainer>
  </div>
</template>

<script>
import remoteImages from '~/assets/remote'
import animations from '~/animations'
export default {
  computed: {
    gauntletImage() {
      return remoteImages.gauntlet
    },
    pageNotFound() {
      return remoteImages.pageNotFound
    },
  },
  mounted() {
    animations.upIconAnimation('.up-icon')
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.not-found-image {
  height: 400px;
  object-fit: cover;
}

.up-icon {
  display: inline-block;
  font-size: 25px;
}
</style>
