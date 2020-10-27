<template>
  <div class="flex">
    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12">
      <LocationSearch v-model="search" />
      <div class="sidebar">
        <location-card
            v-for="loc in location.list" :key="loc.id"
            :location="loc"
            @select="setLocation(loc)"
            :selected="selectedId"
        />
      </div>
      <LocationPager
          v-if="location.info"
          :info="location.info"
          @onNext="changePage"
          @onPrev="changePage"
      />
    </div>
    <div class="w-full sm:w-6/12 md:w-8/12 lg:w-9/12">
      <select-message v-if="!location.selected"/>
      <location-characters v-else :location="location.selected"/>
    </div>
  </div>
</template>

<script>
import debounce from 'debounce'
import {mapActions, mapState} from 'vuex'
import LocationCard from "@/components/location/LocationCard";
import LocationPager from "@/components/location/LocationPager";
import SelectMessage from "@/components/location/SelectMessage";
import LocationSearch from "@/components/location/LocationSearch";
import LocationCharacters from "@/components/location/LocationCharacters";

export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Home Page'
  },
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search: debounce(function() {
      this.info.page = 1
      this.getLocations({page: 1, search: this.search})
    }, 750)
  },
  computed: {
    ...mapState(['location', 'character']),
    selectedId() {
      let {selected} = this.location;
      return selected ? selected.id : 0
    },
  },
  created() {
    this.getLocations({page: 1, search: ""}).then(() => {
      if (this.location.list.length) {
        this.setLocation(this.location.list[0])
      }
    })
  },
  components: {
    LocationCard,
    SelectMessage,
    LocationPager,
    LocationSearch,
    LocationCharacters,
  },
  methods: {
    ...mapActions({
      setLocation: 'location/setLocation',
      getLocations: 'location/getLocations'
    }),
    changePage: function(page) {
      this.getLocations({page, search: this.search})
    },
  }
}
</script>