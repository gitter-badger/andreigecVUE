<style lang='sass' scoped>

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 50%;
    min-width: 300px;
    height: 50%;
    min-height: 300px;
    margin: 0px auto;
    padding: 30px 10px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
    width: 100%;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.modal-enter,
.modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>

<template>

<div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
        <div class="modal-container">

            <div class="modal-header">
                <slot name="header">
                </slot>
            </div>

            <div class="modal-body">
                <slot name="body">
                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">
                </slot>
                <button class="modal-default-button" @click="show = false">
                    OK
                </button>
            </div>
        </div>
    </div>
</div>

</template>

<script>

module.exports = {
    props: {
        show: {
            type: Boolean,
            required: true,
            twoWay: true
        }
    }
}

</script>
