import axios from 'axios'
import Location from "@/models/location";

export default {
  namespaced: true,
  state: () => ({
    loading: true,
    selected: null,
    list: [],
    info: null
  }),
  mutations: {
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
    setLocation({commit, dispatch}, location) {
      commit('selectLocation', location)
      dispatch('character/getCharacters', location, {root: true})
    },
    async getLocations({commit}, {page, search}) {
      commit('setLoading', true)
      try {
        let query = `page=${page}&name=${search}`
        let response = await axios.get(`https://rickandmortyapi.com/api/location?${query}`)
        commit('setInfo', response.data.info)
        commit('setLocations', response.data.results)
      } catch (e) {
        console.log(e)
      }
      commit('setLoading', false)
    }
  }
}