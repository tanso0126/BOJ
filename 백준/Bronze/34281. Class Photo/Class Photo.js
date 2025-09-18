var [a,b] = require('fs').readFileSync(0,'utf8').trim().split('\n').map(Number)
console.log(a*b)