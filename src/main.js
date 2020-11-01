import Vue from 'vue'
import Vuex from 'vuex'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import store from './store'
import routes from './routes'
import '@/assets/css/style.css'
import './registerServiceWorker'

Vue.use(Vuex)
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.config.productionTip = false

new Vue({
  store: new Vuex.Store(store),
  router: new VueRouter({ routes, mode: 'history' }),
  render: h => h(App)
}).$mount('#app')
