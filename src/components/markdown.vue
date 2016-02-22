

<template>

<div>
</div>

</template>

<script>

var marked = require('marked')
//var $ = require('jquery')
marked.setOptions({
    sanatize: true,
    gfm: true
})

module.exports = {

    props: {
        value: {
            type: String,
            required: true
        }
    },

    ready: function() {
      var p = this
        marked(this.value, function(err, content) {
            if (err) throw err
          p.$el.innerHTML = content
        })
    }
}

</script>
