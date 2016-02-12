<style lang='sass' scoped>

.model--image {
    margin-left: auto;
    margin-right: auto;
}

.model--header {
    font-size: 20px;
    text-align: center;
}

.not-active {
    pointer-events: none;
    cursor: default;
}

.headimage {
    width: 100%;
    height: 400px;
    object-fit: contain;
}

</style>

<template>

<imagemodal :show.sync="showImageModal">
    <div slot="header">
        <div class='model--header'>Images for {{titleDetails.Name}}</div>
    </div>
    <div slot="body">
        <carousel class="image-carousel" :interval="0" :indicators=false>

            <slider v-for="image in titleDetails.Images">
                <img v-bind:src="image" class='model--image' />
            </slider>
        </carousel>
    </div>
</imagemodal>

<div class='page'>
    <a href='#' @click="showImageModal = true" v-bind:class="hasGallery? '' : 'not-active'">
        <img v-bind:src="titleDetails.HeadImage" class='headimage' />
    </a>
</div>

</template>

<script>

var store = require('../store.js')
var modal = require('../components/modal')
var carousel = require('vue-strap').carousel
var slider = require('vue-strap').slider

module.exports = {

    data: function() {
        return {
            showImageModal: false,
            hasGallery: false
        }
    },

    computed: {
        titleDetails() {
            try {
                var name = this.$route.params.titleName
                var t = store.default.actions.GetDetails(name)

                if (typeof(t) === 'undefined') {
                    location.href = '/'
                }

                return t
            } catch (ex) {
                console.log(ex)

            }
        }
    },

    components: {
        'imagemodal': modal,
        'carousel': carousel,
        'slider': slider
    }
}

</script>
