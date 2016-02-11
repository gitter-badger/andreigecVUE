<style lang='sass' scoped>

.section-text {
    font-size: 20px;
    text-align: center;
}

</style>

<template>

<div class='section-text'>
</div>
<titlepreview v-for="title in items" v-bind:item="title"></titlepreview>

</template>

<script>

//var icons = require('vuestrap-icons/src/components/icons')
var titlepreview = require('./title-preview')
var vmdl = require('vue-mdl')
var badge = vmdl.directives['mdl-badge']
var button = vmdl.components['mdl-button']

module.exports = {

    props: {
        items: {
            type: Array,
            required: true

        },
        name: String
    },
    components: {
        'titlepreview': titlepreview,
        'mdl-button': button
    },
    directives: {
        'mdl-badge': badge
    }
}

</script>
