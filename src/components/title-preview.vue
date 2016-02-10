<style lang='sass' scoped>

.item {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    .text {
        position: absolute;
        color: white;
        width: 90%;
        margin-left: 5%;
        background-color: rgba(0, 0, 0, .2);
        left: 0 !important;
        &.caption {
            height: 80px;
            left: 0 !important;
        }
        &.title {
            height: 30px;
            text-align: center;
            top: 20px;
            font-size: 21px;
            color: lightblue;
        }
    }
}

</style>

<template>

<div class='item'>
    <a v-bind:href='item.Link'>
        <div class='item'>
            <div class="text title">
                {{item.Name}}
            </div>
            <img v-bind:src="item.HeadImage" class='item-image' />
            <div class="text caption">
                {{item.HeadDescription}}
            </div>
        </div>
    </a>
</div>

</template>

<script>

module.exports = {

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    components: {}
}

</script>
