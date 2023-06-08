var http = require('http');
var url = require('url')
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
    // console.log(url.parse(req.url).pathname)
    var urlObj = url.parse(req.url, true)
    console.log(urlObj.query.a, urlObj.query.age)
    var pathname = url.parse(req.url).pathname
    res.writeHead(modulerenderStatus.renderStatus(pathname), { "Content-Type": "text/html; charset=utf-8" })
    res.write(modulerenderHTML.renderHTML(pathname))
    res.end()
})
server.listen(3000, () => {
    console.log('server start')
})

// 1、parse
// const urlString = 'https://www.baidu.com:443/ad/index.html? id=8&name=mouse#tag=110'
// const parsedStr = url.parse(urlString)
// console.log(parsedStr)

// 2、format
// const urlObject = {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'www.baidu.com:443',
//     port: '443',
//     hostname: 'www.baidu.com',
//     hash: '#tag=110',
//     search: '?id=8&name=mouse',
//     query: { id: '8', name: 'mouse' },
//     pathname: '/ad/index.html',
//     path: '/ad/index.html?id=8&name=mouse'
// }
// const parsedObj = url.format(urlObject)
// console.log(parsedObj)

// resolve
// var a = url.resolve('/one/two/three', 'four')
// console.log(a)
// var b = url.resolve('http://example.com/', '/one')
// console.log(b)
// var c = url.resolve('http://example.com/one', '/two')
// console.log(c)