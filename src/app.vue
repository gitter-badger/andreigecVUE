<style lang='sass'>

.not-active {
    pointer-events: none;
    cursor: default;
}

a {
    &.v-link-active {
        @extend .not-active;
        color: rgb(200, 200, 200);
        &:hover {
            color: white;
        }
    }
}

.fullBackgroundImage {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

.centered {
    margin-left: auto;
    margin-right: auto;
}

[v-cloak] {
    display: none;
}

</style> <style lang='sass' scoped> #body {
    background-color: rgb(180, 200, 200);
}

#content {
    padding-top: 80px;
}

</style>

<template>

<head>
    <meta charset="utf-8">
    <title>test</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
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
            backgroundImage: 'url(' + bg + ');'
        }
    }
}

</script>
