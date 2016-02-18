<style lang='sass' scoped>

$detailsCardWidth: 500px;
.details {
    width: $detailsCardWidth;
    height:1500px;
    .model--image {
        margin-left: auto;
        margin-right: auto;
    }
    .model--header {
        font-size: 3rem;
        text-align: center;
        margin-bottom: 0;
    }
    .headimage {
        width: $detailsCardWidth;
    }
    .under-title > ul {
        text-align: center;
    }
    .no-release {
        cursor: not-allowed;
        text-decoration: none;
        background: rgb(255, 205, 205);
    }
    ul {
        list-style: none;
        height: 40px;
        padding: 0;
        background: #f4f4f4;
        border-radius: 5px;
        border: 1px solid #e0e0e0;
        width: 270px;
        li {
            width: 89px;
            float: left;
            border-right: 1px solid #e0e0e0;
            height: 40px;
            li:first-child a {
                border-radius: 5px 0 0 5px;
            }
            a {
                line-height: 1;
                font-size: 11px;
                color: #999;
                display: block;
                text-align: center;
                padding-top: 6px;
                height: 34px;
                strong {
                    font-size: 14px;
                    display: block;
                    color: #222;
                }
            }
        }
    }
}

</style>

<template>

<div class='page'>
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



    <mdl-card class="details" actions="actions">
        <div slot="title" class='slot'>
            <a href='#' @click="showImageModal = true" v-bind:class="hasGallery? '' : 'not-active'">
                <img v-bind:src="titleDetails.HeadImage" class='headimage fullBackgroundImage' />
            </a>
            <h1 class='model--header'>{{titleDetails.Name}}</h1>
            <div class='under-title'>
                <ul>
                    <li><a href="{{titleDetails.ReleaseURL}}" v-bind:class="hasRelease ? '' : 'no-release'">Download <strong>Binaries</strong></a></li>
                    <li><a href="https://github.com/andreigec/ANDREICSLIB/tarball/master">Download <strong>TAR Ball</strong></a></li>
                    <li><a href="https://github.com/andreigec/ANDREICSLIB">View On <strong>GitHub</strong></a></li>
                </ul>

                <!-- <div v-if='hasRelease'>Version {{titleDetails.releaseVersion}}</div>
                <div v-if='!hasRelease' class='no-release'> -->

            </div>
        </div>
</div>

<div slot="supporting-text" class='text caption'>
    <p v-text='titleDetails.DescriptionText'></p>
</div>

</mdl-card>

details
</div>

</template>

<script>

var store = require('../store.js')
var modal = require('../components/modal')
var carousel = require('vue-strap').carousel
var slider = require('vue-strap').slider

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']

var cardHeight = '200px'
var _ = require('underscore-node')

module.exports = {

    data: function() {
        return {
            showImageModal: false,
            hasGallery: false,
            titleDetail: null
        }
    },

    filters: {
        generateImageStyle: function(url) {
            return {
                height: cardHeight,
                'background-size': 'cover',
                'background-image': 'url(' + url + ')'
            }
        },
        truncate: function(str, length, truncation) {
            length = length || 30
            truncation = _.isUndefined(truncation) ? '...' : truncation
            return str.length > length ? str.slice(0, length - truncation.length) + truncation : String(str)
        }
    },

    computed: {
        titleDetails() {
                try {
                    if (this.titleDetail) {
                        console.log(this.titleDetail)
                        return this.titleDetail
                    }

                    var name = this.$route.params.titleName
                    var t = store.default.actions.GetDetails(name)

                    if (typeof(t) === 'undefined') {
                        location.href = '/'
                    }
                    console.log(t)
                    this.titleDetail = t
                    return t
                } catch (ex) {
                    console.log(ex)

                }
            },

            hasRelease() {
                return !!this.titleDetails.ReleaseVersion
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
