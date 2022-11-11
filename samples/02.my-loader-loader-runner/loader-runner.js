const fs = require('fs');
const path = require('path');
const { runLoaders } = require('loader-runner');

runLoaders({
    resource: path.resolve(__dirname, './src/index.js'),
    loaders: [
        path.resolve(__dirname, './loader/hello-loader-runner.js')
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, function (err, result) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(result);
})