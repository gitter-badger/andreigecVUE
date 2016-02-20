<style lang='sass' scoped>

header {
    &.custom-header {
        background: rgba(63, 81, 181, 0.9);
    }
    position:fixed;
    top:0;
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

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="custom-header mdl-layout__header mdl-layout__header--waterfall">
        <div class="mdl-layout__header-row">
            <!-- Title -->
            <a class='title' v-link="{ path: '/', exact: true}">
                <mdl-button colored v-mdl-ripple-effect>
                    <div class='title'>TESTRESAS.TES</div>
                </mdl-button>
            </a>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
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
                  mdl-textfield--floating-label mdl-textfield--align-right">
                    <mdl-textfield id="demo-expandable-button" expandable="search"></mdl-textfield>

                </div>


            </nav>
        </div>
    </header>
    <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Sidebar Menu</span>
        <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
        </nav>
    </div>
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
var textfield = vmdl.components['mdl-textfield']
module.exports = {

    components: {
        'mdl-button': button,
        'mdl-textfield': textfield
    },
    directives: {
        'mdl-ripple-effect': ripple
    }
}

</script>
