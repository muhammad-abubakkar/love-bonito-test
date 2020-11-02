<template>
  <div class="sidebar md:shadow-none md:left-0 md:w-4/12 md:relative lg:w-3/12" :class="toggleSidebar" data-testid="sidebar">
    <location-search v-model="search"/>
    <div class="locations">
      <location-card
          v-for="loc in location.list" :key="loc.id"
          :location="loc"
          @select="setLocation(loc)"
          :selected="selectedId"
      />
    </div>
    <location-pager
        v-if="location.info"
        :info="location.info"
        @onNext="changePage"
        @onPrev="changePage"
    />
  </div>
</template>

<script>
import LocationCard from '@/components/location/LocationCard'
import LocationPager from '@/components/location/LocationPager'
import LocationSearch from '@/components/location/LocationSearch'
import debounce from 'debounce'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SideBar',
  components: { LocationPager, LocationCard, LocationSearch },
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: debounce(function () {
      this.setCurrentPage(1)
      this.getLocations({ page: 1, search: this.search })
    }, 750)
  },
  computed: {
    ...mapState(['location', 'character', 'showSideBar']),
    toggleSidebar () {
      return {
        'sidebar-show': this.showSideBar,
        'sidebar-hide': !this.showSideBar
      }
    },
    selectedId () {
      const { selected } = this.location
      return selected ? selected.id : 0
    }
  },
  created () {
    this.getLocations({ page: 1, search: '' }).then(() => {
      if (this.location.list.length) {
        this.setLocation(this.location.list[0])
      }
    })
  },
  methods: {
    ...mapActions({
      setLocation: 'location/setLocation',
      getLocations: 'location/getLocations',
      setCurrentPage: 'location/setCurrentPage'
    }),
    changePage: function (page) {
      this.getLocations({ page, search: this.search })
    }
  }
}
</script>

<style scoped>

</style>
