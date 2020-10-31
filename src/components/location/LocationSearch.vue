<template>
  <div>
    <label for="search-location" class="hidden">Search Location</label>
    <input
        id="search-location"
        placeholder="Search"
        v-bind:value="value"
        @input="$emit('input', $event.target.value)"
        class="w-full px-5 py-2 border outline-none"
    />
  </div>
</template>

<script>
export default {
  name: 'LocationSearch',
  props: ['value']
}
</script>

<style scoped>

</style>
