var [a,b] = require('fs').readFileSync(0).toString().trim().split(' ')
console.log(parseInt(a) + parseInt(b))