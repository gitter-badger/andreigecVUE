<script>
	var routerView = require('vue-router')
	
	export default {
		// app initial st1ate
		data: function () {
			return {
				PopularTitles:	[],
				newTodo:	'',
				editedTodo: null,
				visibility:	'all'
			}
		},

		 components: { 'router-view': routerView }
	}

	</script>


	<template>
			<router-view></router-view>
	</template>
