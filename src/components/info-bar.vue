<style lang='sass' scoped>

$hasColour: rgb(225, 255, 225);
$hasColourSelected: darken($hasColour, 10%);
$noColour: rgb(255, 225, 225);
$noColourSelected: darken($noColour, 10%);
.info-bar {
    overflow: hidden;
    float: left;
    display: block;
    >div {
        display: block;
        overflow: hidden;
        float: left;
        .expanded {
            background-color: red;
        }
        padding: 1px;
        border-radius: 2px;
    }
    .i-button {
        height: 35px;
    }
}

ul {
    list-style: none;
    padding: 0;
    background: #f4f4f4;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    margin: 0;
    border: 0;
    li {
        width: 89px;
        float: left;
        border: 0;
    }
    .sub-item {
        line-height: 1;
        font-size: 11px;
        color: #999;
        display: block;
        text-align: center;
        padding-top: 6px;
        height: 34px;
        background: $hasColour;
        &:hover {
            text-decoration: none;
            background: $hasColourSelected;
        }
        &.no-item {
            cursor: not-allowed;
            text-decoration: none;
            background: $noColour;
            &:hover {
                background: $noColourSelected;
            }
        }
        strong {
            font-size: 14px;
            display: block;
            color: #222;
        }
    }
}

</style>

<template>

<div class='info-bar'>
    <div>
        <mdl-button class='i-button' colored v-mdl-ripple-effect v-on:click='toggleExpanded()' v-bind:class='expanded ? "expanded" : ""'>
            <div class='text view-title'>
                <i class="material-icons">info</i></div>
        </mdl-button>
    </div>

    <div>
        <ul>
            <li><a target='_blank' class='sub-item' href="{{title.ReleaseURL}}" v-bind:class="hasRelease ? '' : 'no-item'">Download <strong>Binary</strong></a></li>
            <li><a target='_blank' class='sub-item' href="{{title.GHPageURL}}">View On <strong>GitHub</strong></a></li>

        </ul>
    </div>
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
    //var _ = require('underscore-node')

module.exports = {

    props: {
        title: {
            type: Object,
            required: true
        },
        expanded: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        toggleExpanded: function() {
            this.expanded = !this.expanded
            //up
            this.$dispatch('selectedTitle', {
                title: this.title,
                expanded: this.expanded
            })
        }
    },

    computed: {
        hasRelease() {
                return !!this.title.ReleaseVersion
            },
            hasAppVeyor() {
                return this.title.HasAppveyor
            }
    },

    events: {
        //down
        'titleSelection': function(msg) {
            var expanded = msg.expanded
            var tid = msg.Id

            //either a match and already same status, or not a match and already closed
            if ((this.title.Id === tid && this.expanded === expanded) ||
                (this.title.Id !== tid && this.expanded === false)) {
                return
            }

            //if id match, set expanded ,otherwise opposite
            this.expanded = this.title.Id === tid ? expanded : !expanded
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
