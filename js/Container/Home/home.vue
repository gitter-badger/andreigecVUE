
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
						    left:0;
					}

						.carousel-caption{
						    height:80px;
					}

						.carousel-title{ 
						   height: 30px;
    text-align: center;
    top: 20px;
    font-size: 21px;
    color: lightblue;
					}




</style>
<template>
<carousel class="popular-carousel">
					
  <slider  v-for="title in PopularTitles">
  <a v-bind:href='title.GHPageURL' target="_blank">
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

<script>
var Home=Vue.component('home', {
template: 'test home',


})

</script>