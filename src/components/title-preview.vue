<style lang='sass' scoped>

.item {
    color:black;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    .text {
        z-index: 1;
        position: absolute;
        color: white;
        width: 90%;
        margin-left: 5%;
        background-color: rgba(0, 0, 0, .2);
        left: 0 !important;
        &.caption {
            height: 50px;
            left: 0 !important;
            bottom: 10px;
        }
        &.title {
            height: 30px;
            text-align: center;
            top: 20px;
            font-size: 21px;
            color: lightblue;
            display: flex;
        }
    }
    .item-image{
filter: grayscale(100%);
    }
}

</style>

<template>

<mdl-card class="item"  supporting-text="supportingText" actions="actions" actions-text="Get started" :media='item.HeadImage'>

<div slot="title" class="mdl-card__title">
      <h2 class="title">Title from slot</h2>
    </div>


     <!--    <div class='item'>
            <div class="text title">
                {{item.Name}}
            </div>
            <img v-bind:src="item.HeadImage" class='item-image' />
            <div class="text caption">
                {{item.HeadDescription}}
            </div>
        </div> -->
</mdl-card>

</template>

<script>
var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
var _ = require('underscore-node')
module.exports = {

filters: function () {
    return {
      truncate: function (string, length, truncation) {
    length = length || 30
    truncation = _.isUndefined(truncation) ? '...' : truncation
    return string.length > length ? string.slice(0, length - truncation.length) + truncation : String(string)
}
    }
},

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    components: {
        'mdl-card': card
    }
}

</script>
