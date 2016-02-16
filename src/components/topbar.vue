<style lang='sass' scoped>

#bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(103, 58, 183);
    z-index: 2;
    height: 50px;
}

.title {
    font-size: 2rem;
    color: white;
}

.item {
	font-size: 1.5rem;
	  color: white;
}

</style>

<template>

<div id='bar'>
    <a class='title' v-link="{ path: '/', exact: true}">
        <mdl-button colored v-mdl-ripple-effect>
            <div class='title'>TESTRESAS.TES</div>
        </mdl-button>
    </a>

		<a href='https://s3-ap-southeast-2.amazonaws.com/andreigec/CV/AndreiGecCV.doc' target="_blank">
			<mdl-button colored v-mdl-ripple-effect>
					<div class='item'>CV</div>
			</mdl-button>
		</a>
</div>

</template>

<script>

var vmdl = require('vue-mdl')
var button = vmdl.components['mdl-button']
var ripple = vmdl.directives['mdl-ripple-effect']
module.exports = {

    components: {
        'mdl-button': button
    },
		directives: {
				'mdl-ripple-effect': ripple
		}
}

</script>
