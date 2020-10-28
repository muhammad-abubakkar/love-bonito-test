<template>
  <div class="flex border">
    <button class="w-3/12 btn font-bold text-sm" @click.stop="onPrev" :disabled="stopPrev">
      Prev
    </button>
    <div class="w-6/12 flex flex-col justify-between items-center text-xs font-medium py-1 border">
      <span>{{ info.count }} {{ info.count > 1 ? 'Locations' : 'Location' }}</span>
      <span>Page {{ currentPage }} / {{ info.pages }}</span>
    </div>
    <button class="w-3/12 btn font-bold text-sm" @click.stop="onNext" :disabled="stopNext">
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "LocationPager",
  props: ['info'],
  computed: {
    currentPage: function() {
      if (!this.info.prev) {
        return 1
      } else {
        let query = new URLSearchParams(this.info.prev.split('?')[1])
        return Number(query.get('page')) + 1
      }
    },
    stopPrev: function () {
      return this.currentPage < 2
    },
    stopNext: function () {
      return this.currentPage > this.info.pages - 1
    },
  },
  methods: {
    onPrev: function () {
      this.$emit('onPrev', this.currentPage - 1)
    },
    onNext: function () {
      this.$emit('onNext', this.currentPage + 1)
    }
  }
}
</script>