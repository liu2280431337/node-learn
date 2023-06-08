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

const func1 = (req, res, next) => {
    // 验证用户token过期
    console.log('验证token')
    const isValid = true
    if (isValid) {
        res.kerwin = "这是func1的结果"
        next()
    } else {
        // 返回错误
        res.send('error')
    }
}
app.use(func1)

const func2 = (req, res) => {
    // 查询数据库
    // 返回内容
    console.log(res.kerwin)
    res.send({
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    })
}
app.get('/home', [func2])

app.get('/list', (req, res) => {
    res.send('list')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})