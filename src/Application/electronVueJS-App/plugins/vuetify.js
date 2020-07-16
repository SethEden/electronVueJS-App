/**
 * @file vuetify.js
 * @module vuetify
 * @description The Vuetify plugin file. Setups the Vuetify object and configurations/themes.
 * @requires {@link https://www.npmjs.com/package/vue|Vue}
 * @requires {@link https://www.npmjs.com/package/vuetify|Vuetify}
 * @type {object}
 * @author System Generated
 * @date 2020/07/15
 */

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})
