/* eslint-disable no-console */
/**
 * @file registerServiceWorker.js
 * @module registerServiceWorker
 * @description The service worker is a web API that helps you cache your assets and
 * other files so that when the user is offline or on slow network, he/she can still see results on the screen,
 * as such, it helps you build a better user experience
 * @author System Generated
 * @date 2020/07/15
 */
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
