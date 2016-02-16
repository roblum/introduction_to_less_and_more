var Reveal = require('reveal');
require('../styles/index.less');

Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide',
    dependencies: [
        { src: 'lib/highlight.js', aync: true, callback: function() { hljs.initHighlightingOnLoad(); }}
    ]
});
