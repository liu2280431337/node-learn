const fs = require('fs');

fs.stat('./avatar/1.txt', (err,data) => {
    console.log(data)
    console.log(data.isFile())
    console.log(data.isDirectory())
})