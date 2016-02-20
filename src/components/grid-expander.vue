<style lang='sass' scoped>

.grid-expander {
    color: white;
    font-size: 40px;
}

</style>

<template>

<div id='gridexpander' class='grid-expander' v-if='expanded'>
    <div> ZZZ {{selectorId}} YYY
    </div>

</template>

<script>

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
var $ = require('jquery')

function execute(selectorId) {
    var item = $('#' + selectorId)
    if (item.length !== 1) {
        console.log('error loading grid expander')
    } else {
        $('#gridexpander').insertAfter(item)
    }
}

//var _ = require('underscore-node')

module.exports = {

    props: {
        selectorId: {
            type: Number,
            required: true
        },
        expanded: {
            type: Boolean,
            required: true
        }
    },
    watch: {
        'selectorId': function(val, oldVal) {
            if (this.selectorId === -1) {
                return
            }
            execute(this.selectorId)
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
