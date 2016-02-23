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
var tpe = require('../components/title-preview-expand')

module.exports = {

    components: {
        'title-preview-section': titlepreviewsection,
        'home-carousel': hc,
        'grid-expander': ge,
        'title-preview-expand': tpe

    },

    directives: {
        'mdl-ripple-effect': ripple
    },

    data: function() {
        return {
            selectedTitleId: -1,
            selectedTitle: {},
            titleFromURL: {}
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

            RouteTitleName() {
                return this.$route.params.titleName
            }
    },

    methods: {
        TitleRoute: function(titleName) {
            if (typeof(titleName) === 'undefined') {
                return
            }
            var t = store.default.actions.GetDetails(titleName)

            if (typeof(t) === 'undefined') {
                location.href = '/'
            }

            this.selectedTitle = t
            this.selectedTitleId = t.Id

            //open title
            var d = {
                Id: t.Id,
                expanded: true
            }
            this.$broadcast('titleSelection', d)
        }
    },

    events: {
        //up
        //set status for all title info boxes
        'selectedTitle': function(msg) {
            var titleId = msg.title.Id
            var title = msg.title
            var expanded = msg.expanded
            var d = {
                Id: titleId,
                expanded: expanded
            }
            this.$broadcast('titleSelection', d)
            if (expanded) {
                this.selectedTitleId = titleId
                this.selectedTitle = title
            } else {
                this.selectedTitleId = -1
                this.selectedTitle = {}
            }
        }
    },

    ready: function() {
        var name = this.$route.params.titleName
        if (typeof(name) === 'undefined') {
            return
        }

        this.TitleRoute(name)
    },

    watch: {
        'RouteTitleName': function(val, oldVal) {
            this.TitleRoute(val)
        }
    }
}

</script>
