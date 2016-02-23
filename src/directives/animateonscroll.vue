<style lang='sass'>

.js-animateonscroll-not-shown {
    opacity: 0;
}

.js-animateonscroll-animated {
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
}

@-webkit-keyframes js-animateonscroll-fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translateX(-20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}

@-moz-keyframes js-animateonscroll-fadeInLeft {
    0% {
        opacity: 0;
        -moz-transform: translateX(-20px);
    }
    100% {
        opacity: 1;
        -moz-transform: translateX(0);
    }
}

@-o-keyframes js-animateonscroll-fadeInLeft {
    0% {
        opacity: 0;
        -o-transform: translateX(-20px);
    }
    100% {
        opacity: 1;
        -o-transform: translateX(0);
    }
}

@keyframes js-animateonscroll-fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.js-animateonscroll-fadeInLeft {
    -webkit-animation-name: js-animateonscroll-fadeInLeft;
    -moz-animation-name: js-animateonscroll-fadeInLeft;
    -o-animation-name: js-animateonscroll-fadeInLeft;
    animation-name: js-animateonscroll-fadeInLeft;
}

@-webkit-keyframes js-animateonscroll-fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translateX(20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}

@-moz-keyframes js-animateonscroll-fadeInRight {
    0% {
        opacity: 0;
        -moz-transform: translateX(20px);
    }
    100% {
        opacity: 1;
        -moz-transform: translateX(0);
    }
}

@-o-keyframes js-animateonscroll-fadeInRight {
    0% {
        opacity: 0;
        -o-transform: translateX(20px);
    }
    100% {
        opacity: 1;
        -o-transform: translateX(0);
    }
}

@keyframes js-animateonscroll-fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.js-animateonscroll-fadeInRight {
    -webkit-animation-name: js-animateonscroll-fadeInRight;
    -moz-animation-name: js-animateonscroll-fadeInRight;
    -o-animation-name: js-animateonscroll-fadeInRight;
    animation-name: js-animateonscroll-fadeInRight;
}

@-webkit-keyframes js-animateonscroll-fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
    }
}

@-moz-keyframes js-animateonscroll-fadeInDown {
    0% {
        opacity: 0;
        -moz-transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        -moz-transform: translateY(0);
    }
}

@-o-keyframes js-animateonscroll-fadeInDown {
    0% {
        opacity: 0;
        -o-transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        -o-transform: translateY(0);
    }
}

@keyframes js-animateonscroll-fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.js-animateonscroll-fadeInDown {
    -webkit-animation-name: js-animateonscroll-fadeInDown;
    -moz-animation-name: js-animateonscroll-fadeInDown;
    -o-animation-name: js-animateonscroll-fadeInDown;
    animation-name: js-animateonscroll-fadeInDown;
}

</style>



<script>

var $ = require('jquery')
import {
    AnimateOnScroll
}
from './animateonscrollbase.js'
var animations = []
module.exports = {
    params: ['minduration', 'maxduration', 'animation', 'forceshow'],


    bind: function() {
        var t = this

        if (t.params.forceshow) {
            return
        }

        var mind = t.params.minduration
        var maxd = t.params.maxduration
        var anim = t.params.animation || 'fadeInLeft'
        var init = function() {
            var aos = new AnimateOnScroll()
            aos.AnimateElement($(t), {
                minDuration: mind,
                maxDuration: maxd,
                animation: anim
            })
            animations.push(aos)
        }

        setTimeout(init, 10)

    },
    update: function(value) {
        //$(this.el).val(value).trigger('change')
    },
    unbind: function() {
        animations.forEach(function(aos) {
            aos.Delete()
            aos = null
        })
    }
}

</script>
