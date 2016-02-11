var Home = require('./containers/home')
var TitleDetails = require('./containers/details')
var navyseal = require('./containers/navyseal')
export function configRouter (router) {

	router.map({
		'/': {
			component: Home
		},
		'/Titles/Details/:titleName': {
          component: TitleDetails
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
