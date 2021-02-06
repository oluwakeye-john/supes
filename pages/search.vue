<template>
  <div>
    <Navbar />
    <Spinner v-if="fetching" />
    <MarginalContainer v-else>
      <h1 class="text-white mb-10 text-2xl">Search result for {{ search }}</h1>
      <div class="grid grid-cols-2 gap-6 md:gap-12 md:grid-cols-4">
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
      this.results = response.results
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
