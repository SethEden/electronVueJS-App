/**
 * @file main.js
 * @module main
 * @description Contrary to what you might think, this is not actually the main init for the application.
 * It is however, the point where the view is injected to the output HTML for rendering.
 * Apparently the Electron-Vue-Webpack architecture REQUIRES the background.js & main.js files to be present and accounted for
 * as part of the basic execution/build system, and those are hard requirements because there are hard-coded path elements
 * in those npm packages. So apparently there is no room for flexibility on that point.
 * Since I am trying to enable this system to scale I am only using these as wrappers/call-forwarders.
 * See the Dev_Journal.txt for additional details.
 *  Details can also be found at this link:
 * {@link https://stackoverflow.com/questions/62722398/simulatedgreg-electron-vue-vuetify-error-message-vue-warn-unknown-custom-ele}
 * @requires {@link https://www.npmjs.com/package/vue|Vue}
 * @requires module:App.vue
 * @requires module:registerServiceWorker
 * @requires module:router
 * @requires module:store
 * @requires module:vuetify
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
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