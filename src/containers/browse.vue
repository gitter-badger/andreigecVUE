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

<grid-expander :selector-id.sync='selectedTitleId'>
    <div slot='content'>
        <title-preview-expand :title.sync='selectedTitle'>

        </title-preview-expand>
    </div>
</grid-expander>

    <title-preview-section v-bind:items="Titles">
        <div slot='header-text' class='header-text'>
            <i class="material-icons">favorite</i> {{TitlesText}}
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
var tpe = require('../components/title-preview-expand')

module.exports = {
    data: function() {
        return {
            selectedTitleId: -1,
            selectedTitle: {}
        }
    },

    components: {
        'title-preview-section': titlepreviewsection,
        'home-carousel': hc,
        'grid-expander': ge,
        'title-preview-expand': tpe
    },

    directives: {
        'mdl-ripple-effect': ripple
    },

    computed: {
        Titles() {

                if (this.$route.params.category.toUpperCase() === 'GAMES') {
                    return store.default.state.TitlesListGames
                }

                return store.default.state.TitlesListApplications
            },

            TitlesText() {
                if (this.$route.params.category.toUpperCase() === 'GAMES') {
                    return 'Games'
                }

                return 'Applications'
            }
    }

    // events: {
    //     // 'closePreview': function(msg) {
    //     //     this.selectedTitleId = -1
    //     //     this.selectedTitle = {}
    //     //     this.$broadcast('closeTitlesExcept', -1)
    //     // },
    //     'selectedTitle': function(msg) {
    //         var titleId = msg.title.Id
    //         var title = msg.title
    //         var expanded = msg.expanded
    //         this.$broadcast('closeTitlesExcept', titleId)
    //         if (expanded) {
    //             this.selectedTitleId = titleId
    //             this.selectedTitle = title
    //         } else {
    //             this.selectedTitleId = -1
    //             this.selectedTitle = {}
    //         }
    //     }
    // }
}

</script>
