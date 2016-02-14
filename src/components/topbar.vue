<style lang='sass' scoped>
#bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    height:20px;
    min-height:0;
}

.title{
    font-size:3rem;
}
</style>

<template>
<mdl-card id="bar">
  <div slot="title">
<a class='title'  v-link="{ path: '/', exact: true}">
                andreigec.net
                </a>
    </div>


</mdl-card>

</template>

<script>
var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']
module.exports = {

     components: {
        'mdl-card': card
    }

}

</script>
