import axios from "axios";
import Character from "@/models/character";
import {dbStorage} from "@/helpers/offline";
import {getCharacterIds} from "@/helpers/character";

export default {
  namespaced: true,
  state: () => ({
    selected: null,
    loading: true,
    list: [],
  }),
  mutations: {
    setLoading(state, loading) {
      state.loading = loading
    },
    setCharacters(state, characters) {
      state.list = characters.map(character => new Character(character))
    },
    selectCharacter(state, character) {
      state.selected = character
    }
  },
  actions: {
    setCharacter({commit, dispatch}, character) {
      commit('selectCharacter', character)
      dispatch('episode/getEpisodes', character, {root: true})
    },
    async getCharacter({commit, dispatch}, id) {
      commit('setLoading', true)
      try {
        let cached = await dbStorage.getCharacters(id)
        if (cached) {
          dispatch('setCharacter', cached[0])
        } else {
          let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          let data = response.data
          dispatch('setCharacter', data)
          await dbStorage.setCharacters(id, [data])
        }
      } catch (e) {
        console.log(e)
      }
      commit('setLoading', false)
    },
    async getCharacters({commit}, location) {
      let ids = getCharacterIds(location)
      if (!ids) {
        commit('setCharacters', [])
        return
      }
      commit('setLoading', true)
      try {
        let cached = await dbStorage.getCharacters(ids)
        if (cached) {
          commit('setCharacters', cached)
        } else {
          let response = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`)
          let data = response.data
          if (Array.isArray(data)) {
            commit('setCharacters', data)
            await dbStorage.setCharacters(ids, data)
          } else {
            commit('setCharacters', [data])
            await dbStorage.setCharacters(ids, [data])
          }
        }
      } catch (e) {
        console.log(e)
      }
      commit('setLoading', false)
    }
  },
}