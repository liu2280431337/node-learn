const express = require('express');

const app = express()
const HomeRouter = require('./router3/HomeRouter.js')
const LoginRouter = require('./router3/LoginRouter.js')

// 应用级别
app.use(function(req, res, next){
    console.log('验证token')
    next()
})

// 应用级别
app.use("/home",HomeRouter)
app.use("/login",LoginRouter)


app.use((req,res) => {
    res.status(404).send('找不到页面🚀🚀🚀')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})