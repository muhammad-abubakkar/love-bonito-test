<template>
  <div class="character-card">
    <div class="w-full" v-lazy-container="{selector: 'img'}">
      <img :data-src="character.image" data-loading="/placeholder.webp" :alt="character.name + '\'s Image'" class="w-full">
    </div>
    <div class="w-full mt-2">
      <h4 class="font-bold mb-2">{{ character.name }}</h4>
      <div class="flex justify-between text-sm">
        <div>{{ character.type || 'Unknown' }}</div>
        <div>{{ episodes }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Character from "@/models/character";

export default {
  name: "CharacterCard",
  props: {
    character: Character
  },
  computed: {
    episodes() {
      let count = this.character.episode.length
      return count > 1 ? `${count} episodes` : `${count} episode`
    }
  },
}
</script>

<style scoped>

</style>