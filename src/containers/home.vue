<style lang='sass' scoped>
.header-text {
		font-size: 20px;
		text-align: center;
}

.material-icons{
	top: 4px;
    position: relative;
}
</style>

<template>

<title-preview-section v-bind:items="PopularTitles">
<div slot='header-text' class='header-text'>
<i class="material-icons">favorite</i>
	Popular Titles
</div>
</title-preview-section>

<title-preview-section v-bind:items="NewTitles">

</title-preview-section>

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
