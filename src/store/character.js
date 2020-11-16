import axios from 'axios'
import Character from '@/models/character'
import { dbStorage } from '@/helpers/offline'
import { getCharacterIds } from '@/helpers/character'

export default {
  namespaced: true,
  state: () => ({
    selected: null,
    loading: false,
    list: []
  }),
  mutations: {
    SET_LOADING (state, loading) {
      state.loading = loading
    },
    SET_CHARACTERS (state, characters) {
      state.list = characters.map(character => new Character(character))
    },
    SELECT_CHARACTER (state, character) {
      state.selected = character
    }
  },
  getters: {
    getSameLocationCharacters (state) {
      return state.list.filter(character => character.id !== state.selected.id)
    }
  },
  actions: {
    setCharacter ({ commit, dispatch }, character) {
      commit('SELECT_CHARACTER', character)
      dispatch('episode/getEpisodes', character, { root: true })
    },
    async getCharacter ({ commit, dispatch }, id) {
      commit('SET_LOADING', true)
      try {
        const cached = await dbStorage.getCharacters(id)
        if (cached) {
          dispatch('setCharacter', cached[0])
        } else {
          const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          const data = response.data
          dispatch('setCharacter', data)
          await dbStorage.setCharacters(id, [data])
        }
      } catch (e) {
        console.log(e)
      }
      commit('SET_LOADING', false)
    },
    async getCharacters ({ commit }, location) {
      const ids = getCharacterIds(location)
      if (!ids) {
        commit('SET_CHARACTERS', [])
        return
      }
      commit('SET_LOADING', true)
      try {
        const cached = await dbStorage.getCharacters(ids)
        if (cached) {
          commit('SET_CHARACTERS', cached)
        } else {
          const response = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`)
          const data = response.data
          if (Array.isArray(data)) {
            commit('SET_CHARACTERS', data)
            await dbStorage.setCharacters(ids, data)
          } else {
            commit('SET_CHARACTERS', [data])
            await dbStorage.setCharacters(ids, [data])
          }
        }
      } catch (e) {
        console.log(e)
      }
      commit('SET_LOADING', false)
    }
  }
}
