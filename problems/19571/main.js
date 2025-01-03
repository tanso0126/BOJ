var a = Array.from({ length: 9900 }, (_, i) => i + 1)
var b = Array.from({ length: 100 }, (_, i) => i + 9901)

var s = ''

for (let n = 1; n <= 100; n++) {
    let line = []
    for (let i = 1; i <= 100; i++) {
        if (i === n) {
            line.push(b[n - 1])
        } else {
            line.push(a[(n - 1) * 99 + (i > n ? i - 2 : i - 1)])
        }
    }
    s += line.join(' ') + '\n'
}

console.log(s)

