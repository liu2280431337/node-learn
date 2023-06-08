const fs = require('fs');

fs.appendFile('./avatar/a.txt', '\nhello world0', err => {
    console.log(err)
})