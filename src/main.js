import Vue from 'vue'
import App from './Application/electronVueJS-App/App.vue'
import './Application/electronVueJS-App/registerServiceWorker'
import router from './Application/electronVueJS-App/router'
import store from './Application/electronVueJS-App/store'
import vuetify from './Application/electronVueJS-App/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
