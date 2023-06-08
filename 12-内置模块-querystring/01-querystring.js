var str = "name=liugenhao&age=22&location=hengshui"
var querystring = require('querystring')

var obj = querystring.parse(str)
console.log(obj)


var myobj = {
    a: 1,
    b: 2,
    c: 3
}
var mystr = querystring.stringify(myobj)
console.log(mystr)

var str1 = 'id=3&city=北京&url=https://www.baidu.com'
var escaped = querystring.escape(str1)
console.log(escaped)

var escaped1 = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com'
var str2 = querystring.unescape(escaped1)
console.log(str2)