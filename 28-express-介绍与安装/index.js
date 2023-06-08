const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.send(`
    //     <html>
    //         <b>hello world</b>
    //     </html>
    // `)
    res.send({
        name: 'Mr.Liu',
        age: 22
    })
})
app.get('/login', (req, res) => {
    res.write('login')
    res.end()
})
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})