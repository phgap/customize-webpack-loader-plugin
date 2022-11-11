const fs = require('fs');
module.exports = function (content) {
    console.log('loader - 3', content);
    this.callback(null, 'loader-3');
}