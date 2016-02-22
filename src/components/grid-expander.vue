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
    transition: height .3s ease;
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
var lastSelectorId = -1
$(window).resize(function() {
    ExecuteExpanded(lastSelectorId, true)
})

function goToByScroll(id) {
    $('html,body').animate({
            scrollTop: $('#' + id).offset().top
        },
        'slow')
}

function ExecuteExpanded(selectorId, forceResize) {
    //find the next div that starts after the end of this one
    var item = $('#' + selectorId)
    var bottom = item.offset().top + item.height()
    var nextitem = Array.find(item.siblings(),
        function(e, i, a) {
            return $(e).offset().top > bottom
        })

    //overriding placement
    var cl = item.closest('.js-grid-expander-after-this')
    if (cl.length === 1) {
        $('#gridexpander').insertAfter(cl[0])
    }
    //no next item
    else if (typeof(nextitem) === 'undefined') {
        $('#gridexpander').insertAfter(item)
    } else {
        $('#gridexpander').insertBefore($(nextitem))
    }

    SetGridPosition(forceResize)
        //scroll screen
    goToByScroll(selectorId)

    lastSelectorId = selectorId
    return true
}

function SetGridPosition(forceResize) {
    //set width to match body
    var width = $('body').width()
    $('#gridexpander').width(width)

    //set left to match body
    $('#gridexpander').css('left', 0)
    var left = $('#gridexpander').offset().left
    if (left > 0 || forceResize) {
        $('#gridexpander').css('left', -left)
    }
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
              $('#gridexpander').insertAfter('body')
                return
            }

            this.expanded = ExecuteExpanded(this.selectorId, false)
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
