<template>
  <div class="location-card" :class="onSelected" @click="onSelect">
    <h4 class="font-bold">{{ location.name }}</h4>
    <div class="text-xs">{{ location.dimension }}</div>
    <div class="flex justify-between text-sm font-medium">
      <div>{{ location.type }}</div>
      <div>{{ residents }}</div>
    </div>
  </div>
</template>

<script>
import LocationData from "@/models/location";

export default {
  name: "LocationCard",
  props: {
    selected: Number,
    location: {
      type: LocationData
    }
  },
  computed: {
    onSelected() {
      return this.selected === this.location.id ? 'location-card-selected' : ''
    },
    residents() {
      let count = this.location.residents.length
      return count > 1 ? `${count} residents` : `${count} resident`
    }
  },
  methods: {
    onSelect() {
      this.$emit('select', this.location)
    },

  }
}
</script>

<style scoped>

</style>