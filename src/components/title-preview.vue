<style lang='sass' scoped>
@import "../styles/variables.scss";
$gray: rgb(80, 80, 80);
.title-preview {
    @import "../styles/variables.scss";
    color: black;
    width: $cardWidth + px;
    position: relative;
    &.margined {
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        margin-bottom: 15px;
        float: none;
        @media screen and (max-width: section-width(1)) {
            margin-left: 0;
            margin-right: 0;
        }
    }
    &.floatleft {
        @media screen and (min-width: section-width(2)) {
            float: left;
            margin: 15px;
        }
        @media screen and (max-width: section-width(2)) {
            @extend .margined
        }
    }
    .slot {
        position: relative;
    }
    .text {
        color: rgba(0, 0, 0, 0.6);
        font-size: 1rem;
        &.caption {
            padding: 5px;
            width: 90%;
            color: $gray;
            min-height: 50px;
        }
        &.title {
            font-size: 35px;
            color: white;
            text-shadow: 1px 1px 10px black;
            position: absolute;
            bottom: 0;
            margin: 0 0 0 5px;
            height: 70px;
        }
        &.view-title {
            font-size: 20px;
            font-weight: 500;
            color: #009688;
        }
    }
    .action-box {
        border-top: solid 1px rgb(180, 180, 180);
        bottom: 0;
        width: 100%;
        position: relative;
        .material-icons {
            top: -2px;
            position: relative;
        }
        > button {
            height: 100%;
        }
    }
    .grayscale {
        filter: grayscale(100%);
    }
}

</style>

<template>

<mdl-card id='{{title.Id}}' class="title-preview" actions="actions" actions-text="Get started" v-bind:class='marginedClass' v-bind:style='marginstyles' v-animate-on-scroll v-bind:forceshow='forceshow'>

    <div slot="title" class='slot title-image' v-bind:style='title.HeadImage | generateImageStyle'>
        <a v-link="{ path: '/Titles/Details/' + title.Name }">
            <mdl-button colored v-mdl-ripple-effect class='text title'>
                {{title.Name}}</div>
    </a>
    </div>

    <div slot="supporting-text" class='text caption' v-text='title.DescriptionText | truncate 100 '>
    </div>

    <div slot="actions" class='action-box'>
        <info-bar v-bind:title='title' :expanded.sync='expanded'></info-bar>
    </div>
</mdl-card>

</div>

</template>

<script>

var cardHeight = '200px'
var vmdl = require('vue-mdl')
var _ = require('underscore-node')

var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']

var aos = require('../directives/animateonscroll')

var ib = require('../components/info-bar')

module.exports = {

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

    data: function() {
        return {
            cardHeight: cardHeight,
            expanded: false
        }
    },

    computed: {
        marginedClass() {
            return {
                'margined': this.margined,
                'floatleft': !this.margined
            }
        }
    },

    props: {
        title: {
            type: Object,
            required: true
        },
        forceshow: Boolean,
        margined: Boolean
    },
    events: {
        'selectedTitle': function(msg) {
            return true
        },
        'closeTitlesExcept': function(msg) {
            return true
        }
    },

    components: {
        'mdl-card': card,
        'mdl-button': button,
        'info-bar': ib
    },

    directives: {
        'mdl-ripple-effect': ripple,
        'animate-on-scroll': aos
    }
}

</script>
