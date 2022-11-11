const fs = require('fs');
module.exports = function (content) {
    console.log('loader - 2', content);
    this.callback(null, 'loader-2');
}