var n = +require('fs').readFileSync(0)

function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
}

function F(a, b, c) {
    let arr = [a];
    if (c > 0) while (arr[arr.length - 1] + c < b) arr.push(arr[arr.length - 1] + c);
    else while (arr[arr.length - 1] + c > b) arr.push(arr[arr.length - 1] + c);
    return arr.join(' ');
}

function solve(n) {
    if (n < 10 || isPrime(n - 1)) {
        console.log("NO");
        return;
    }
    console.log("YES");

    let s;
    switch (n % 6) {
        case 0:
        case 2:
        case 4:
            s = F((n % 4) + 2, n + 1, 4) + ' ' + F((n + 2) % 4 + 2, n + 1, 4) + ' ' + F(1, n + 1, 4) + ' ' + F(3, n + 1, 4);
            break;
        case 1:
            s = F((n + 1) % 4 + 2, n - 1, 4) + ' ' + F((n - 1) % 4 + 2, n - 1, 4) + ' ' + 1 + ' ' + F(n - 2, 1, -4) + ' ' + F(n - 4, 1, -4) + ' ' + n + ' ' + (n - 1);
            break;
        case 3:
            s = F(10, n - 5, 4) + ' ' + F(4, n - 5, 4) + ' ' + 2 + ' ' + (n - 5) + ' ' + 1 + ' ' + F(n - 2, 1, -4) + ' ' + F(n - 4, 1, -4) + ' ' + n + ' ' + (n - 1) + ' ' + 6 + ' ' + (n - 3);
            break;
        case 5:
            s = F((n - 1) % 4 + 2, n + 1, 4) + ' ' + F((n + 1) % 4 + 2, n + 1, 4) + ' ' + F(1, n + 1, 4) + ' ' + F(3, n + 1, 4);
            break;
    }
    console.log(s)
}

solve(n)