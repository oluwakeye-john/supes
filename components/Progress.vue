<template>
  <client-only>
    <div class="">
      <vue-ellipse-progress
        :thickness="5"
        :size="130"
        color="#17BD70"
        empty-color="#2b2b2b"
        font-color="#fff"
        :progress="formattedValue"
        class="m-auto"
        :determinate="loading"
      >
        <p class="text-white text-center">{{ name }}</p>
        <p class="text-white text-center">{{ value }}</p>
      </vue-ellipse-progress>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    formattedValue() {
      const val = Number(this.value)
      if (isNaN(val)) {
        return null
      }
      return val
    },
    loading() {
      return this.formattedValue === null
    },
  },
}
</script>
