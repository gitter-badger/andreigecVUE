

<template>

<div :show.sync="showImageModal">
    <div slot="header">
        <div class='model--header'>Images for {{titleDetails.DisplayName}}</div>
    </div>
    <div slot="body">
        <carousel class="image-carousel" :interval="0" :indicators=false>

            <slider v-for="image in titleDetails.Images">
                <img v-bind:src="image" class='model--image' />
            </slider>
        </carousel>
    </div>
</div>

</template>

<script>

var modal = require('../components/modal')
var carousel = require('vue-strap').carousel
var slider = require('vue-strap').slider

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']

var _ = require('underscore-node')

module.exports = {
    props: {
        showModal: {
            type: Boolean,
            required: true
        }
    },

    components: {
        'imagemodal': modal,
        'carousel': carousel,
        'slider': slider,
        'mdl-card': card
    }
}

</script>
