<template>
  <div>
    <Landing />
    <Trending />
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.prefetchAction()
    this.getTrending()
  },
  methods: {
    ...mapActions(['prefetchAction', 'getTrending']),
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
