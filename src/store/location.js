import axios from 'axios'
import Location from '@/models/location'
import { dbStorage } from '@/helpers/offline'

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    selected: null,
    list: [],
    info: null
  }),
  mutations: {
    SET_CURRENT_PAGE (state, page) {
      state.info.page = page
    },
    SET_LOADING (state, loading) {
      state.loading = loading
    },
    SET_INFO (state, info) {
      state.info = info
    },
    SET_LOCATIONS (state, locations) {
      state.list = locations.map(location => new Location(location))
    },
    SELECT_LOCATION (state, location) {
      state.selected = location
    }
  },
  actions: {
    setCurrentPage ({ commit }, page) {
      commit('SET_CURRENT_PAGE', page)
    },
    setLocation ({ commit, dispatch }, location) {
      commit('SELECT_LOCATION', location)
      dispatch('character/getCharacters', location, { root: true })
      dispatch('toggleSideBar', false, { root: true })
    },
    async getLocations ({ commit }, { page, search }) {
      commit('SET_LOADING', true)
      try {
        const query = `page=${page}&name=${search}`
        const cached = await dbStorage.getLocations(query)
        if (cached) {
          commit('SET_INFO', cached.info)
          commit('SET_LOCATIONS', cached.results)
        } else {
          const response = await axios.get(`https://rickandmortyapi.com/api/location?${query}`)
          await dbStorage.setLocations(query, response.data)
          commit('SET_INFO', response.data.info)
          commit('SET_LOCATIONS', response.data.results)
        }
      } catch (e) {
        console.log(e)
      }
      commit('SET_LOADING', false)
    }
  }
}
