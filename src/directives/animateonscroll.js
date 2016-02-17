var $ = require('jquery')
require('./aos.js')

function bindf (item) {
var len = 25
  $(item).each(function(i) {
			var shade = parseInt((i / len) * 255, 10)
			$(this).css({
				'-webkit-transform': 'rotate(' + i + 'deg)',
				'background': 'rgba(' + shade + ',' + shade + ',' + shade + ',1)',
				'width': parseInt(window.innerHeight / 2, 10) + 'px',
				'left': '50%',
				'margin-left': -parseInt(window.innerHeight / 2, 10) / 2 + 'px'
			}).AnimateOnScroll({
				animations: [
					{
						from: { rotate: 0, top: 0, left: 0 },
						to: { rotate: 190 + (10 * i), top: 0 },
						startOn: 0,
						endOn: 5000 - window.innerHeight * 2
					}]
			})
      this.el.classList.add('AnimateOnScroll')
		})
  }


export default {
  bind: function () {
bindf(this.el)


  },
  update: function (newValue, oldValue) {
    console.log('update')
  },
  unbind: function () {
  console.log('unb')
  }
}
