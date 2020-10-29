<template>
  <div class="flex flex-wrap">
    <div class="flex justify-center items-center h-64 w-full border-t" v-if="loading">
      <h1 class="text-medium">
        Loading Characters...
      </h1>
    </div>
    <div class="flex justify-center items-center h-64 w-full border-t" v-else-if="!characters.length">
      <h1 class="text-medium">
        No Character Found!
      </h1>
    </div>
    <div class="flex w-6/12 md:w-4/12 lg:w-6/12 xl:w-3/12" v-else v-for="character in characters" :key="character.id">
      <character-card :character="character"/>
    </div>
  </div>
</template>

<script>
import CharacterCard from "@/components/character/CharacterCard";

export default {
  name: "CharacterList",
  components: {CharacterCard},
  props: ['characters', 'loading'],
}
</script>