<style lang='sass' scoped>
#bottom-bar{
	position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,.75);
    z-index: 1;
    height:50px;
}
</style>

<template>
<div id='bottom-bar'>
bottom
<header class="header">
                <h1>
                <a v-link="{ path: '/', exact: true}">
                test
                </a>
                </h1>
            </header>
</div>
</template>

<script>

module.exports = {

}

</script>
