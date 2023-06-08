var http = require('http');
var https = require('https');
var url = require('url');

http.createServer((req, res) => {
    var urlobj = url.parse(req.url, true)

    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        // cors头 解决跨域
        "access-control-allow-origin": "*"
    })

    switch (urlobj.pathname) {
        case "/api/aaa":
            // 客户端去猫眼要数据
            httpget((data) => {
                res.end(data)
            })
            break;
        default:
            res.end('404')
    }
}).listen(3000)

function httpget(cd){
    var data = ""
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=128&channelId=4`, (res) => {
        res.on("data", (chunk) => {
            data+= chunk
        })
        res.on("end", () => {
            console.log(data)
            cd(data)
            // response.end(data)
        })
    })
}