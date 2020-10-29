<template>
  <div class="flex flex-col mx-auto lg:mx-0">
    <h1 class="text-3xl font-bold mb-3">{{character.name}}</h1>
    <table>
      <tr>
        <th class="text-left w-48">Species</th>
        <td>{{character.species || '---'}}</td>
      </tr>
      <tr>
        <th class="text-left">Type</th>
        <td>{{character.type || '---'}}</td>
      </tr>
      <tr>
        <th class="text-left">Status</th>
        <td>{{character.status || '---'}}</td>
      </tr>
      <tr>
        <th class="text-left">Episodes</th>
        <td>{{character.episode.length}}</td>
      </tr>
      <tr>
        <th class="text-left">Created Date</th>
        <td>{{new Date(character.created).toDateString()}}</td>
      </tr>
    </table>
    <router-link to="/locations" class="text-blue-600 font-bold mt-5">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: "CharacterInfo",
  props: ['character'],
}
</script>

<style scoped>

</style>