<style lang='sass' scoped >
$cardWidth: 400;
$cardWidthPad: 50;

.section {
    overflow: hidden;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: (($cardWidth + $cardWidthPad) * 3) + px;

  @media screen  and (max-width: (($cardWidth + $cardWidthPad) * 2 ) + 'px') {
    width: (($cardWidth + $cardWidthPad) ) + px;
  }

  @media screen and (min-width: (($cardWidth + $cardWidthPad) * 2 ) + 'px') and (max-width: (($cardWidth + $cardWidthPad) * 3 ) + 'px') {
    width: (($cardWidth + $cardWidthPad) * 2) + px;
  }

  @media screen and (min-width: (($cardWidth + $cardWidthPad) * 3 ) + 'px') and (max-width: (($cardWidth + $cardWidthPad) * 4 ) + 'px') {
    width: (($cardWidth + $cardWidthPad) * 3) + px;
  }

}

</style>

<template>

<div class='section'>
    <slot name='header-text'></slot>

    <titlepreview v-for="title in items" v-bind:item="title"></titlepreview>

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
    }
}

</script>
