import Vue from 'vue'
import Vuex from 'vuex'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

import store from '@/store'
import routes from '@/routes'

Vue.use(Vuex)
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(VueLazyload)

export default {
  store: new Vuex.Store(store),
  router: new VueRouter({routes, mode: 'history'})
}
