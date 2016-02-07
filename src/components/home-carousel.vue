<script>
var carousel = require('vue-strap').carousel
var slider = require('vue-strap').slider
	
//var store = require('../store.js')
//var _ = require('underscore-node')

	module.exports = {

props: {
	items: {
		type: Array,
		required: true

},
name: String
},

		components: {
			'carousel': carousel,
			'slider': slider
		}
}


</script>

<template>
{{name}}
<carousel class="popular-carousel" :interval="0" :indicators=false>

		<slider  v-for="title in items">
			<a v-bind:href='title.Link'>
				<div class='carousel--item'>
					<div class="carousel-text carousel-title">
						{{title.Name}}
					</div>	
					<img v-bind:src="title.HeadImage" class='carousel--item-image'/>
					<div class="carousel-text carousel-caption">
						{{title.HeadDescription}}
					</div>	
				</div>    
			</a>
		</slider>
	</carousel>
</template>

<style>
	.popular-carousel{

	}

	.carousel--item{
		width:500px;
		margin-left: auto;
		margin-right: auto;
		position: relative;
	}

	.carousel-text{
		position: absolute;
		color: white;
		width: 90%;
		margin-left: 5%;
		background-color: rgba(0,0,0,.2);
		left:0 !important;
	}

	.carousel-caption{
		height:80px;
		left: 0 !important;
	}

	.carousel-title{ 
		height: 30px;
		text-align: center;
		top: 20px;
		font-size: 21px;
		color: lightblue;
	}
</style>