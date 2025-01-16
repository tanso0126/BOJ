//반복문+함수 => 점화식 구현을 통한 O(N)?
//우선 A=1 일때부터 생각해보자.

//var [A,B] = require('fs').readFileSync(0).toString().trim().split(" ");
var dp = Array(100010)
dp[1] = 3

function DP1(a,b) {//a부터 b까지 박수횟수 구하기
    if(a-1) return DP1(1,b) - DP1(1,a-1)
    if(b-a < 10) {
        var cnt = 0
        for(var i = a; i <= b; i++) {
            var str = i.toString()
            for(var j = 0; j < str.length; j++) {
                if(str[j] == '3' || str[j] == '6' || str[j] == '9') cnt++
            }
        }
        return cnt
    }
    return (dp[b.length-1] ??= 10*dp[b.length-2] + 3*(10**(b.length-2))) + DP1(b-10**(b.length-1),b)//여기서 무한루프
}

console.log(DP1(1,100))
