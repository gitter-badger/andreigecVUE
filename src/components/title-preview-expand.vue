<style lang='sass' scoped>

$paddingTop: 10px;
.preview {
    @import "../styles/global.scss";
    background-color: rgb(40, 40, 40);
    color: white;
    overflow: hidden;
    padding-top: $paddingTop;
    height: 400px;
    .material-icons {
        font-size: 40px;
        right: 10px;
        top: -5px;
        position: relative;
    }
    .image-left {
        float: left;
        max-width: 500px;
        height: 100%;
        img {
            top: 25%;
            position: relative;
        }
        .carousel-inner {
            @extend .centered;
            overflow: hidden;
        }
    }
    @media screen and (min-width: section-width(2)) {
        .sep {
            background: #121212;
            box-shadow: 1px 0 #444;
            display: inline-block;
            margin: 20px 0;
            vertical-align: middle;
            width: 1px;
            margin-top: -$paddingTop/2;
            height: 100%;
            float: left;
        }
    }
    .title {
        float: left;
        margin-left: 20px;
        font-size: 1.5rem;
    }
}

</style>

<template>

<div class='preview'>

    <div class='image-left'>
        <carousel class="image-carousel" v-bind:interval='0' :indicators=false v-if='!onlyHeadImage' class='js-grid-expander-after-this'>
            <slider v-for="img in title.Images">
                <img v-bind:src="img.URL" class='model--image' />
            </slider>
        </carousel>
        <img v-bind:src="title.HeadImage" class='model--image' margined v-if='onlyHeadImage' />
    </div>
    <div class='sep'></div>
    <a @click='close()'>
        <div class='close'>
            <i class="material-icons">close</i>
        </div>
    </a>

    <div class='title'>
        {{title.Name}}
    </div>
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
var carousel = require('vue-strap').carousel
var slider = require('vue-strap').slider


module.exports = {

    props: {
        title: {
            type: Object,
            required: true
        }
    },

    methods: {
        close: function() {
            this.$dispatch('closePreview', {})
        }
    },

    computed: {
        hasRelease() {
                return !!this.title.ReleaseVersion
            },
            hasAppVeyor() {
                return this.title.HasAppveyor
            },

            onlyHeadImage() {
                return typeof(this.title.Images) === 'undefined' || this.title.Images.length === 0
            },

            titleDebug() {
                var s = JSON.stringify(this.title)
                return s
            }
    },

    components: {
        'mdl-card': card,
        'mdl-button': button,
        'carousel': carousel,
        'slider': slider
    },
    directives: {
        'mdl-ripple-effect': ripple
    }
}

</script>
