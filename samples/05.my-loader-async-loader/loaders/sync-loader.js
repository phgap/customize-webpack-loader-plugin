const fs = require('fs');
const path = require('path');

module.exports = function (content) {
    this.async();
    const filepath = path.resolve(__dirname, '../src/content.txt');
    fs.readFile(filepath, 'utf-8', (err, txt) => {
        console.log(txt);
        const result = `
            const somebody = '${txt}';
    
            ${content}
        `;
        // 调用callback前，loader函数已经返回, 相当于同步callback已经被调用，此处调用，会报错调用callback两次
        // 所以必须声明当前是异步loader（调用this.async()）
        console.log('in readFile callback');
        this.callback(null, result);
    });
    console.log('loader function will return');


}