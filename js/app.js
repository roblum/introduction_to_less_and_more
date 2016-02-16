var Reveal = require('reveal');
require('../lib/head.min.js');

// compile with less-loader
require('../styles/index.less');

Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide',
    dependencies: [
        { src: './lib/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
});
