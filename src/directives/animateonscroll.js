var $ = require('jquery')
var Vue = require('vue')
require('./aos.js')

Vue.directive('animate-on-scroll', {

  bind: function () {
    //console.log('bind')
        // var self = this
        // //console.log(self)
        // var len = 25
        // var i = 1
        // var shade = parseInt((i / len) * 255, 10)

        $(this).AnimateOnScroll({
    minDuration: 1,
    maxDuration: 5
  })
      },
      update: function (value) {

      },
      unbind: function () {
        $(this.el).off().select2('destroy')
      }
    })


//
//   bindf : function (item) {
//   //var len = 25
//   console.log('0')
//     $(item).each(function(i) {
//   		//	var shade = parseInt((i / len) * 255, 10)
//         console.log('1')
//   			$(this).css({
//   				'-webkit-transform': 'rotate(' + i + 'deg)',
//   				'background': 'rgba(' + shade + ',' + shade + ',' + shade + ',1)',
//   				'width': parseInt(window.innerHeight / 2, 10) + 'px',
//   				'left': '50%',
//   				'margin-left': -parseInt(window.innerHeight / 2, 10) / 2 + 'px'
//   			}).AnimateOnScroll({
//   				animations: [
//   					{
//   						from: { rotate: 0, top: 0, left: 0 },
//   						to: { rotate: 190 + (10 * i), top: 0 },
//   						startOn: 0,
//   						endOn: 5000 - window.innerHeight * 2
//   					}]
//   			})
//   		})
//     }
//
//     bind: function () {
//       console.log('bind')
//   bindf(this.el)
//
//
//     },
//     update: function (newValue, oldValue) {
//       console.log('update')
//     },
//     unbind: function () {
//     console.log('unb')
//     }
//   }
//
//
// })
