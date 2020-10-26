import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import '@/assets/css/style.css'
import routes from './routes'
import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  store: store,
  router: new VueRouter({routes, mode: 'history'}),
  render: h => h(App),
}).$mount('#app')
