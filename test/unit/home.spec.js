/* global describe, it, expect */

import Vue from 'vue'
import Home from '../../src/containers/home'

describe('home.vue', () => {
   const vm = new Vue({
      template: '<div><home></home></div>',
      components: { Home }
    }).$mount()

   it('has popular titles', () => {
    expect(vm.$el.textContent).toContain('Popular Titles')
  })
   it('doesnt have unpopular titles', () => {
    expect(vm.$el.textContent).not.toContain('Unpopular Titles')
  })
})
