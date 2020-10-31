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
      <tr v-for="episode in episode.list" :key="episode.id" class="border-t">
        <td class="py-2">{{ episode.episode }}</td>
        <td class="py-2">{{ episode.name }}</td>
        <td class="py-2">{{ episode.characters.length }}</td>
        <td class="py-2">{{ new Date(episode.air_date).toDateString() }}</td>
        <td class="py-2">{{ new Date(episode.created).toDateString() }}</td>
      </tr>
      <tr v-if="episode.loading">
        <td class="text-center py-2" colspan="5">Loading Episodes...</td>
      </tr>
      <tr v-else-if="!episode.list.length">
        <td class="text-center py-2" colspan="5">No Episode Found</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EpisodesTable',
  props: ['episode']
}
</script>
