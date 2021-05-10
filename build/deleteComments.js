/* eslint-disable no-continue */
const fs = require('fs');

function deleteComments(srcDir, targetDir) {
    const str = fs.readFileSync(srcDir, {
        encoding: 'utf-8',
    });

    // 使用换行符号分割适配lf、crlf回车
    const strArr = str.split(/\r?\n/);
    const targetArr = [];
    let isMultilineComment = false;

    for (let i = 0; i < strArr.length; i += 1) {
        const oneLine = strArr[i];
        if (oneLine.indexOf('*/') === -1 && isMultilineComment) continue;
        if (oneLine.indexOf('<!--') > -1) continue;
        if (oneLine.indexOf('-->') > -1) continue;
        else if (oneLine.indexOf('/*') > -1) {
            // js多行注释开始
            isMultilineComment = true;
            continue;
        } else if (oneLine.indexOf('*/') > -1) {
            // js多行注释结束
            isMultilineComment = false;
            continue;
        } else if (oneLine.indexOf('// ') > -1) {
            // 单行注释
            continue;
        } else targetArr.push(oneLine);
    }
    fs.writeFileSync(targetDir, targetArr.join('\n'));
}

module.exports = deleteComments;
