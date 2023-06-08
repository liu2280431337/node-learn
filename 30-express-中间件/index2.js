const express = require('express');

const app = express()
const IndexRouter = require('./router2/indexRouter.js')

// 应用级别
app.use(function(req, res, next){
    console.log('验证token')
    next()
})

// 应用级别
app.use("/api",IndexRouter)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})