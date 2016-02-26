<style lang='sass' scoped>

header {
    &.custom-header {
        background: rgba(63, 81, 181, 0.9);
    }
    position:fixed;
    top: 0;
    right: 0;
    left: 0;
}

.title {
    font-size: 2rem;
    color: white;
}

.item {
    font-size: 1.5rem;
    color: white;
    text-transform: inherit;
}

</style>

<template>

<div v-if='sidebar'>
    <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="#">Hello</a>
        <a class="mdl-navigation__link" href="#">World.</a>
        <a class="mdl-navigation__link" href="#">How</a>
        <a class="mdl-navigation__link" href="#">Are</a>
        <a class="mdl-navigation__link" href="#">You?</a>
    </nav>
</div>
<div v-if='!sidebar'>
    <nav class="mdl-navigation">
        <a href='https://s3-ap-southeast-2.amazonaws.com/andreigec/CV/AndreiGecCV.doc' target="_blank">
            <mdl-button colored v-mdl-ripple-effect>
                <div class='item'>CV</div>
            </mdl-button>
        </a>
        <a class='mdl-navigation__link' v-link="{ path: '/Titles/Browse/Games', exact: true}">
            <mdl-button colored v-mdl-ripple-effect>
                <div class='item'>Games</div>
            </mdl-button>
        </a>
        <a class='mdl-navigation__link' v-link="{ path: '/Titles/Browse/Applications', exact: true}">
            <mdl-button colored v-mdl-ripple-effect>
                <div class='item'>Applications</div>
            </mdl-button>
        </a>

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
          mdl-textfield--floating-label mdl-textfield--align-right" v-if='showSearch'>
            <mdl-textfield id="demo-expandable-button" expandable="search"></mdl-textfield>
        </div>
    </nav>
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
var textfield = vmdl.components['mdl-textfield']
module.exports = {
    props: {
        showSearch: {
            type: Boolean,
            required: true
        },
        sidebar: {
            type: Boolean,
            required: true
        }
    },

    components: {
        'mdl-button': button,
        'mdl-textfield': textfield
    },
    directives: {
        'mdl-ripple-effect': ripple
    }
}

</script>
