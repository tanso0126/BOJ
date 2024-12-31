let [s,t]=require('fs').readFileSync(0,'utf8').split`\n`
function dfs(x) {
    if(x.length == s.length) return (x == s)
    if(x.substr(0,1) == 'A' && x.substr(x.length-1,1) == 'B') return false
    if(x.substr(0,1) == 'B' && x.substr(x.length-1,1) == 'B') return dfs(x.split("").reverse().join("").slice(0,-1))
    if(x.substr(0,1) == 'A' && x.substr(x.length-1,1) == 'A') return dfs(x.slice(0,-1))
    if(x.substr(0,1) == 'B' && x.substr(x.length-1,1) == 'A') return (dfs(x.split("").reverse().join("").slice(0,-1)) || dfs(x.slice(0,-1)))
}
console.log((dfs(t)) ? '1' : '0')