/*global Vue, todoStorage */

(function (exports) {

	'use strict';

	

	exports.app = new Vue({
		// app initial state
		data: {
			PopularTitles:[],
			newTodo: '',
			editedTodo: null,
			visibility: 'all'
		},
		
		
	});

})(window);
