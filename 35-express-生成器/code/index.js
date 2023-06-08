const express = require('express');

const app = express()
const HomeRouter = require('./route/HomeRouter.js')
const LoginRouter = require('./route/LoginRouter.js')

// 配置模版引擎
app.set("views", "./views")
app.set("view engine", "html")
app.engine("html", require("ejs").renderFile)

// 配置静态资源
app.use(express.static("public"))
app.use("/static",express.static("static"))

// 配置解析post参数的中间件
app.use(express.urlencoded({extended:false}))
app.use(express.json())

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