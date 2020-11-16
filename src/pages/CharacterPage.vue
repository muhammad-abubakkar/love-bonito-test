<template>
  <div class="flex flex-wrap mt-5" v-if="!character.loading">
    <div class="flex flex-wrap w-full">
      <div class="w-full lg:w-3/12">
        <img
            :src="character.selected.image"
            :alt="`${character.selected.name}'s Image`"
            class="mx-auto p-3 border border-gray-600"
        />
      </div>
      <div class="flex flex-col w-full pl-3 lg:w-9/12">
        <character-info :character="character.selected" />
        <div class="hidden xl:block">
          <episodes-table :episode="episode"/>
        </div>
        <div class="hidden xl:block">
          <characters-table :character="character" :heading="`Other Characters from ${character.selected.location.name}`"/>
        </div>
      </div>
    </div>
  </div>
  <div class="text-xl font-medium mt-5 text-center" v-else>
    Loading Character...
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CharacterInfo from '@/components/character/CharacterInfo'
import EpisodesTable from '@/components/character/EpisodesTable'
import CharactersTable from '@/components/character/CharactersTable'

export default {
  name: 'CharacterPage',
  components: { EpisodesTable, CharacterInfo, CharactersTable },
  metaInfo: {
    title: 'Character Page'
  },
  computed: {
    ...mapState({
      episode: state => state.episode,
      character: state => state.character
    })
  },
  created () {
    this.getCharacter(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getCharacter: 'character/getCharacter'
    })
  }
}
</script>
