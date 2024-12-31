const smallPrimes = [
    2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 
    53n, 59n, 61n, 67n, 71n, 73n, 79n, 83n, 89n, 97n, 101n, 103n, 107n, 109n, 113n
];

function trialDivision(n) {
    for (let prime of smallPrimes) {
        while (n % prime === 0n) {
            console.log(prime.toString());
            n /= prime;
        }
    }
    return n;
}

function isPrime(n, k = 3) {
    if (n === 2n || n === 3n) return true;
    if (n < 2n || n % 2n === 0n) return false;

    let s = 0n;
    let d = n - 1n;

    while (d % 2n === 0n) {
        d /= 2n;
        s += 1n;
    }

    for (let i = 0; i < k; i++) {
        const a = 2n + BigInt(Math.floor(Math.random() * (Number(n - 4n)))) % (n - 3n);
        let x = modExp(a, d, n);
        
        if (x === 1n || x === n - 1n) continue;

        let composite = true;
        for (let r = 1n; r < s; r++) {
            x = modExp(x, 2n, n);
            if (x === n - 1n) {
                composite = false;
                break;
            }
        }

        if (composite) return false;
    }

    return true;
}

function modExp(a, b, mod) {
    let result = 1n;
    a = a % mod;
    while (b > 0n) {
        if (b % 2n === 1n) result = (result * a) % mod;
        a = (a * a) % mod;
        b = b / 2n;
    }
    return result;
}

function pollardRho(n) {
    if (n % 2n === 0n) return 2n;

    let x = 2n + BigInt(Math.floor(Math.random() * 1000)); 
    let y = x;
    let c = BigInt(Math.floor(Math.random() * 1000) + 1);
    let d = 1n;

    const f = (x) => (x * x + c) % n;

    while (d === 1n) {
        x = f(x);
        y = f(f(y));
        d = gcd((x > y ? x - y : y - x), n);
    }

    if (d === n) return pollardRho(n);
    return d;
}

function gcd(a, b) {
    if (b === 0n) return a;
    return gcd(b, a % b);
}

function factorize(n) {
    n = trialDivision(n);
    if (n === 1n) return;
    if (isPrime(n)) {
        ppp.push(n.toString())
        return;
    }

    let divisor = pollardRho(n);
    factorize(divisor);
    factorize(n / divisor);
}

let num = BigInt(require('fs').readFileSync(0).toString().trim());
var ppp = []
factorize(num)
console.log(ppp.map(Number).sort((a,b) => a-b).join('\n'))
