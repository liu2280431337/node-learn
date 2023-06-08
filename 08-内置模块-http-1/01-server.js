var http = require('http');

// 创建服务器

http.createServer((req, res) => {
    // req 接收浏览器传的参数
    // res 返回渲染的内容
    // res.write('1')
    // res.write('2')
    // res.write('3')
    // res.write('4')
    // res.end('[1,2,3,4,5,6,7,8,9,0]')
    // res.write('hello world')
    res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"})
    res.write(`
        <html>
            <b>hello</b>
            <h1>world</h1>
            <div>大家好</div>
        </html>
    `)
    res.end()
}).listen(8888, () => {
    console.log('server start');
})