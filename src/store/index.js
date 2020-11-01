import location from './location'
import character from './character'
import episode from './episode'

export default {
  state: () => ({
    showSideBar: false
  }),
  mutations: {
    SET_VISIBILITY (state) {
      state.showSideBar = !state.showSideBar
    }
  },
  actions: {
    toggleSideBar ({ commit }) {
      commit('SET_VISIBILITY')
    }
  },
  getters: {},
  modules: {
    location,
    character,
    episode
  }
}
