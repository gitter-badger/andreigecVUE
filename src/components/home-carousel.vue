<style lang='sass' scoped>


.carousel-inner{
  width:400px;
  margin-left: auto;
  margin-right: auto;
}

</style>

<template>


  <div class='section'>
  <slot name='header-text'></slot>

<carousel class="popular-carousel" v-bind:interval='0' :indicators=false>
    <slider v-for="title in items">
      <titlepreview v-bind:item="title"></titlepreview>
    </slider>
</carousel>
</div>

</template>

<script>

var titlepreview = require('./title-preview')
var carousel = require('vue-strap').carousel
var slider = require('vue-strap').slider
var vmdl = require('vue-mdl')
var ripple = vmdl.directives['mdl-ripple-effect']
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
        'titlepreview': titlepreview,
        'carousel': carousel,
        'slider': slider
    },
    directives: {
      'mdl-ripple-effect': ripple
    }
}

</script>
