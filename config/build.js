/* eslint-disable */
const fs = require('fs')
const join = require('path').join
const webpack = require('webpack')

const config = require('./webpack.config')
function build (baseDir) {
    const entryDirPath = join(__dirname, '..', baseDir)

    const files = getJsonFiles(entryDirPath, baseDir)
    const entry = {}
    files.forEach(filePath => {
        console.log(filePath)
        // /index.js
        const filekeyPath = filePath.split(baseDir)[1]
        // /index
        const fileKey = filekeyPath.split('.')[0]
        entry[fileKey] = filePath
    })
    console.log(entry)

    config.entry = entry
    const compiler = webpack(config)
    compiler.run((err, stats) => {
        console.log(stats.toString({
            chunks: false,  // 使构建过程更静默无输出
            colors: true    // 在控制台展示颜色
        }));
    })
}


function getJsonFiles(jsonPath){
    let jsonFiles = [];
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) { 
              jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    return jsonFiles
}

module.exports = {
    build,
    getJsonFiles
}