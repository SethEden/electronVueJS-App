/**
 * @file index.js
 * @module router-index
 * @description Sets up the Vue-Router for the application so that it will be easy to
 * navigate between views as part of a single page application.
 * @requires {@link https://www.npmjs.com/package/vue|Vue}
 * @requires {@link https://www.npmjs.com/package/vue-router|Vue-Router}
 * @author System Generated
 * @date 2020/07/15
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
