<style lang='sass'>

.preview {
    .mdl-checkbox {
        color: white;
        >* {
            color: white;
        }
        .mdl-checkbox__box-outline {
            border: 2px solid indianred !important;
            background: white;
        }
        .mdl-checkbox__label {
            color: white !important;
        }
        &.is-checked {
            .mdl-checkbox__box-outline {
                border: 2px solid green !important;
            }
        }
    }
    .description {
        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 25px;
        }
        h1 {
            &#images {
                display: none;
                ~ p {
                    display: none;
                }
            }
        }
        img {
            display: none;
        }
    }
}

</style> <style lang='sass' scoped> @import "../styles/variables.scss";
.carousel-inner {
    display: none;
}

$paddingTop: 10px;
.preview {
    background-color: rgb(40, 40, 40);
    color: white;
    overflow: hidden;
    padding-top: $paddingTop;
    @media screen and (min-width: section-width(2)) and (max-width: section-width(3)) {
        height: 400px;
    }
    @media screen and (min-width: section-width(3)) {
        height: 600px;
    }
    .model--image {
        height: 100%;
        width: 100%;
        object-fit: contain;
        //    top: 25%;
        //    position: relative;
    }
    .material-icons {
        font-size: 40px;
        right: 10px;
        top: -5px;
        position: relative;
    }
    .image-left {
        float: left;
        width: 60%;
        height: 100%;
        .image-spacer {
            top: 25%;
            height: 100%;
            width: 100%;
        }
    }
    @media screen and (min-width: section-width(2)) {
        .horizontal-spacer {
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
    .content {
        float: left;
        width: 39%;
        >* {
            margin: 20px;
        }
    }
    .title {
        margin-left: 20px;
        font-size: 2rem;
        padding: 20px;
    }
}

</style>

<template>

<div class='preview'>
    <div class='image-left'>
        <carousel class="image-carousel" v-bind:interval='0' :indicators=false v-if='!onlyHeadImage' class='js-grid-expander-after-this'>
            <slider v-for="img in title.Images">
                <div class='image-spacer'>
                    <img v-bind:src="img.URL" class='model--image' />
                </div>
            </slider>
        </carousel>
        <img v-bind:src="title.HeadImage" class='model--image' margined v-if='onlyHeadImage' />
    </div>
    <div class='horizontal-spacer'></div>
    <a @click='close()'>
        <div class='close'>
            <i class="material-icons">close</i>
        </div>
    </a>

    <div class='content'>
        <div class='info'>
            <p>First Released: {{title.CreatedAt}}
        </div>

        <div class='description'>
            <markdown :value='Description'></markdown>
        </div>
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
var markdown = require('./markdown')

module.exports = {

    props: {
        title: {
            type: Object,
            required: true
        }
    },

    methods: {
        close: function() {
            this.$dispatch('selectedTitle', {
                title: this.title,
                expanded: false
            })
        }
    },

    computed: {
        hasRelease() {
                return !!this.title.ReleaseVersion
            },

            onlyHeadImage() {
                return typeof(this.title.Images) === 'undefined' || this.title.Images.length === 1
            },

            titleDebug() {
                var s = JSON.stringify(this.title)
                return s
            },

            Description() {
              var d = typeof(this.title.Description) === 'undefined' ? '' : this.title.Description
              return d
            }
    },

    components: {
        'mdl-card': card,
        'mdl-button': button,
        'carousel': carousel,
        'slider': slider,
        'markdown': markdown
    },
    directives: {
        'mdl-ripple-effect': ripple
    }
}

</script>
