<style lang='sass' scoped>

$hasColour: rgb(225, 255, 225);
$hasColourSelected: darken($hasColour, 10%);
$noColour: rgb(255, 225, 225);
$noColourSelected: darken($noColour, 10%);
.info-bar {
    >div {
        float: left;
        display: block;
        overflow: hidden;
    }
}

ul {
    list-style: none;
    height: 40px;
    padding: 0;
    background: #f4f4f4;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    margin: 0;
    padding-top: 2px;
    padding-bottom: 2px;
    li {
        width: 89px;
        float: left;
        height: 40px;
        border: 0;
    }
    .sub-item {
        line-height: 1;
        font-size: 11px;
        color: #999;
        display: block;
        text-align: center;
        padding-top: 6px;
        height: 34px;
        background: $hasColour;
        &:hover {
            text-decoration: none;
            background: $hasColourSelected;
        }
        &.no-item {
            cursor: not-allowed;
            text-decoration: none;
            background: $noColour;
            &:hover {
                background: $noColourSelected;
            }
        }
        strong {
            font-size: 14px;
            display: block;
            color: #222;
        }
    }
}

</style>

<template>

<div class='info-bar'>
    <div>
        <a v-link="{ path: '/Titles/Details/' + title.Name }">
            <mdl-button colored v-mdl-ripple-effect>
                <div class='text view-title'>
                    <i class="material-icons">info</i></div>
            </mdl-button>
        </a>
    </div>

    <div>
        <ul>
            <li><a target='_blank' class='sub-item' href="{{title.ReleaseURL}}" v-bind:class="hasRelease ? '' : 'no-item'">Download <strong>Binary</strong></a></li>
            <li><a target='_blank' class='sub-item' href="{{title.GHPageURL}}">View On <strong>GitHub</strong></a></li>
            <li v-if='hasAppVeyor'>
                <img v-bind:src="title.AppveyorBadgeURL" class='model--image' />
            </li>

        </ul>
    </div>

</div>

</template>

<script>

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
    //var _ = require('underscore-node')

module.exports = {

    props: {
        title: {
            type: Object,
            required: true
        }
    },

    computed: {
        hasRelease() {
                return !!this.title.ReleaseVersion
            },
            hasAppVeyor() {
                return this.title.HasAppveyor
            }
    },

    components: {
        'mdl-card': card,
        'mdl-button': button
    },
    directives: {
        'mdl-ripple-effect': ripple
    }
}

</script>
