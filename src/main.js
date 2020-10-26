import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHelmet from 'vue-helmet';

import App from './App.vue'
import store from './store'
import routes from './routes'
import '@/assets/css/style.css'

Vue.use(VueRouter)
Vue.use(VueHelmet)
Vue.config.productionTip = false

new Vue({
    store: store,
    router: new VueRouter({routes, mode: 'history'}),
    render: h => h(App),
}).$mount('#app')
