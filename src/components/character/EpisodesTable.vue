<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-xl my-2">Episodes</h2>
    <table class="w-full text-sm">
      <thead>
        <tr class="text-left border-b">
          <th>Code</th>
          <th>Name</th>
          <th>Characters</th>
          <th>Air Date</th>
          <th>Created Date</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="episode in episodes" :key="episode.id" class="border-t">
        <td class="py-2">{{ episode.episode }}</td>
        <td class="py-2">{{ episode.name }}</td>
        <td class="py-2">{{ episode.characters.length }}</td>
        <td class="py-2">{{ new Date(episode.air_date).toDateString() }}</td>
        <td class="py-2">{{ new Date(episode.created).toDateString() }}</td>
      </tr>
      <tr v-if="loading">
        <td class="text-center" colspan="5">Loading Episodes...</td>
      </tr>
      <tr v-else-if="!episodes.length">
        <td class="text-center" colspan="5">No Episode Found</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Episode from "@/models/episode";
import Character from "@/models/character";
import {getEpisodeIds} from "@/helpers/character";

export default {
  name: "EpisodesTable",
  props: {
    character: Character
  },
  data() {
    return {
      loading: true,
      episodes: []
    }
  },
  created() {
    this.getEpisodes(this.character)
  },
  methods: {
    async getEpisodes(character) {
      let ids = getEpisodeIds(character)
      if (!ids) {
        this.episodes = []
        return
      }
      this.loading = true
      try {
        let response = await axios.get(`https://rickandmortyapi.com/api/episode/${ids}`)
        let data = response.data
        if (Array.isArray(data)) {
          this.episodes = data.map(episode => new Episode(episode))
        } else {
          this.episodes = [new Episode(data)]
        }
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    }
  }
}
</script>