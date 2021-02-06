<template>
  <div>
    <Navbar />
    <Spinner v-if="fetching" />

    <MarginalContainer v-else>
      <List :items="searchResult" :title="title" />
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
      title: this.pageTitle,
    }
  },
  computed: {
    ...mapState({ fetching: (state) => state.fetching }),
    ...mapState({ searchResult: (state) => state.searchResult }),
    title() {
      return `Search result for ${this.search}`
    },
    pageTitle() {
      return `${this.title} | Superheroes`
    },
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
