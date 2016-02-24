<style lang='sass'>

@import "styles/global.scss";
</style> <style lang='sass' scoped> #content {
    padding-top: 80px;
    overflow: hidden;
}

</style>

<template>

<head>
    <meta charset="utf-8">
    <title>test</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <div id='body' class='fullBackgroundImage' v-bind:style='backgroundImage'>

        <top-bar></top-bar>

        <div id="content">
            <router-view>
            </router-view>
        </div>
    </div>
</body>

</template>

<script>
var routerView = require('vue-router')
var topbar = require('./components/topbar')
var bg = require('./assets/bg.jpg')
require('material-design-lite/material.css')
require('material-design-lite/material.js')
export default {
    components: {
        'router-view': routerView,
        'top-bar': topbar
    },
    data: function() {
        return {
            'backgroundImage': {
                'background-image': 'url(' + bg + ')',
                'background-color': 'rgb(180, 200, 200)'
            }
        }
    }
}

</script>
