<template>
  <div class="landing-container">
    <Navbar absolute />
    <div class="landing-container__image" />
    <div class="landing-flex">
      <div class="px-6 md:px-20">
        <h1 class="text-white text-3xl md:text-5xl font-bold mb-10">
          All your supes in one place. Villians and Heroes
        </h1>
        <form
          class="flex flex-col md:flex-row md:justify-center"
          @submit.prevent="submit"
        >
          <input
            v-model="search"
            required
            class="bg-bgColor border-gray-700 border text-white rounded-sm outline-none px-4 py-2 w-full md:w-1/2 mb-5 md:mb-0"
            placeholder="Search for a superhero. E.g Batman"
          />
          <Button>Go 🚀 💥</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    ...mapActions(['fetchingAction']),
    submit() {
      this.fetchingAction(true)
      this.$router.push(`/search?q=${this.search}`)
    },
  },
}
</script>

<style scoped>
.landing-container {
  position: relative;
  font-size: 14px;
}

.landing-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  min-height: 100vh;
}

.landing-container__image {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/bg6.jpg');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
}
</style>
