<script>
	var store = require('../store.js')
	var homecarousel = require('../components/home-carousel')

	module.exports = {

		components: {
			'home-carousel': homecarousel
		},

		computed: {
			PopularTitles () {
				return store.default.state.PopularTitles
			},
			FeaturedTitles () {
				return store.default.state.FeaturedTitles
			},
			NewTitles () {
				return store.default.state.NewTitles
			}
		}
	}

</script>

<template>

<home-carousel name="Popular Titles" v-bind:items="PopularTitles"></home-carousel>

<home-carousel name="New Titles" v-bind:items="NewTitles"></home-carousel>

<home-carousel name="Featured Titles" v-bind:items="FeaturedTitles"></home-carousel>
	
</template>
