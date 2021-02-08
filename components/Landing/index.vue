<template>
  <div class="landing-container" @mousemove="handleCursor">
    <Navbar absolute />
    <div ref="cursor" class="cursor">
      <div class="cursor__dot" />
    </div>
    <div
      class="landing-container__image"
      :style="{ backgroundImage: landingImage }"
    />
    <div class="landing-flex">
      <div class="px-6 md:px-20">
        <h1 class="text-white text-3xl md:text-5xl font-bold mb-10">
          <span class="word">All </span>
          <span class="word">your </span>
          <span class="word">supes </span>
          <span class="word">in </span>
          <span class="word">one </span>
          <span class="word">place. </span>
          <span class="word">Villians </span>
          <span class="word">and </span>
          <span class="word">Heroes. </span>
        </h1>
        <form
          class="flex flex-col md:flex-row md:justify-center landing-form"
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

        <div class="starfish-container">
          <img class="starfish" src="../../assets/starfish.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import remoteImages from '../../assets/remote'
import animations from '~/animations'
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    landingImage() {
      return `url(${remoteImages.landing})`
    },
  },
  mounted() {
    animations.landingAnimation({
      word: '.word',
      form: '.landing-form',
      starfish: '.starfish',
    })
  },
  methods: {
    ...mapActions(['fetchingAction']),
    handleCursor(e) {
      this.$refs.cursor.style.top = e.pageY + 'px'
      this.$refs.cursor.style.left = e.pageX + 'px'
    },
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
  cursor: none;
  overflow: hidden;
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
  /* background-image: url(); */
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
}

.cursor {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #17bd70;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.cursor__dot {
  width: 2px;
  height: 2px;
  background-color: #17bd70;
}

.heroText {
  display: inline-block;
}

.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(-100px);
  color: #17bd70;
}

.landing-form {
  transform: translateY(70px);
  opacity: 0;
}

.starfish-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
}

.starfish {
  width: 220px;
  height: 220px;
  margin: 0 auto;
  opacity: 0;
}
</style>
