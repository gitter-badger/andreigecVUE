var $ = require('jquery')

	var pluginName = 'AnimateOnScroll'
	var defaults = {
			minDuration: 0,
			maxduration: 0,
			viewportFactor: 0
	}

	function AnimateOnScroll (element, options) {
		this.element = $(element)
		this.settings = $.extend({}, defaults, options)
		this._defaults = defaults
		this._name = pluginName
		this.init()
	}

	AnimateOnScroll.prototype = {
		init: function () {
		    this.items = this.element.find('.AnimateOnScroll')
		    this.itemsCount = this.items.length
		    this.itemsRenderedCount = 0
		    this.didScroll = false
		    this.docElem = window.document.documentElement
    		var self = this

				self.items.each(function() {
    				var el = $(this)
					if (self._inViewport(el)) {
						console.log('in')
						self._checkTotalRendered()
						el.addClass('shown')
					}
				})

				window.addEventListener('scroll', function() {
					self._onScrollFn()
				}, false)
				window.addEventListener('resize', function() {
					self._resizeHandler()
				}, false)
		},
	    _onScrollFn: function() {
	        var self = this
	        if (!this.didScroll) {
	          this.didScroll = true
	          setTimeout(function() { self._scrollPage() }, 60)
	        }
	    },
	    _scrollPage: function() {
	        var self = this
	        this.items.each(function() {
				var elChild = $(this)
				if (!elChild.hasClass('animated') && !elChild.hasClass('shown') && self._inViewport(elChild, self.settings.viewportFactor)) {
				  	if (elChild.attr('data-animation')) {
						setTimeout(function() {
							var perspY = self._scrollY() + self._getViewportH() / 2
							elChild.css('-webkit-perspective-origin', '50% ' + perspY + 'px')
							elChild.css('-moz-perspective-origin', '50% ' + perspY + 'px')
							elChild.css('perspective-origin', '50% ' + perspY + 'px')

							self._checkTotalRendered()

							if (self.settings.minDuration && self.settings.maxDuration) {
								var randDuration = (Math.random() * (self.settings.maxDuration - self.settings.minDuration) - self.settings.minDuration) + 's'
								elChild.css('-webkit-animation-duration', randDuration)
								elChild.css('-moz-animation-duration', randDuration)
								elChild.css('animation-duration', randDuration)
							}

							elChild.addClass('animated').addClass(elChild.attr('data-animation'))
						}, 25)
				  	} else {
				    	elChild.addClass('animated').css('opacity', '1')
				  	}
				}
	        })
	        this.didScroll = false
	    },
		_resizeHandler: function() {
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
		_checkTotalRendered: function() {
			++this.itemsRenderedCount
			if (this.itemsRenderedCount === this.itemsCount) {
				window.removeEventListener('scroll', this._onScrollFn)
			}
		},
		_getViewportH: function() {
			var client = this.docElem['clientHeight']
				var inner = window['innerHeight']

			if (client < inner) {
				return inner
			}
			else {
				return client
			}
		},
		_scrollY: function() {
			return window.pageYOffset || this.docElem.scrollTop
		},
		_getOffset: function(el) {
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
		_inViewport: function(el, h) {
	    	el = el[0]
			var elH = el.offsetHeight
				var scrolled = this._scrollY()
				var viewed = scrolled + this._getViewportH()
				var elTop = this._getOffset(el).top
				var elBottom = elTop + elH
				// if 0, the element is considered in the viewport as soon as it enters.
				// if 1, the element is considered in the viewport only when it's fully inside
				// value in percentage (1 >= h >= 0)
				h = h || 0

			return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled
		}
	}

	$.fn[ pluginName ] = function (options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new AnimateOnScroll(this, options))
			}
		})
	}
