/* eslint-disable */
const watch = require('watch')
const join = require('path').join
const build = require('./build').build

const baseDir = 'webapp'
const basePath = join(__dirname, '..', baseDir)
build(baseDir)
watch.createMonitor(basePath, function (monitor) {
    monitor.on("created", function (f, stat) {
        // 添加
        build(baseDir)
    })
    monitor.on("changed", function (f, curr, prev) {
        // 更新文件
        build(baseDir)
    })
    monitor.on("removed", function (f, stat) {
        // 删除
        build(baseDir)
    })
    // monitor.stop(); // Stop watching
})