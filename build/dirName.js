const path = require('path');
// 定义目录
// 源components
const packages = path.join(__dirname, '../src/components');
// 目标文件夹
const hjtmpui = path.join(__dirname, '../packages');
// 目标components
const targetDir = path.join(hjtmpui, 'components');
// 根目录
const root = path.join(__dirname, '../');
// 文档源目录
const docsDir = path.join(__dirname, '../docs');
// 文档目标目录
const docsTargetDir = path.join(hjtmpui, 'docs');

module.exports = {
    packages,
    hjtmpui,
    targetDir,
    root,
    docsDir,
    docsTargetDir,
};