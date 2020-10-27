<template>
  <div>
    <div class="w-full sm:w-6/12 md:w-4/12 lg:w-3/12">
      <LocationSearch v-model="search" />
      <div class="section">
        <location-card v-for="loc in results" :key="loc.id" :location="loc"/>
      </div>
      <LocationPager v-if="info" :info="info" @onNext="changePage" @onPrev="changePage" />
    </div>
    <div class="w-9/12"></div>
    <div class="flex flex-wrap w-full">

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import debounce from 'debounce'
import Location from "@/models/location";
import LocationCard from "@/components/location/LocationCard";
import LocationPager from "@/components/location/LocationPager";
import LocationSearch from "@/components/location/LocationSearch";

export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Home Page'
  },
  data() {
    return {
      search: '',
      location: null,
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
    LocationPager,
    LocationSearch,
    LocationCard
  },
  methods: {
    changePage: function(page) {
      this.getLocations(page, this.search)
    },
    async getLocations(page, search) {
      try {
        let query = `page=${page}&name=${search}`
        let response = await axios.get(`https://rickandmortyapi.com/api/location?${query}`)
        this.info = response.data.info
        this.results = response.data.results.map(location => new Location(location))
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>