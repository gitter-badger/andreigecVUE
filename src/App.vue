<script>
var Vue = require('vue')
Vue.component('App', {
		// app initial st1ate
		data: {
			PopularTitles:	[],
			newTodo:	'',
			editedTodo: null,
			visibility:	'all'
		}
	})

</script>


<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>
