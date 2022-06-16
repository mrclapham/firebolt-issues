const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    "transform": {
        "\\.[jt]sx?$": "babel-jest",
    },
    module: {
        loaders: [
            { exclude: ['node_modules'], loader: 'babel', test: /\.(js|mjs|jsx)$/ }
        ]
    }
}



