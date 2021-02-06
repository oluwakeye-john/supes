<template>
  <div>
    <Navbar />
    <Spinner v-if="fetching" />

    <MarginalContainer v-else>
      <h1 class="text-white mb-10 text-2xl">
        Search result for {{ search }} ({{ results.length }})
      </h1>

      <div v-if="!results.length">
        <img
          class="object-cover w-40 m-auto mt-5"
          src="../assets/not-found.png"
        />
        <div class="text-center mt-4 text-gray-500">
          <h1 class="text-2xl text-gray-300">It's not here.</h1>
          <p class="text-sm mt-2">Check Hades, just in case...</p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-4">
        <Card
          v-for="(character, i) in results"
          :key="i"
          :character="character"
        />
      </div>
    </MarginalContainer>
  </div>
</template>

<script>
import { AXIOS_REQUESTS } from '../services/types'
export default {
  data() {
    return {
      fetching: true,
      search: '',
      results: [],
    }
  },
  mounted() {
    const query = this.$route.query
    this.search = query.q
    this.get()
  },
  methods: {
    async get() {
      const response = await this.$axios.$get(
        AXIOS_REQUESTS.SEARCH(this.search)
      )
      this.fetching = false
      if (response.results) {
        this.results = response.results
      } else {
        this.results = []
      }
    },
  },
}
</script>

<style scoped>
.search-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 40px;
}
</style>
