//http://codepen.io/rmitchellnet/pen/kqDrE
var $ = require('jquery')
var _ = require('underscore')

export class AnimateOnScroll {
	constructor() {
		this.pluginName = 'AnimateOnScroll'
		this.defaults = {
			minDuration: 0,
			maxduration: 0,
			animation: '',
			viewportFactor: 0
		}

		this.baseClass = 'js-animateonscroll-'
		this.shownClass = this.baseClass + 'shown'
		this.notShownClass = this.baseClass + 'not-shown'
		this.animatedClass = this.baseClass + 'animated'
		this._scrollFn = ''
	}

	AnimateElement(element, options) {
		this.directive = $(element)
		this.element = $(this._getCl(this.directive))
		this.settings = $.extend({}, this.defaults, options)
		this.init()
	}

	Update() {
		this._scrollPage()
	}

	Delete() {
		this._removeScroll()
	}

	init() {
		this.didScroll = false
		this.docElem = window.document.documentElement

		if (this._inViewport(this.element)) {
			this._checkTotalRendered()
			this.element.addClass(this.shownClass)
		} else {
			this.element.addClass(this.notShownClass)
		}

		var x = this
		this._scrollFn = _.debounce(function () {
			if (!x.didScroll) {
				x.didScroll = true
				setTimeout(function () {
					x._scrollPage()
				}, 60)
			}
		}, 100)

		var resizeFn = _.debounce(function () {
			x._resizeHandler()
		}, 100, true)

		window.addEventListener('scroll', this._scrollFn, false)
		window.addEventListener('resize', resizeFn, false)
	}

	_removeScroll() {
		window.removeEventListener('scroll', this._scrollFn)
		window.removeEventListener('resize', this.resizeFn)
	}
	_scrollPage() {
		var t = this
		var elChild = t.element
		if (elChild.length === 0) {
			t._removeScroll()
			return
		}
		if (!elChild.hasClass(t.animatedClass) && !elChild.hasClass(t.shownClass) && t._inViewport(elChild, this.settings.viewportFactor)) {
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
					elChild.addClass(t.shownClass)
					elChild.removeClass(t.notShownClass)

					elChild.addClass(t.animatedClass).addClass(t.baseClass + t.settings.animation)
				}, 25)
			} else {
				elChild.addClass(t.animatedClass).css('opacity', '1')
			}
		}
		t.didScroll = false
	}


	_resizeHandler() {
		var self = this

		function delayed() {
			self._scrollPage()
			self.resizeTimeout = null
		}
		if (this.resizeTimeout) {
			clearTimeout(this.resizeTimeout)
		}
		this.resizeTimeout = setTimeout(delayed, 1000)
	}

	_checkTotalRendered() {
		++this.itemsRenderedCount
		if (this.itemsRenderedCount === this.itemsCount) {
			window.removeEventListener('scroll', this._scrollFn)
		}
	}

	_getViewportH() {
		var client = this.docElem['clientHeight']
		var inner = window['innerHeight']

		if (client < inner) {
			return inner
		} else {
			return client
		}
	}

	_scrollY() {
		return window.pageYOffset || this.docElem.scrollTop
	}

	_getOffset(el) {
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
	}

	_getCl(el) {
		try {
			return $(el)[0].element[0].el
		} catch (e) {

		} finally {

		}

		if (!el[0].el) {
			return el[0]
		}

		return el[0].el
	}

	_inViewport(elD, h) {
		var el = elD[0]
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
