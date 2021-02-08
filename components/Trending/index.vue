<template>
  <div class="my-10">
    <MarginalContainer>
      <List title="Popular" :items="trending" />
    </MarginalContainer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({ trending: (state) => state.trending }),
  },
  mounted() {},
  methods: {},
}
</script>
