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
    <div id='body' v-bind:style='BodyBackground'>

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

export default {
    components: {
        'router-view': routerView,
        'top-bar': topbar
    },
    computed: {
        BodyBackground() {
            return {
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                'background-image': 'url(' + bg + ')'
            }
        }
    }
}

</script>
