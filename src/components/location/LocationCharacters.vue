<template>
  <div>
    <h2 class="section-title">
      <span class="hidden md:inline mr-1">Characters From</span>
      <span class="font-bold">{{ location.name }}</span>
    </h2>
    <div class="section">
      <character-list :characters="characters" :loading="loading"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Location from "@/models/location";
import Character from "@/models/character";
import CharacterList from "@/components/character/CharacterList";

export default {
  name: "LocationCharacters",
  data() {
    return {
      loading: true,
      characters: []
    }
  },
  props: {
    location: Location
  },
  components: {CharacterList},
  created() {
    this.getLocationCharacters(this.location)
  },
  watch: {
    location: function(location) {
      this.getLocationCharacters(location)
    }
  },
  methods: {
    getCharacterIds(location) {
      return location.residents.map(resident => {
        let segments = resident.split('/')
        return segments.slice(-1)
      }).join(',')
    },
    async getLocationCharacters(location) {
      let ids = this.getCharacterIds(location)
      if (!ids) {
        this.characters = []
        return
      }
      this.loading = true;
      try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`)
        let data = response.data
        if (Array.isArray(data)) {
          this.characters = data.map(character => new Character(character))
        } else {
          this.characters = [new Character(data)]
        }
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    }
  }
}
</script>