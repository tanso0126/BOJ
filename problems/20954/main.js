let [n,...l] = require('fs').readFileSync(0).toString().trim().split("\n").map(Number);
var arr1 = [0,1,6,15,16]
var arr2 = [3,10,23,24]
var s = ''
//2^(n-1) < x <= 2^n 인 n에 대하여
//양수일때 2^n+2 - 4 + a
//음수일때 3*2^n+1 - 4 + a
function F(x) {
    for(var i = 1; i > 0; i++) {
        if(2**i >= x) return i
    }
}

for(var i = 0; i < n; i++) {
    var a = l[i]
    if(0 <= a && a <= 4) {
        s += arr1[a] + '\n'
        continue
    }
    if(a >= 5) {
        s += (2**(F(a) + 2) - 4 + a) + '\n'
        continue
    }
    if(a < 0 && a >= -4) {
        a *= -1
        s += arr2[a-1] + '\n'
        continue
    }
    if(a <= -5) {
        a *= -1
        s += (3 * 2**(F(a) + 1) - 4 + a) + '\n'
        continue
    }
}

console.log(s)