<template>
  <div>
    <Navbar />
    <Spinner v-if="fetching" />

    <MarginalContainer v-else>
      <h1 class="text-white mb-10 text-2xl">
        Search result for {{ search }} ({{ searchResult.length }})
      </h1>

      <div v-if="!searchResult.length">
        <img
          class="object-cover w-40 m-auto mt-5"
          src="../assets/not-found.png"
        />
        <div class="text-center mt-4 text-gray-500">
          <h1 class="text-2xl text-gray-300">It's not here.</h1>
          <p class="text-sm mt-2">Check Hades, just in case...</p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-4 mb-10">
        <Card
          v-for="(character, i) in searchResult"
          :key="i"
          :character="character"
        />
      </div>
    </MarginalContainer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  head() {
    return {
      title: `Search result for ${this.search} | Superheroes`,
    }
  },
  computed: {
    ...mapState({ fetching: (state) => state.fetching }),
    ...mapState({ searchResult: (state) => state.searchResult }),
  },
  mounted() {
    const query = this.$route.query
    this.search = query.q
    this.searchAction(this.search)
  },
  methods: {
    ...mapActions(['searchAction']),
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
