var [n,...s] = require('fs').readFileSync(0,'utf8').trim().split(/\s+/).map(Number)
var dp = Array(n).fill(1)
for(var i = 1; i < n; i++) {
    if(s[i] > dp[i-1]) dp[i] = dp[i-1]+1
    else dp[i] = Math.min(s[i],i+1)
}
console.log(Math.max(...dp))