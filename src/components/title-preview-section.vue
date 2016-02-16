<style lang='sass' scoped>

.section{


overflow:hidden;

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
