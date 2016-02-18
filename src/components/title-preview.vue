<style lang='sass' scoped>

$gray: rgb(80, 80, 80);
$cardWidth: 400;
$cardWidthPad: 50;
.title-preview {
    color: black;
    width: $cardWidth + px;
    height: 290px;
    position: relative;
    &.margined {
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        margin-bottom: 15px;
        float: none;
    }
    &.floatleft {
        @media screen and (min-width: (($cardWidth + $cardWidthPad) * 2) + 'px') {
            float: left;
            margin: 15px;
        }
        @media screen and (max-width: (($cardWidth + $cardWidthPad) * 2) + 'px') {
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
        height: 35px;
        bottom: 0;
        position: absolute;
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

<mdl-card class="title-preview" actions="actions" actions-text="Get started"
v-bind:class='marginedClass' v-bind:style='marginstyles'
v-animate-on-scroll="'test'", data-animation="fadeInDown">

    <div slot="title" class='slot title-image' v-bind:style='item.HeadImage | generateImageStyle'>
        <a v-link="{ path: '/Titles/Details/' + item.Name }">
            <mdl-button colored v-mdl-ripple-effect class='text title'>
                {{item.Name}}</div>
    </a>
    </div>

    <div slot="supporting-text" class='text caption' v-text='item.DescriptionText | truncate 100 '>
    </div>

    <div slot="actions" class='action-box'>
        <a v-link="{ path: '/Titles/Details/' + item.Name }">
            <mdl-button colored v-mdl-ripple-effect>
                <div class='text view-title'>
                    <i class="material-icons">info</i></div>
            </mdl-button>
        </a>
    </div>
</mdl-card>
</div>

</template>

<script>

var cardHeight = '200px'
var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
var _ = require('underscore-node')
var aos = require('../directives/animateonscroll')
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
            cardHeight: cardHeight
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
        item: {
            type: Object,
            required: true
        },
        margined: Boolean
    },

    components: {
        'mdl-card': card,
        'mdl-button': button
    },
    directives: {
        'mdl-ripple-effect': ripple,
        'animate-on-scroll': aos
    }
}

</script>
