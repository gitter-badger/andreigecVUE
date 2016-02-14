<style lang='sass'>
.not-active {
    pointer-events: none;
    cursor: default;
}

a {
    &.v-link-active {
    @extend .not-active;
    }
}

</style>

<template>
<head>
		<meta charset="utf-8">
		<title>test</title>
		<style> [v-cloak] { display: none; } </style>
		  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	</head>
	<body style='background-color: rgb(190,210,240)'>
	<top-bar></top-bar>		

<div id="content" >
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
