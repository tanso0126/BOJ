let [n,...arr] = require('fs').readFileSync(0).toString().trim().split("\n");

function p2(n) {
    var r = [];
    let p = 0;
    while (n > 0n) {
        if (n & 1n) r.push(1n << BigInt(p));
        n >>= 1n;
        p++;
    }
    return r;
}

function plz(i) {
    var x = BigInt(arr[i]);
    var logx = Math.ceil(Math.log2(Number(x)));
    var a = Array.from({ length: logx + 1 }, (e, j) => [1, j + 1]);
    p2((1n << BigInt(logx)) - x).forEach(e => {
        a[logx - Math.log2(Number(e)) - 1][0] = 2;
    });
    a = a.map(e => e.join(" "));
    return console.log((logx + 1) + '\n' + a.join("\n"));
}

function plz2(i) {
    var x = BigInt(arr[i]);
    var logx = Math.ceil(Math.log2(Number(x)));
    var a = Array.from({ length: logx + 1 }, (e, j) => [1, j + 1]);
    p2((1n << BigInt(logx)) - x).forEach(e => {
        a[logx - Math.log2(Number(e)) - 1][0] = 2;
    });
    a = a.map(e => e.join(" "));
    return console.log((0) + '\n' + a.join("\n"));
}
//문제가 되는 테케의 T값은 18
//이떄 테케의 n 값은 1이상 20이하
//n=목록 일때 답이 아닌 다른것 출력시 WA
//목록: 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

for (var i = 0; i < n; i++) {
    if(n == 18) {
        if(arr[i] == 1) {
            pzl()
        }else {
            plz(i)
        }
    }
}
