<template>
  <div>
    <Navbar />
    <Spinner v-if="fetching" />
    <MarginalContainer v-else>
      <div class="flex justify-between flex-col md:flex-row mb-10">
        <img
          class="detail-image w-full md:w-4/12 object-cover"
          :src="character.image.url"
          @error="handleImageError"
        />

        <div class="w-full md:w-7/12 mt-5 md:mt-0">
          <h3 class="text-white text-3xl mb-8 font-bold">
            {{ character.name }}
          </h3>

          <InfoTable :items="tableItems" />

          <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            <Progress name="Intelligence" :value="powerstats.intelligence" />
            <Progress name="Durability" :value="powerstats.durability" />
            <Progress name="Power" :value="powerstats.power" />
            <Progress name="Speed" :value="powerstats.speed" />
          </div>
        </div>
      </div>
    </MarginalContainer>
  </div>
</template>

<script>
import { AXIOS_REQUESTS } from '../../services/types'
import remoteImages from '~/assets/remote'
export default {
  data() {
    return {
      id: null,
      fetching: true,
      character: () => ({}),
    }
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
  computed: {
    powerstats() {
      return this.character.powerstats
    },
    biography() {
      return this.character.biography
    },
    appearance() {
      return this.character.appearance
    },
    work() {
      return this.character.work
    },
    tableItems() {
      return [
        {
          name: 'Full Name',
          value: this.biography['full-name'] || this.character.name,
        },
        { name: 'Franchise', value: this.biography.publisher },
        { name: 'Gender', value: this.appearance.gender },
        { name: 'Occupation', value: this.work.occupation },
      ]
    },
    pageTitle() {
      if (this.character.name) {
        return `${this.character.name} | Superheroes`
      } else {
        return `Superheroes`
      }
    },
  },

  mounted() {
    this.id = this.$route.params.id
    this.get()
  },
  methods: {
    async get() {
      const response = await this.$axios.$get(AXIOS_REQUESTS.GET_ID(this.id))
      this.character = response
      this.fetching = false
    },
    handleImageError(e) {
      e.target.src = remoteImages.emptyPlaceholder
    },
  },
}
</script>

<style scoped>
.detail-image {
  height: 300px;

  @media (min-width: 768px) {
    height: 400px;
  }
}
</style>
