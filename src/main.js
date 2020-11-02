import Vue from 'vue'
import setup from '@/setup'
import App from './App.vue'
import '@/assets/css/style.css'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  ...setup,
  render: h => h(App)
}).$mount('#app')
