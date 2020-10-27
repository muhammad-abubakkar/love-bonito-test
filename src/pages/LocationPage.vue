<template>
  <div class="flex">
    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12">
      <LocationSearch v-model="search" />
      <div class="sidebar">
        <location-card
            v-for="loc in results" :key="loc.id"
            :location="loc"
            @select="onSelect(loc)"
            :selected="location.id"
        />
      </div>
      <LocationPager v-if="info" :info="info" @onNext="changePage" @onPrev="changePage" />
    </div>
    <div class="w-full sm:w-6/12 md:w-8/12 lg:w-9/12">
      <select-message v-if="!location.id"/>
      <location-characters v-else :location="location"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import debounce from 'debounce'
import Location from "@/models/location";
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
      location: {id: 0, residents: []},
      info: null,
      results: []
    }
  },
  watch: {
    search: debounce(function() {
      this.info.page = 1
      this.getLocations(1, this.search)
    }, 750)
  },
  created() {
    this.getLocations(1, "")
  },
  components: {
    LocationCharacters,
    SelectMessage,
    LocationCard,
    LocationPager,
    LocationSearch,
  },
  methods: {
    onSelect: function (location) {
      this.location = location
    },
    changePage: function(page) {
      this.getLocations(page, this.search)
    },
    async getLocations(page, search) {
      try {
        let query = `page=${page}&name=${search}`
        let response = await axios.get(`https://rickandmortyapi.com/api/location?${query}`)
        this.info = response.data.info
        this.results = response.data.results.map(location => new Location(location))
        // if (this.results.length) {
        //   this.location = this.results[0]
        // }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>