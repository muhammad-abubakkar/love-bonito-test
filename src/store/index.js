import Vue from 'vue'
import Vuex from 'vuex'

import location from './location'
import character from './character'
import episode from './episode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    location,
    character,
    episode,
  }
})