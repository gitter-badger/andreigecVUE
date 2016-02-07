var Home = require('./containers/home')
var TitleDetails = require('./containers/details')

export function configRouter (router) {

	router.map({
		'/': {
			component: Home
		},
		'/Titles/Details/:titleName': {
			  //component: Vue.extend({
          //template: '<titledetails :titlename="{{$route.params.titlename}}"></titledetails>'
          component: TitleDetails
      },
    // not found handler
    '*': {
    	component: require('./components/not-found.vue')
    }    
})
}
