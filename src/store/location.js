import axios from 'axios'
import Location from "@/models/location";
import {dbStorage} from "@/helpers/offline";

export default {
  namespaced: true,
  state: () => ({
    loading: true,
    selected: null,
    list: [],
    info: null
  }),
  mutations: {
    setCurrentPage(state, page) {
      state.info.page = page
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setInfo(state, info) {
      state.info = info
    },
    setLocations(state, locations) {
      state.list = locations.map(location => new Location(location))
    },
    selectLocation(state, location) {
      state.selected = location
    }
  },
  actions: {
    setCurrentPage({commit}, page) {
      commit('setCurrentPage', page)
    },
    setLocation({commit, dispatch}, location) {
      commit('selectLocation', location)
      dispatch('character/getCharacters', location, {root: true})
    },
    async getLocations({commit}, {page, search}) {
      commit('setLoading', true)
      try {
        let query = `page=${page}&name=${search}`
        let cached = await dbStorage.getLocations(query)
        if (cached) {
          commit('setInfo', cached.info)
          commit('setLocations', cached.results)
        } else {
          let response = await axios.get(`https://rickandmortyapi.com/api/location?${query}`)
          await dbStorage.setLocations(query, response.data)
          commit('setInfo', response.data.info)
          commit('setLocations', response.data.results)
        }
      } catch (e) {
        console.log(e)
      }
      commit('setLoading', false)
    }
  }
}