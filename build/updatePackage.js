
const path = require('path');
const fs = require('fs-extra');

const {
    hjtmpui,
    root,
} = require('./dirName');

function updatePackage () {
    // 打包目录的package.json
    const hjtmpuiPackagePath = path.join(hjtmpui, 'package.json');
    // 读取根节点package.json内容
    let hjtmpuiData = fs.readFileSync(path.join(root, 'package.json'), 'utf-8');
    hjtmpuiData = JSON.parse(hjtmpuiData);
    // 读取打包目录的package.json内容
    let hjtmpuiPackageData = fs.readFileSync(hjtmpuiPackagePath, 'utf-8');
    // 赋值
    hjtmpuiPackageData = JSON.parse(hjtmpuiPackageData);
    hjtmpuiPackageData.version = hjtmpuiData.version;
    // 输出到打包目录的package.json
    fs.outputFileSync(hjtmpuiPackagePath, JSON.stringify(hjtmpuiPackageData, '', 4));
}

module.exports = updatePackage;