var ln = require('fs').readFileSync(0).toString().trim().split('\n');
var n = parseInt(ln[0]);
var xp = [];
var yp = [];

for (var i = 1; i <= n; i++) {
    var [x, y] = ln[i].split(' ').map(Number);
    xp.push(x);
    yp.push(y);
}

xp.push(xp[0]);
yp.push(yp[0]);

var l = 0;
var r = 0;

for (var i = 0; i < n; i++) {
    l += xp[i] * yp[i + 1];
    r += xp[i + 1] * yp[i];
}

var an = Math.abs(l - r) / 2;
console.log(((Math.round(an*10)/10)%1 == 0) ? Math.round(an*10)/10 + ".0" : Math.round(an*10)/10);
