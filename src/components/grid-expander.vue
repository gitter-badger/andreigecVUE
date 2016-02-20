<style lang='sass' scoped>

.grid-expander {
    width: 100%;
    float: left;
    top: -15px;
    position: relative;
    .content {
        height: 100%;
        width: 100%;
    }
}

</style>

<template>

<div id='gridexpander' class='grid-expander'>
    <slot name='content' v-if='expanded'></slot>
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
var $ = require('jquery')
    //var _ = require('underscore')

function ExecuteExpanded(selectorId) {
    //find the next div that starts after the end of this one
    var item = $('#' + selectorId)
    var bottom = item.offset().top + item.height()
    var nextitem = Array.find(item.siblings(),
        function(e, i, a) {
            return $(e).offset().top > bottom
        })

    if (typeof(nextitem) === 'undefined') {
        $('#gridexpander').insertAfter(item)
    } else {
        $('#gridexpander').insertBefore($(nextitem))
    }

    return true
}

//var _ = require('underscore-node')

module.exports = {


    props: {
        selectorId: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            expanded: false
        }
    },
    watch: {
        'selectorId': function(val, oldVal) {
            this.expanded = false
            if (this.selectorId === -1) {
                return
            }

            this.expanded = ExecuteExpanded(this.selectorId)
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
