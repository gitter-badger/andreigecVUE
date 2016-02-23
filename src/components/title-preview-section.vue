<style lang='sass' scoped >

@import "../styles/variables.scss";
.section {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: section-width(3);
    z-index: 2;
    @media screen and (max-width: section-width(2)) {
        width: section-width(1);
    }
    @media screen and (min-width: section-width(2)) and (max-width: section-width(3)) {
        width: section-width(2);
    }
    .header-text {
        overflow: hidden;
    }
}

</style>

<template>

<div class='section' class='js-grid-expander-after-this'>
    <slot name='header-text'></slot>
    <div class="clear"></div>
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
