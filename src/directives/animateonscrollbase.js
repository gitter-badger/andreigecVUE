//http://codepen.io/rmitchellnet/pen/kqDrE
var $ = require('jquery')
var _ = require('underscore')

var cl = class AnimateOnScroll {

	var pluginName = 'AnimateOnScroll'
	var defaults = {
	  minDuration: 0,
	  maxduration: 0,
	  animation: '',
	  viewportFactor: 0
	}
	var baseClass = 'js-animateonscroll-'
	var shownClass = baseClass + 'shown'
	var notShownClass = baseClass + 'not-shown'
	var animatedClass = baseClass + 'animated'

	var _scrollFn = ''

	function AnimateOnScroll(element, options) {
	  var t = this
	  $(function () {
	    t.element = $(element)
	    t.settings = $.extend({}, defaults, options)
	    t._defaults = defaults
	    t._name = pluginName
	    t.init()
	  })
	}

	AnimateOnScroll.prototype = {
	  init: function () {
	    this.didScroll = false
	    this.docElem = window.document.documentElement

	    var el = $(this._getCl(this.element))
	    console.log('inview?')
	    if (this._inViewport(this.element)) {
	      console.log('yes')
	      this._checkTotalRendered()
	      el.addClass(shownClass)
	    } else {
	      console.log('no')
	      el.addClass(notShownClass)
	    }

	    var x = this
	    _scrollFn = _.debounce(function () {
	      if (!x.didScroll) {
	        x.didScroll = true
	        setTimeout(function () {
	          console.log('scroll')
	          x._scrollPage()
	        }, 60)
	      }
	    }, 100)

	    var resizeFn = _.debounce(function () {
	      console.log('resi')
	      x._resizeHandler()
	    }, 100, true)

	    window.addEventListener('scroll', _scrollFn, false)
	    window.addEventListener('resize', resizeFn, false)
	  },
	  _removeScroll: function () {
	    console.log('remove')
	    window.removeEventListener('scroll', this._scrollFn)
	    window.removeEventListener('resize', this.resizeFn)
	  },
	  _scrollPage: function () {
	    var t = this
	    var elChild = $(this._getCl($(this)))
	    if (elChild.length === 0) {
	      this._removeScroll()
	      return
	    }
	    if (!elChild.hasClass(animatedClass) && !elChild.hasClass(shownClass) && this._inViewport(elChild, this.settings.viewportFactor)) {
	      if (t.settings.animation) {
	        setTimeout(function () {
	          var perspY = t._scrollY() + t._getViewportH() / 2
	          elChild.css('-webkit-perspective-origin', '50% ' + perspY + 'px')
	          elChild.css('-moz-perspective-origin', '50% ' + perspY + 'px')
	          elChild.css('perspective-origin', '50% ' + perspY + 'px')

	          t._checkTotalRendered()

	          if (t.settings.minDuration && t.settings.maxDuration) {
	            var randDuration = (Math.random() * (t.settings.maxDuration - t.settings.minDuration) - t.settings.minDuration) + 's'
	            elChild.css('-webkit-animation-duration', randDuration)
	            elChild.css('-moz-animation-duration', randDuration)
	            elChild.css('animation-duration', randDuration)
	          }
	          elChild.addClass(shownClass)
	          elChild.removeClass(notShownClass)

	          elChild.addClass(animatedClass).addClass(baseClass + t.settings.animation)
	        }, 25)
	      } else {
	        elChild.addClass(animatedClass).css('opacity', '1')
	      }
	    }
	    this.didScroll = false
	  },
	  _resizeHandler: function () {
	    var self = this

	    function delayed() {
	      self._scrollPage()
	      self.resizeTimeout = null
	    }
	    if (this.resizeTimeout) {
	      clearTimeout(this.resizeTimeout)
	    }
	    this.resizeTimeout = setTimeout(delayed, 1000)
	  },
	  _checkTotalRendered: function () {
	    ++this.itemsRenderedCount
	    if (this.itemsRenderedCount === this.itemsCount) {
	      window.removeEventListener('scroll', this._scrollFn)
	    }
	  },
	  _getViewportH: function () {
	    var client = this.docElem['clientHeight']
	    var inner = window['innerHeight']

	    if (client < inner) {
	      return inner
	    } else {
	      return client
	    }
	  },
	  _scrollY: function () {
	    return window.pageYOffset || this.docElem.scrollTop
	  },
	  _getOffset: function (el) {
	    var offsetTop = 0
	    var offsetLeft = 0
	    do {
	      if (!isNaN(el.offsetTop)) {
	        offsetTop += el.offsetTop
	      }
	      if (!isNaN(el.offsetLeft)) {
	        offsetLeft += el.offsetLeft
	      }
	    }
	    while (el === el.offsetParent)

	    return {
	      top: offsetTop,
	      left: offsetLeft
	    }
	  },

	  _getCl: function (el) {
	    try {
	      return $(el)[0].element[0].el
	    } catch (e) {

	    } finally {

	    }

	    if (!el[0].el) {
	      return el[0]
	    }

	    return el[0].el
	  },

	  _inViewport: function (el, h) {
	    el = this._getCl(el)
	    var elH = el.offsetHeight
	    if (elH === 0) {
	      return false
	    }

	    var scrolled = this._scrollY()
	    var viewed = scrolled + this._getViewportH()
	    var elTop = this._getOffset(el).top
	    var elBottom = elTop + elH
	    h = h || 0
	    return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled
	  }
	}

	$.fn[pluginName] = function (options) {
	  return this.each(function () {
	    if (!$.data(this, 'plugin_' + pluginName)) {
	      $.data(this, 'plugin_' + pluginName, new AnimateOnScroll(this, options))
	      console.log('created')
	    } else {
	      console.log('existed')
	    }
	  })
	}


}
return cl
