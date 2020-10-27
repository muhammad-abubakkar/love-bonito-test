<template>
  <div>
    {{loading ? 'loading' : 'done'}}
  </div>
</template>

<script>
import axios from "axios";
import Character from "@/models/character";

export default {
  name: 'CharacterPage',
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
    this.getCharacter(this.$route.params.id).then(() => {
      console.log(this.character)
    })
  },
  components: {

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