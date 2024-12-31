var n = require('fs').readFileSync(0).toString().trim().split(' ')
console.log((n[0] == '') ? '0' : n.length)