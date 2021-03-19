const fs = require('fs-extra');
const path = require('path');
// const glob = require('glob');
const argv = process.argv.splice(2)[0]
const shell = require('shelljs');
const updatePackageJson = require('./updatePackage');
const createDocs = require('./createDocs');

const {
    packages,
    hjtmpui,
    targetDir,
    root,
    docsDir,
    docsTargetDir,
} = require('./dirName');

// var filenames = [];
// var filenamesUpper = [];

// 组装package.json
updatePackageJson();

// 拷贝README.md文件
fs.copySync(path.join(root, 'README.md'), path.join(hjtmpui, 'README.md'));

// 生成文档
createDocs();

// 先清空packages/components文件夹
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

// 上传npm
function start() {
    // cmd命令
    let cmdStr = 'npm publish --access public';
    // 先进入packages文件夹
    shell.cd('packages');
    shell.exec(cmdStr);
}
