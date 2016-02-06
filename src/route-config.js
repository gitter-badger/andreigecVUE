var Home = require('./container/home')

export function configRouter (router) {

	router.map({
		'/': {
			component: Home
		},
    // not found handler
    '*': {
    	component: require('./components/not-found.vue')
    }    
})
}
