<style lang='sass' scoped >

.carousel-inner {
    @extend .centered;
    overflow: hidden;
}

</style>

<template>

<div class='section'>
    <slot name='header-text'></slot>

    <carousel class="popular-carousel" v-bind:interval='0' :indicators=false v-if='items.length > 1'>
        <slider v-for="title in items">
            <titlepreview v-bind:title="title" margined v-bind:forceshow=true></titlepreview>
        </slider>
    </carousel>

    <titlepreview v-bind:title="items[0]" margined v-if='items.length==1'></titlepreview>

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
var $ = require('jquery')
$(function() {
    $('.carousel').each(function() {
        $(this).carousel({
            interval: false
        })
    })
})

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
    },
    events: {
      'selectedTitle': function(msg) {
      return true
      },
      'closeTitlesExcept': function(msg) {
          return true
      }
    }
}

</script>
