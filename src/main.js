import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'
require('es6-promise').polyfill()

var App = require('./app')

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
router.start(App, '#app')

// new Vue({
//   el: 'body',
//   components: { App }
// })



// just for debugging
window.router = router
