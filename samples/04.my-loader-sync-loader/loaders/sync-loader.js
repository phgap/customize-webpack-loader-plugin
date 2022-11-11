const fs = require('fs');
const path = require('path');

module.exports = function (content) {
    const filepath = path.resolve(__dirname, '../src/content.txt');
    const txt = fs.readFileSync(filepath, 'utf-8');
    console.log(txt);
    const result = `
        const somebody = '${txt}';

        ${content}
    `;
    return result;
}