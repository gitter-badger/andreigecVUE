var Home = require('./containers/home')
var Browse = require('./containers/browse')
var navyseal = require('./containers/navyseal')
var store = require('./store')
export function configRouter(router) {



	 router.beforeEach(function (transition) {
		 new Promise(function(resolve, reject)
		 {
			 store.default.actions.GetAllData(resolve, reject)
		 }).then(function(data) {
			 transition.next()
		 })
	 })

	router.map({
		'/': {
			component: Home
		},
		'/Titles/Details/:titleName': {
			component: Home
		},
		// 	component: Home
		// },
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
