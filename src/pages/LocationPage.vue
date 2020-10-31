<template>
  <div class="flex">
    <side-bar />
    <div class="w-full md:w-8/12 lg:w-9/12">
      <select-message v-if="!location.selected"/>
      <location-characters v-else :location="location.selected"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SideBar from '@/components/SideBar'
import SelectMessage from '@/components/location/SelectMessage'
import LocationCharacters from '@/components/location/LocationCharacters'

export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Home Page'
  },
  computed: {
    ...mapState(['location'])
  },
  components: {
    SideBar,
    SelectMessage,
    LocationCharacters
  }
}
</script>
