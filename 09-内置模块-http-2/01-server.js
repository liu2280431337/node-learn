var http = require('http');
var modulerenderHTML = require('./module/renderHTML.js')
var modulerenderStatus = require('./module/renderStatus.js')

// 创建服务器

// http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") {
//         // todo 读取本地图标
//         return
//     }
//     console.log(req.url)
//     res.writeHead(modulerenderStatus.renderStatus(req.url), { "Content-Type": "text/html; charset=utf-8" })
//     res.write(modulerenderHTML.renderHTML(req.url))
//     res.end()
// }).listen(9000, () => {
//     console.log('server start');
// })

var server = http.createServer()

server.on('request', (req, res) => {
    if (req.url === "/favicon.ico") {
        // todo 读取本地图标
        return
    }
    console.log(req.url)
    res.writeHead(modulerenderStatus.renderStatus(req.url), { "Content-Type": "text/html; charset=utf-8" })
    res.write(modulerenderHTML.renderHTML(req.url))
    res.end()
})
server.listen(3000, () => {
    console.log('server start')
})