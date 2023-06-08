var http = require('http');
var url = require('url')
const { fileURLToPath } = require('url')
var modulerenderHTML = require('./module/renderHTML.js')
var modulerenderStatus = require('./module/renderStatus.js')

// 创建服务器
var server = http.createServer()

server.on('request', (req, res) => {
    if (req.url === "/favicon.ico") {
        // todo 读取本地图标
        return
    }
    // var urlObj = url.parse(req.url, true)
    // console.log(urlObj.query.a, urlObj.query.age)
    // var pathname = url.parse(req.url).pathname
    const myURL = new URL(req.url, 'http://localhost:3000')
    console.log(myURL.searchParams.get('username'))
    for(var [key, value] of myURL.searchParams) {
        console.log(key, value)
    }

    const pathname = myURL.pathname
    res.writeHead(modulerenderStatus.renderStatus(pathname),
    { "Content-Type": "text/html; charset=utf-8" })
    res.write(modulerenderHTML.renderHTML(pathname))
    res.end()
})
server.listen(3000, () => {
    console.log('server start')
})

// var b = new URL('/one', 'http://example.com/')
// console.log(b.href)

// const MyURL = new URL('https://a:b@測試?abc#foo')
// console.log(url.format(MyURL, {
    // unicode: true,
    // auth: false,
    // fragment: false,
    // search: false
// }))

// console.log(new URL('file://c://你好.txt').pathname)
// console.log(fileURLToPath('file://c://你好.txt'))