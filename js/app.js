/*global Vue, todoStorage */

(function (exports) {

	'use strict';

	

	exports.app = new Vue({
		el: '#app',
		// app initial state
		data: {
			PopularTitles:[],
			newTodo: '',
			editedTodo: null,
			visibility: 'all'
		},

		 components: { 'title-preview': TitlePreview,
		 'carousel':VueStrap.carousel,
		 'slider':VueStrap.slider }
		
		
	});

})(window);
