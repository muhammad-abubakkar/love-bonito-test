<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-xl my-2">{{heading}}</h2>
    <table class="w-full text-sm">
      <thead>
        <tr class="text-left border-b">
          <th>Image</th>
          <th>Name</th>
          <th>Species</th>
          <th>Type</th>
          <th>Episodes</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="character in otherCharacters" :key="character.id" class="border-t">
        <td class="py-2">
            <img :src="character.image" :alt="character.name" width="40">
        </td>
        <td class="py-2">{{ character.name }}</td>
        <td class="py-2">{{ character.species }}</td>
        <td class="py-2">{{ character.type }}</td>
        <td class="py-2">{{ character.episode.length }}</td>
        <td class="py-2">{{ character.status }}</td>
      </tr>
      <tr v-if="character.loading">
        <td class="text-center py-2" colspan="5">Loading Characters...</td>
      </tr>
      <tr v-else-if="!character.list.length">
        <td class="text-center py-2" colspan="5">No Character Found</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CharactersTable',
  props: ['character', 'heading'],
  created () {
    if (this.character.list.length === 0) {
      const segments = this.character.selected.location.url.split('/')
      const locationID = segments[segments.length - 1]
      this.getLocation(locationID)
    }
  },
  computed: {
    ...mapGetters({
      otherCharacters: 'character/getSameLocationCharacters'
    })
  },
  methods: {
    ...mapActions({
      getLocation: 'location/getLocation'
    })
  }
}
</script>
