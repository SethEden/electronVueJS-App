import Vue from 'vue'
import App from './Application/electronVueJS-Basic/App.vue'
import './Application/electronVueJS-Basic/registerServiceWorker'
import router from './Application/electronVueJS-Basic/router'
import store from './Application/electronVueJS-Basic/store'
import vuetify from './Application/electronVueJS-Basic/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
