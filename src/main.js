import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'
require('babel-polyfill')
var $ = require('jquery')
window.jQuery = $
window.$ = $
require('bootstrap-loader')
var store = require('./store')

store.default.actions.GetAllData()


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

// just for debugging
window.router = router
