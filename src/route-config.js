var Home = require('./containers/home')
var TitleDetails = require('./containers/details')

export function configRouter (router) {

	router.map({
		'/': {
			component: Home
		},
		'*/Titles/Details/:titleName': {
          component: TitleDetails
      },
    // not found handler
    '*': {
    	component: require('./components/not-found.vue')
    }
})
}
