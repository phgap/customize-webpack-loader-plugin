const fs = require('fs');
module.exports = function (content) {
    console.log('loader -1', content);
    this.async();
    setTimeout(() => {
        this.callback(null, 'loader-1');
    });
}