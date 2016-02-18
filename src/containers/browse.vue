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

module.exports = {

    components: {
        'title-preview-section': titlepreviewsection,
        'home-carousel': hc
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
}

</script>
