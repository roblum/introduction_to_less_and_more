var config = {
    entry: './js/app.js',
    output: {
        path: './js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.(eot|woff|ttf|svg)$/, loader: 'file' }
        ]
    }
};

module.exports = config;
