<template>
  <div class="bg-cardBg">
    <nuxt-link :to="link">
      <div class="relative">
        <img
          :src="character.image.url"
          class="w-full h-64 md:h-64 object-cover"
          @error="handleImageError"
        />
        <span
          class="absolute top-0 right-0 text-white px-2 mt-2 mr-2 text-xs rounded font-bold bg-red-800"
          :class="{
            'bg-green-800': characterType === 'Hero',
            'bg-orange-800': characterType === 'Neutral',
          }"
          >{{ characterType }}</span
        >
      </div>
      <div class="p-4 flex justify-between items-center">
        <div>
          <h1 class="text-white text-lg md:text-2xl">{{ character.name }}</h1>
          <p class="text-gray-500 text-sm">
            {{ character.biography['full-name'] }}
          </p>
        </div>
        <p class="text-white text-sm">
          {{ overallStat }}
          <sup>%</sup>
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { getOverallStat } from '../../utils/character'
import remoteImages from '~/assets/remote'
export default {
  props: {
    character: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    link() {
      return `/character/${this.character.id}`
    },

    characterType() {
      switch (this.character.biography.alignment) {
        case 'good': {
          return 'Hero'
        }
        case 'bad': {
          return 'Villian'
        }
        case 'neutral': {
          return 'Neutral'
        }
        default: {
          return 'Unknown'
        }
      }
    },
    overallStat() {
      return getOverallStat(this.character)
    },
  },
  methods: {
    handleImageError(e) {
      e.target.src = remoteImages.emptyPlaceholder
    },
  },
}
</script>
