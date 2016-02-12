<style lang='sass' scoped>

.section{
  .header-text {
      font-size: 20px;
      text-align: center;
  }

overflow:hidden;

}


</style>

<template>

<div class='section'>
<div class='header-text'>{{name}}</div>
<titlepreview v-for="title in items" v-bind:item="title"></titlepreview>

</div>
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
