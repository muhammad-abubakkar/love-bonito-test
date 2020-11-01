import axios from 'axios'
import Episode from '@/models/episode'
import { getEpisodeIds } from '@/helpers/eipsode'
import { dbStorage } from '@/helpers/offline'

export default {
  namespaced: true,
  state: () => ({
    loading: false,
    list: []
  }),
  mutations: {
    SET_LOADING (state, loading) {
      state.loading = loading
    },
    SET_EPISODES (state, episodes) {
      state.list = episodes.map(episode => new Episode(episode))
    }
  },
  actions: {
    async getEpisodes ({ commit }, character) {
      const ids = getEpisodeIds(character)
      if (!ids) {
        commit('SET_EPISODES', [])
        return
      }
      commit('SET_LOADING', true)
      try {
        const cached = await dbStorage.getEpisodes(ids)
        if (cached) {
          commit('SET_EPISODES', cached)
        } else {
          const response = await axios.get(`https://rickandmortyapi.com/api/episode/${ids}`)
          const data = response.data
          if (Array.isArray(data)) {
            commit('SET_EPISODES', data)
            await dbStorage.setEpisodes(ids, data)
          } else {
            commit('SET_EPISODES', [data])
            await dbStorage.setEpisodes(ids, [data])
          }
        }
      } catch (e) {
        console.log(e)
      }
      commit('SET_LOADING', false)
    }
  }
}
