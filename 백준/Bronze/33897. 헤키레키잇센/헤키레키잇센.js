var [n,...s] = require('fs').readFileSync(0,'utf8').trim().split(/\s+/).map(Number)
var c = 0
var max = 0
var now = 1
for(var i = 0; i < n-1; i++) {
    if(s[i] <= s[i+1]) now++
    else {
        if(max < now) max = now
        now = 1
        c++
    }
}
if(max < now) max = now
c++
console.log(c,max)