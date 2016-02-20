<style lang='sass' scoped >

.section {
    @import "../styles/global.scss";
    overflow: hidden;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: section-width(3);
    @media screen and (max-width: section-width(2)) {
        width: section-width(1);
    }
    @media screen and (min-width: section-width(2)) and (max-width: section-width(3)) {
        width: section-width(2);
    }
}

</style>

<template>

<div class='section'>
    <slot name='header-text'></slot>
    <titlepreview v-for="title in items" v-bind:title="title"></titlepreview>
</div>

</template>

<script>

//var icons = require('vuestrap-icons/src/components/icons')
var titlepreview = require('./title-preview')
var vmdl = require('vue-mdl')
var badge = vmdl.directives['mdl-badge']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']

module.exports = {

    props: {
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        'titlepreview': titlepreview,
        'mdl-button': button
    },
    directives: {
        'mdl-badge': badge,
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
