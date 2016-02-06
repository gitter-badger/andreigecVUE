var Vue = require('vue')
var Home = require('../home/home.vue')
var vr = require('vue-router');

 new Vue({
		el: '#app',
		// app initial state
		data: {
			PopularTitles:[],
			newTodo: '',
			editedTodo: null,
			visibility: 'all'
		},

		 components: { 
//containers
'home':Home,
		 	//'title-preview': TitlePreview,
		 'vue-router':vr}
		
		
	});