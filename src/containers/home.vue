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

<grid-expander :selector-id.sync='selectedTitleId' :expanded.sync='ExpandedIsSet'>

</grid-expander>
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
var ge = require('../components/grid-expander')

module.exports = {

    components: {
        'title-preview-section': titlepreviewsection,
        'home-carousel': hc,
        'grid-expander': ge
    },

    directives: {
        'mdl-ripple-effect': ripple
    },

    data: function() {
        return {
            selectedTitleId: -1
        }
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
            },
            ExpandedIsSet() {
                return this.selectedTitleId !== -1
            }
    },

    events: {
        'selectedTitle': function(msg) {
            var titleId = msg.titleId
            var expanded = msg.expanded

            if (expanded) {
                this.$broadcast('closeTitlesExcept', titleId)
                this.selectedTitleId = titleId
            } else {
                this.selectedTitleId = -1
            }
        }
    }
}

</script>
