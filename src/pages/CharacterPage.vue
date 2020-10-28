<template>
  <div class="flex flex-wrap mt-5" v-if="!loading">
    <div class="flex flex-wrap w-full">
      <div class="w-full lg:w-3/12">
        <img
            :src="character.image"
            :alt="`${character.name}'s Image`"
            class="mx-auto p-3 border border-gray-600"
        />
      </div>
      <div class="flex flex-col w-full pl-3 lg:w-9/12">
        <character-info :character="character" />
        <div class="hidden xl:block">
          <episodes-table :character="character"/>
        </div>
      </div>
    </div>
  </div>
  <div class="text-xl font-medium mt-5 text-center" v-else>
    Loading Character...
  </div>
</template>

<script>
import axios from "axios";
import Character from "@/models/character";
import CharacterInfo from "@/components/character/CharacterInfo";
import EpisodesTable from "@/components/character/EpisodesTable";

export default {
  name: 'CharacterPage',
  components: {EpisodesTable, CharacterInfo},
  metaInfo: {
    title: 'Character Page'
  },
  data() {
    return {
      loading: true,
      character: null,
    }
  },
  created() {
    this.getCharacter(this.$route.params.id)
  },
  methods: {
    async getCharacter(id) {
      this.loading = true;
      try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        let data = response.data
        this.character = new Character(data)
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>