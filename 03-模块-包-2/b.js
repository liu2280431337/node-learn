function test() {
    console.log('bbb')
}
module.exports = test
var modultA = require('./a')
console.log(modultA.upper('abc'))