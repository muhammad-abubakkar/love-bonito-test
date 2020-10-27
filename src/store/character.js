import axios from "axios";
import Character from "@/models/character";
import {getCharacterIds} from "@/helpers/location";

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
    setCharacters(state, characters) {
      state.list = characters.map(character => new Character(character))
    }
  },
  actions: {
    async getCharacters({commit}, location) {
      let ids = getCharacterIds(location)
      if (!ids) {
        return
      }
      commit('setLoading', true)
      try {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`)
        let data = response.data
        if (Array.isArray(data)) {
          commit('setCharacters', data)
        } else {
          commit('setCharacters', [data])
        }
      } catch (e) {
        console.log(e)
      }
      commit('setLoading', false)
    }
  },
}