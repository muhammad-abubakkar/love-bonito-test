<template>
  <div class="w-full lg:w-10/12 mx-auto">
    <div class="flex items-center bg-blue-400">
      <a class="px-5 text-white font-bold cursor-pointer inline md:hidden" @click="toggleSideBar">Locations</a>
      <h1 class="font-bold py-3 px-5 text-2xl text-white">
        Rick and Monty's API
      </h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['toggleSideBar'])
  }
}
</script>
