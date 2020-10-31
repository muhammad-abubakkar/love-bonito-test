<template>
  <div>
    <h2 class="section-title">
      <span class="hidden md:inline mr-1">Characters From</span>
      <span class="font-bold">{{ location.name }}</span>
    </h2>
    <div class="section">
      <character-list :characters="character.list" :loading="character.loading"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CharacterList from '@/components/character/CharacterList'

export default {
  name: 'LocationCharacters',
  components: { CharacterList },
  computed: {
    ...mapState({
      location: state => state.location.selected,
      character: state => state.character
    })
  }
}
</script>
