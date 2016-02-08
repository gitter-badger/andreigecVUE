<template>
details {{titleDetails.Name}}
</template>

<script>
var store = require('../store.js')
//var _ = require('underscore-node')

	module.exports = {		

computed: {
			titleDetails () {
				try	{
					var name = this.$route.params.titleName
					var t = store.default.actions.GetDetails(name)
					
					if (typeof (t) === 'undefined') {
							 location.href = '/'
					}

					return t
				}
				catch (ex)
				{
					console.log(ex)

				}				
			}
		},

		components: {
		}
	}


</script>
