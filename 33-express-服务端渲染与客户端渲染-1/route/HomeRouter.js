const express = require('express')

const router = express.Router()
// 路由级别
router.get("/", (req, res) => {
    res.send('home')
})
router.get("/list", (req, res) => {
    res.send(["1","2","3","4","5","6","7","8","9","0"])
})
router.get("/swiper", (req, res) => {
    res.send('home-swiper')
})
router.get("/slide", (req, res) => {
    res.send('home-slide')
})

module.exports = router