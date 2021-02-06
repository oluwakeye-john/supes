<template>
  <div>
    <Navbar />
    <Spinner v-if="fetching" />
    <MarginalContainer v-else>
      <div class="flex justify-between">
        <img
          class="detail-image w-4/12 object-cover"
          :src="character.image.url"
        />
        <div class="w-7/12">
          <h1 class="text-white text-3xl">{{ character.name }}</h1>
          <h1 class="text-gray-500 text-sm">
            {{ character.biography['full-name'] }}
          </h1>
        </div>
      </div>
    </MarginalContainer>
  </div>
</template>

<script>
import { AXIOS_REQUESTS } from '../../services/types'
export default {
  data() {
    return {
      id: null,
      fetching: true,
      character: () => ({}),
    }
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
  },
}
</script>

<style scoped>
.detail-image {
  height: 400px;
}
</style>