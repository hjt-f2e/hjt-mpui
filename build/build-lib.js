const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const argv = process.argv.splice(2)[0]
const shell = require('shelljs');

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

var filenames = [];
var filenamesUpper = [];

// 组装package.json
const hjtmpuiPackagePath = path.join(hjtmpui, 'package.json');
let hjtmpuiData = fs.readFileSync(path.join(root, 'package.json'), 'utf-8');
hjtmpuiData = JSON.parse(hjtmpuiData);
let hjtmpuiPackageData = fs.readFileSync(hjtmpuiPackagePath, 'utf-8');
// 赋值
hjtmpuiPackageData = JSON.parse(hjtmpuiPackageData);
hjtmpuiPackageData.version = hjtmpuiData.version;
fs.outputFileSync(hjtmpuiPackagePath, JSON.stringify(hjtmpuiPackageData, '', 4));

// 拷贝README.md文件
fs.copySync(path.join(root, 'README.md'), path.join(hjtmpui, 'README.md'));

// 清空文档
const docExists = fs.existsSync(docsTargetDir)
if (docExists) {
    fs.removeSync(docsTargetDir);
}
// 拷贝文档
fs.copySync(docsDir, docsTargetDir);

// 先清空packages/targetDir文件夹
const exists = fs.existsSync(targetDir);
if (exists) {
    fs.removeSync(targetDir);
}

// 读取components文件夹，同步组件
const packagesLists = fs.readdirSync(packages);
console.log(packagesLists);

packagesLists.reduce((promise, item) => {
    const comPath = path.join(packages); // components文件夹
    const componentsPath = path.join(comPath, item); // 组件文件
    fs.copySync(componentsPath, path.join(targetDir, item)); // 复制到package/targetDir中
    console.log(item + '组件同步成功');
    return promise;
}, Promise.resolve([])).then(() => {
    console.log('全部成功');
    if (argv === 'npm') {
        // 如果参数是:npm走上传npm方法
        console.log('----- 开始上传 npm -----');
        start();
    }
});

// packagesLists.reduce((promise, item) => {
//     const comPath = path.join(packages);
//     const coms = fs.readdirSync(comPath);
//     return coms.reduce((promise, item) => {
//         const componentsPath = path.join(comPath, item);
//         fs.copySync(componentsPath, path.join(targetDir, item));
//         console.log(item + '组件同步成功');
//         return promise;
//     }, promise);
// }, Promise.resolve([])).then(() => {
//     console.log('成功');
//     if (argv === 'npm') {
//         console.log('----- 开始上传 npm -----');
//         start();
//     }
// });

// 上传npm
function start() {
    // 任何你期望执行的cmd命令，ls都可以
    let cmdStr1 = 'npm publish --access public';
    // 子进程名称
    runExec(cmdStr1);
}

function runExec(cmdStr) {
    shell.cd('packages');
    shell.exec(cmdStr);
}

