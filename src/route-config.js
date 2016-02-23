var Home = require('./containers/home')
var Browse = require('./containers/browse')
var navyseal = require('./containers/navyseal')
export function configRouter(router) {

	// router.beforeEach(function (transition) {
	// 	window.scrollTo(0, 0)
	// 	transition.next()
	// })

	router.map({
		'/': {
			component: Home
		},
		'/Titles/Details/:titleName': {
			component: Home
		},
		'Titles/Browse/:category': {
			component: Browse
		},
		'/NavySeal': {
			component: navyseal
		},
		// not found handler
		'*': {
			component: require('./components/not-found.vue')
		}
	})
}
