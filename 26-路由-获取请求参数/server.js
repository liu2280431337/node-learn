const http = require('http');
const route = require('./route.js')
const api = require('./api.js')

const Router = {}


function use(obj) {
    Object.assign(Router, obj)
}

function start() {
    http.createServer((req, res) => {
        // favicon
        const myURL = new URL(req.url, 'http://127.0.0.1')
        // console.log(myURL.pathname);
        try {
            Router[myURL.pathname](req,res)
        } catch (error) {
            Router['/404'](req,res)
        }

    }).listen(3000, () => {
        console.log('server is running on 3000');
    })
}
exports.start = start
exports.use = use