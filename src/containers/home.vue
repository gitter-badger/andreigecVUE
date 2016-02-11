

<template>

<title-preview-section name="Popular Titles" v-bind:items="PopularTitles">


</title-preview-section>

<title-preview-section name="New Titles" v-bind:items="NewTitles"></title-preview-section>

<title-preview-section name="Featured Titles" v-bind:items="FeaturedTitles"></title-preview-section>

</template>

<script>

var store = require('../store.js')
var titlepreviewsection = require('../components/title-preview-section')

module.exports = {

    components: {
        'title-preview-section': titlepreviewsection
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
