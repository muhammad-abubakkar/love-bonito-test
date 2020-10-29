import axios from "axios";
import Episode from "@/models/episode";
import {getEpisodeIds} from "@/helpers/eipsode";
import {dbStorage} from "@/helpers/offline";

export default {
  namespaced: true,
  state: () => ({
    loading: true,
    list: [],
  }),
  mutations: {
    setLoading(state, loading) {
      state.loading = loading
    },
    setEpisodes(state, episodes) {
      state.list = episodes.map(episode => new Episode(episode))
    }
  },
  actions: {
    async getEpisodes({commit}, character) {
      let ids = getEpisodeIds(character)
      if (!ids) {
        commit('setEpisodes', [])
        return
      }
      commit('setLoading', true)
      try {
        let cached = await dbStorage.getEpisodes(ids)
        if (cached) {
          commit('setEpisodes', cached)
        } else {
          let response = await axios.get(`https://rickandmortyapi.com/api/episode/${ids}`)
          let data = response.data
          if (Array.isArray(data)) {
            commit('setEpisodes', data)
            await dbStorage.setEpisodes(ids, data)
          } else {
            commit('setEpisodes', [data])
            await dbStorage.setEpisodes(ids, [data])
          }
        }

      } catch (e) {
        console.log(e)
      }
      commit('setLoading', false)
    }
  },
}