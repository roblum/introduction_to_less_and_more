var Reveal = require('reveal');
require('../styles/index.less');

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    var cblocks = document.querySelectorAll("pre code");

    if(cblocks.length) {
        for(var i=0, len=cblocks.length; i<len; i++) {
            var dom = cblocks[i];
            var html = dom.innerHTML;
            html = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
            dom.innerHTML = html;
        }
    }

    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        transition: 'slide'
    });

}

// Reveal.initialize({
//     controls: true,
//     progress: true,
//     history: true,
//     center: true,
//     transition: 'slide'
// });
