<template>
NF {{routeDetails}}
</template>

<script>

module.exports = {		
computed: {
			routeDetails () {
				try	{
					
					console.log(this.$route)
					return this.$route
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
