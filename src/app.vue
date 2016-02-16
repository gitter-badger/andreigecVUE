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

[v-cloak] {
    display: none;
}

body {
    background-color: rgb(190, 210, 240);
}

#content {
    margin-top: 50px;
}

</style>

<template>

<head>
    <meta charset="utf-8">
    <title>test</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>

<body>
    <top-bar></top-bar>

    <div id="content">
        <router-view>
        </router-view>
    </div>
</body>

</template>

<script>

var routerView = require('vue-router')
var topbar = require('./components/topbar')

export default {
    components: {
        'router-view': routerView,
        'top-bar': topbar
    }
}

</script>
