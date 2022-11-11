const fs = require('fs');
const path = require('path');
const { runLoaders } = require('loader-runner');

runLoaders({
    resource: path.resolve(__dirname, './src/index.js'),
    loaders: [
        path.resolve(__dirname, './loaders/loader1.js'),
        path.resolve(__dirname, './loaders/loader2.js'),
        path.resolve(__dirname, './loaders/loader3.js')
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
});