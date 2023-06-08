const crypto = require('crypto');

const hash = crypto.createHmac('sha256', 'Hmac-key')

hash.update('123456')

console.log(hash.digest("hex"))