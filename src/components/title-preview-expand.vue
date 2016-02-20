<style lang='sass' scoped>

.preview {
    background-color: rgb(40, 40, 40);
    color: white;
    font-size: 40px;
    overflow: hidden;
    padding-top: 10px;
    height: 400px;
    .material-icons {
        font-size: 40px;
        right: 10px;
        top: -5px;
        position: relative;
    }
}

</style>

<template>

<div class='preview'>
    <a @click='close()'>
        <div class='close'>
            <i class="material-icons">close</i>
        </div>
    </a>
    test {{title.Id}}
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
    //var _ = require('underscore-node')

module.exports = {

    props: {
        title: {
            type: Object,
            required: true
        }
    },

    methods: {
      close: function() {
        this.$dispatch('closePreview', {
        })
      }
    },

    computed: {
        hasRelease() {
                return !!this.title.ReleaseVersion
            },
            hasAppVeyor() {
                return this.title.HasAppveyor
            }
    },

    components: {
        'mdl-card': card,
        'mdl-button': button
    },
    directives: {
        'mdl-ripple-effect': ripple
    }
}

</script>
