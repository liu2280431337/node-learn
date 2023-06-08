const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({
        name: 'Mr.Liu',
        age: 22
    })
})

app.get('/login', (req, res) => {
    res.write('login')
    res.end()
})

// app.get('/home', (req, res, next) => {
//     // 验证用户token过期
//     console.log('验证token')
//     const isValid = false
//     if (isValid) {
//         next()
//     } else {
//         // 返回错误
//         res.send('error')
//     }
// }, (req, res) => {
//     // 查询数据库
//     // 返回内容
//     res.send({
//         list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//     })
// })

const func1 = (req, res, next) => {
    // 验证用户token过期
    console.log('验证token')
    const isValid = true
    if (isValid) {
        res.kerwin="这是func1的结果"
        next()
    } else {
        // 返回错误
        res.send('error')
    }
}
const func2 = (req, res) => {
    // 查询数据库
    // 返回内容
    console.log(res.kerwin)
    res.send({
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    })
}
app.get('/home', [func1, func2])

app.get('/list',[func1], (req,res) => {
    res.send('list')
})

// app.get('/ab?cd', (req, res) => {
//     res.send('ok')
// })

// app.get('/ab/:id/:id2', (req, res) => {
//     res.send('ok')
// })

// app.get('/ab+cd', (req, res) => {
//     res.send('ok')
// })

// app.get('/ab*cd', (req, res) => {
//     res.send('ok')
// })

// app.get('/ab(cd)?e', function (req, res) {
//     res.send('ab(cd)?e');
// });

// app.get(/.*fly$/, function (req, res) {
//     res.send('/.*fly$/');
// });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})