<style lang='sass' scoped>

.section-text {
    font-size: 20px;
    text-align:center;
}

</style>

<template>

<div class='section-text'>
  <vs-icon name='heart'></vs-icon>  {{name}}
</div>
<titlepreview v-for="title in items" v-bind:item="title"></titlepreview>

</template>

<script>
//var icons = require('vuestrap-icons/src/components/icons')
var icons = ''
var titlepreview = require('./title-preview')
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
        'vs-icon': icons
    }
}

</script>
