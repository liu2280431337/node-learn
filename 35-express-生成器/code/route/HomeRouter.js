const express = require('express')

const router = express.Router()
// 路由级别
router.get("/", (req, res) => {
    var list = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'qqq', 'ssss']
    var myhtml = "<b>我是加粗</b>"
    res.render('home', { list: list, myhtml: myhtml })
})


module.exports = router