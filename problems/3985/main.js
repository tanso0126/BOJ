let [l,n,...a] = require('fs').readFileSync(0).toString().trim().split("\n");
l = parseInt(l)
n = parseInt(n)

var lol = new Array(l+1).fill(0)
var gr = 0
var grw = 0
a = a.map(e => e.split(" ").map(Number))

for(var i = 0; i < n; i++) {
    if(a[i][1] - a[i][0] > gr) {
        gr = a[i][1] - a[i][0]
        grw = i+1
    }
}

for(var i = 0; i < n; i++) {
    for(var j = a[i][0]; j <= a[i][1]; j++) {
        if(lol[j] == 0) lol[j] = i+1
    }
}

var rl = new Array(l+1).fill(0)

for(var i = 0; i < l+1; i++) {
    rl[lol[i]] = rl[lol[i]] + 1
}

var kk = 0
var kkw = 0
for(var i = 1; i < l+1; i++) {
    if(rl[i] > kk) {
        kk = rl[i]
        kkw = i
    }
}

console.log(grw + '\n' + kkw)