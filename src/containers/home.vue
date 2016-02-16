<style lang='sass' scoped>

.header-text {
    font-size: 20px;
    text-align: center;
    color: white;
    text-shadow: gray 1px 1px 1px;
}

.material-icons {
    top: 4px;
    position: relative;
}

</style>

<template>

<home-carousel name="Featured Titles" v-bind:items="FeaturedTitles">
    <div slot='header-text' class='header-text'>
        <i class="material-icons">grade</i> Featured Titles
    </div>
</home-carousel>

<title-preview-section v-bind:items="PopularTitles">
    <div slot='header-text' class='header-text'>
        <i class="material-icons">favorite</i> Popular Titles
    </div>
</title-preview-section>

<title-preview-section v-bind:items="NewTitles">
    <div slot='header-text' class='header-text'>
        <i class="material-icons">date_range</i> New Titles
    </div>
</title-preview-section>

</template>

<script>

var store = require('../store.js')
var titlepreviewsection = require('../components/title-preview-section')
var hc = require('../components/home-carousel')
var vmdl = require('vue-mdl')
var ripple = vmdl.directives['mdl-ripple-effect']

module.exports = {

    components: {
        'title-preview-section': titlepreviewsection,
        'home-carousel': hc
    },

    directives: {
        'mdl-ripple-effect': ripple
    },

    computed: {
        PopularTitles() {

                return store.default.state.PopularTitles
            },
            FeaturedTitles() {
                return store.default.state.FeaturedTitles
            },
            NewTitles() {
                return store.default.state.NewTitles
            }
    }
}

</script>
