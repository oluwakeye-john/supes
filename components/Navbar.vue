<template>
  <div
    class="px-6 md:px-20 py-3 flex justify-between items-center"
    :class="{ 'navbar--absolute': absolute }"
  >
    <nuxt-link exact to="/">
      <img class="navbar__image" src="../assets/superhero.svg" />
    </nuxt-link>

    <p class="text-gray-500 font-bold text-sm hover:text-primary">
      <a href="https://twitter.com/oluwakeyejohn" target="_blank"
        >By Oluwakeye John 👨‍💻👌
      </a>
    </p>
  </div>
</template>

<script>
import { TimelineLite, Back } from 'gsap'
export default {
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const timeline = new TimelineLite()
    timeline.to('.navbar__image', {
      duration: 5,
      y: 15,
      rotate: 30,

      yoyo: true,
      repeat: -1,
      ease: Back.easeInOut,
    })
  },
}
</script>

<style scoped>
.navbar--absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.navbar__image {
  width: 70px;
  height: 70px;
  /* animation: slide 2s ease-in-out infinite alternate; */
}
</style>
