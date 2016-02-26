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

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="custom-header">
        <div class="mdl-layout__header-row">
            <!-- Title -->
            <a class='title' v-link="{ path: '/', exact: true}">
                <mdl-button colored v-mdl-ripple-effect>
                    <div class='title'>TESTRESAS.TES</div>
                </mdl-button>
            </a>
            <div class="mdl-layout-spacer"></div>
            <topbar-nav v-bind:show-search='true' v-bind:sidebar='false' ></topbar-nav>
        </div>
    </header>
    <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Sidebar Menu</span>
        <topbar-nav v-bind:show-search='false' v-bind:sidebar='true'></topbar-nav>
    </div>
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
var textfield = vmdl.components['mdl-textfield']
var topbarnav = require('./topbar-nav')
module.exports = {

    components: {
        'mdl-button': button,
        'mdl-textfield': textfield,
        'topbar-nav': topbarnav
    },
    directives: {
        'mdl-ripple-effect': ripple
    }
}

</script>
