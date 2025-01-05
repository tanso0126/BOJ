let [n,...s] = require('fs').readFileSync(0).toString().trim().split("\n").map(e=>+e);

function gcd(a,b) {
    var k = a%b
    return k ? gcd(b,k) : b
}

var b = s[1]-s[0]
s = s.sort((a,b)=>a-b)

for(var i = 1; i < n-1; i++) b = gcd(b, s[i+1]-s[i])
var c = [b]
for(var i = 2; i <= Math.sqrt(b); i++) if(b % i == 0) c.push(i), i*i-b?c.push(b/i):0

console.log(c.sort((a,b)=>a-b).join(" "))
