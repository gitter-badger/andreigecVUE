/* global describe, it, expect */
// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

var Vue = require('vue')
var  Home = require('src/containers/home')

describe('home.vue', () => {
   it('has popular titles', () => {
    const vm = new Vue({
      template: '<div><home></home></div>',
      components: { Home }
    }).$mount()

    expect(vm.$el.textContent).toContain('Popular Titles')
  })
})
