const express = require('express')

const router = express.Router()
// 路由级别-响应前端的get请求
router.get("/", (req, res) => {
    // new URL
    // console.log(req.query)
    // res.send('login-success') // send 片段 & json
    // res.json([1,2,3,4,5])
    // 渲染模版后返回给前端
    res.render("login",{error: "", isShow:false}) // 自动找views/login.ejs
})

router.post("/",(req, res) => {
    if (req.body.username === "2280431337@qq.com" && req.body.password === "123456") {
        // console.log('登录成功')
        // 重定向到home
        res.redirect("/home")
    } else {
        console.log('登录失败')
        res.render("login", {error: "用户名密码不匹配",isShow: true})
    }
})

module.exports = router