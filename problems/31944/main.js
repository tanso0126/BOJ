let [n,...s] = require('fs').readFileSync(0).toString().trim().split("\n");
n = +n
s = s.map(e=>e.split('').map(f=>f=='.'?0:1))
var ans = ''

var b = Array.from(Array(n), () => Array(n).fill(0))
var sf = [[[-2,-1],[-2,0],[-2,1],[-1,-1],[0,-1],[0,0],[0,1],[1,1],[2,-1],[2,0],[2,1]],[[-1,-2],[-1,0],[-1,1],[-1,2],[0,-2],[0,0],[0,2],[1,-2],[1,-1],[1,0],[1,2]],[[-2,-1],[-2,0],[-2,1],[-1,-1],[0,-1],[0,0],[0,1],[1,1],[2,-1],[2,0],[2,1]],[[-1,-2],[-1,0],[-1,1],[-1,2],[0,-2],[0,0],[0,2],[1,-2],[1,-1],[1,0],[1,2]]]
var cf = [[[-2,-1],[-2,0],[-2,1],[-1,-1],[0,-1],[1,-1],[2,-1],[2,0],[2,1]],[[-1,-2],[0,-2],[1,-2],[-1,-1],[-1,0],[-1,1],[1,2],[0,2],[-1,2]],[[-2,-1],[-2,0],[-2,1],[-1,1],[0,1],[1,1],[2,-1],[2,0],[2,1]],[[-1,-2],[0,-2],[1,-2],[1,-1],[1,0],[1,1],[1,2],[0,2],[-1,2]]]

function F12(x,y1,y2,d,r) {//d==1 up, d==0 down
    var s1 = s[x][y1]
    var s2 = s[x][y2]
    var b1 = b[x][y1]
    var b2 = b[x][y2]
    if(s1 == b1 && s2 == b2) return ''
    if(s1 != b1 && s2 != b2) {
        if(d) return C(3,x-1,y2+1)
        return C(1,x+1,r==='r'?y2+1:y2-1)
    }
    if(s1 != b1) {
        if(d) return C(1,x-1,y2+1)
        return C(3,x+1,r==='r'?y2+1:y2-1)
    }
    if(d) return C(1,x-1,y2+2)
    return C(3,x+1,r==='r'?y2+2:y2-2)
}

function F21(x1,x2,y,d) {//d==1 left, d==0 right
    var s1 = s[x1][y]
    var s2 = s[x2][y]
    var b1 = b[x1][y]
    var b2 = b[x2][y]
    if(s1 == b1 && s2 == b2) return ''
    if(s1 != b1 && s2 != b2) {
        if(d) return C(2,x2-1,y-1)
        return C(0,x2+1,y+1)
    }
    if(s1 != b1) {
        if(d) return C(0,x2-1,y-1)
        return C(2,x2+1,y+1)
    }
    if(d) return C(0,x2-2,y-1)
    return C(2,x2+2,y+1)
}



function LF21(x1,x2,y,d) {//d==1 left, d==0 right , test 13 14 4 1
    var s1 = s[x1][y]
    var s2 = s[x2][y]
    var b1 = b[x1][y]
    var b2 = b[x2][y]
    if(s1 == b1 && s2 == b2) return ''
    if(s1 != b1 && s2 != b2) {
        if(d) return S(0,x1,y-1) + C(0,x1,y-1)
        return S(0,x2,y+1) + C(2,x2,y+1)
    }
    if(s1 != b1) {
        if(d) return S(0,x2,y-1) + C(2,x2,y-1)
        return S(0,x1,y+1) + C(0,x1,y+1) + S(0,x2,y+1) + C(2,x2,y+1)
    }
    if(d) return S(0,x1,y-1) + C(0,x1,y-1) + S(0,x2,y-1) + C(2,x2,y-1)
    return S(0,x1,y+1) + C(0,x1,y+1)
}

function LF12(x,y1,y2,d) {//d==1 up, d==0 down
    var s1 = s[x][y1]
    var s2 = s[x][y2]
    var b1 = b[x][y1]
    var b2 = b[x][y2]
    if(s1 == b1 && s2 == b2) return ''
    if(s1 != b1 && s2 != b2) {
        if(d) return S(1,x-1,y2) + C(1,x-1,y2)
        return S(1,x+1,y1) + C(3,x+1,y1)
    }
    if(s1 != b1) {
        if(d) return S(1,x-1,y2) + C(1,x-1,y2) + S(1,x-1,y1) + C(3,x-1,y1)
        return S(1,x+1,y2) + C(1,x+1,y2)
    }
    if(d) return S(1,x-1,y1) + C(3,x-1,y1)
    return S(1,x+1,y1) + C(3,x+1,y1) + S(1,x+1,y2) + C(1,x+1,y2)
}

function LF1(x,y) {
    return s[x][y]==b[x][y]?'':S(0,x,y) + S(1,x-1,y+1) + C(1,x-1,y+1) + S(1,x+1,y-1) + C(3,x+1,y-1) + C(0,x-1,y) + C(2,x-1,y) + C(0,x+1,y) + C(2,x+1,y)
}

function S(r,x,y) {
    sf[r].forEach(e => b[x+e[0]][y+e[1]] ^= 1)
    return `S ${r} ${x} ${y}\n`
}

function C(r,x,y) {
    cf[r].forEach(e => b[x+e[0]][y+e[1]] ^= 1)
    return `C ${r} ${x} ${y}\n`
}

var w = !(n%2)?(n-2)/2:(n-3)/2
var h = !(n%2)?(n-2)/2:(n-1)/2

for(var i = n-1; i >= n-h; i--) {//x
    for(var j = 0; j <= w-1; j+=2) {//y
        ans += F12(i,j,j+1,1)
    }
}

for(var i = n-1; i >= n-h; i--) {//y
    for(var j = n-1; j >= n-h; j-=2) {//x
        ans += F21(j,j-1,i,1)
    }
}

for(var i = 0; i <= w-1; i++) {//x
    for(var j = n-1; j >= n-h; j-=2) {//y
        ans += F12(i,j,j-1,0)
    }
}

for(var i = 0; i <= w-1; i++) {//y
    for(var j = 0; j <= w-3; j+=2) {//x
        if(j == 2 && w%2) j--
        ans += F21(j,j+1,i,0)
    }
}

for(var i = w-3; i <= w-1; i++) {//x
    for(var j = 0; j <= w-3; j+=2) {//y
        if(j == 2 && w%2) j--
        ans += F12(i,j,j+1,0,'r')
    }
}

for(var i = 0; i <= w-1; i++) {//x
    ans += LF12(i,w,w+1,0)
}

for(var i = n-1; i >= n-h; i--) {//x
    ans += LF12(i,w,w+1,1)
}

for(var i = n-1; i >= w; i--) {//y
    ans += LF21(w,w+1,i,1)
}

for(var i = 0; i <= w-3; i++) {//y
    ans += LF21(w,w+1,i,0)
}

ans += LF12(n-h-1,w-2,w-1,1)
ans += LF12(n-h-2,w-2,w-1,1)

ans += LF1(n-h-3,w-2)
ans += LF1(n-h-3,w-1)
ans += LF1(n-h-4,w-2)
ans += LF1(n-h-4,w-1)


console.log(ans)