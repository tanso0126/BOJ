var grid = [
    "@wwwwwwwwwwwwww@..wwwwww@wwwwwww.wwwwwwwww@w.wwwwwww@wwwwwwwwww@w.wwwwwwwwwwwwwwwww@wwwwwwwwwwwwwww@",
    "w@wwwwwww@wwwwwwwwwwwww.wwwwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwww@wwwwwwww.wwwwww@wwwwwwwwwww.wwwwwwwwww",
    "wwww@wwwwwww@wwww@wwwwwwwwww@wwwwwwww.wwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwww@wwwwwww",
    "wwwwwwwww.wwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwwww..wwwwwwwwww@wwwwww.wwwww.www",
    "wwww@wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwww.wwww@",
    "wwwwww.w.wwwww@wwwwww.wwwwwwwwwwww.wwwwwwwwwwww.wwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwww",
    "wwwwwwwwwwwwwwwwwwwwwwww.wwww@wwwwwwwwww@wwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwww.wwwwwwwwwwww",
    "w.@ww@@wwwwwwwwwwww@wwwww.wwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwww@wwwww.wwwwwwww@wwww.wwwww.wwwwwwww@ww"
];
var [w,h] = [8,100]
grid = grid.map(e=>e.split(''))

var v = []
var ar = []

function dfs(ny,nx,ty,tx,n,k,b) {
    if(grid[ny][nx] != 'w') {
        n--
    }else {
        if(k) b.push([ny,nx])
    }
    if(nx == tx && ny == ty) {
        if(k) return [n,b]
        return [n]
    }
    if(nx == tx) return dfs(ny+1,nx,ty,tx,n+1,k,b)
    if(ny == ty) return nx>tx?dfs(ny,nx-1,ty,tx,n+1,k,b):dfs(ny,nx+1,ty,tx,n+1,k,b)
        if(nx>tx) {
            var ff = dfs(ny,nx-1,ty,tx,n+1,k,b)
        }else {
            var ff = dfs(ny,nx+1,ty,tx,n+1,k,b)
        }
        var fff = dfs(ny+1,nx,ty,tx,n+1,k,b)
        var ff2 = Array.isArray(ff)?ff[0]:ff
        var fff2 = Array.isArray(fff)?fff[0]:fff
    return ff2<fff2?ff:fff
}

function kruskal(ar) {
    // 부모 노드를 찾는 함수 (경로 압축)
    function findParent(parent, node) {
        if (parent[node] !== node) {
            parent[node] = findParent(parent, parent[node]); // 경로 압축
        }
        return parent[node];
    }

    // 두 노드를 합치는 함수 (Union 연산)
    function unionNodes(parent, rank, u, v) {
        const rootU = findParent(parent, u);
        const rootV = findParent(parent, v);

        if (rootU !== rootV) {
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }

    // 간선 배열을 가중치 기준으로 정렬
    ar.sort((a, b) => a[2] - b[2]);

    // 노드의 개수 계산
    const nodes = new Set();
    ar.forEach(edge => {
        nodes.add(edge[0]);
        nodes.add(edge[1]);
    });

    const n = nodes.size;

    // 부모와 랭크 배열 초기화
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);

    const mst = []; // 최소 신장 트리에 포함될 간선 배열

    // Kruskal 알고리즘
    for (const [u, v, weight] of ar) {
        if (findParent(parent, u) !== findParent(parent, v)) {
            mst.push([u, v, weight]); // 간선을 MST에 추가
            unionNodes(parent, rank, u, v); // 두 노드 연결
        }
    }

    return mst;
}


for(var i = 0; i < w; i++) for(var j = 0; j < h; j++) if(grid[i][j] == '@') v.push([i,j])
for(var i = 0; i < v.length-1; i++) for(var j = i+1; j < v.length; j++) {
    var [x1,y1,x2,y2] = [v[i][0],v[i][1],v[j][0],v[j][1]]
    if(Math.abs(x1-x2)*Math.abs(y1-y2)<100) {
        var f = dfs(x1,y1,x2,y2,1,0,[])
        f = Array.isArray(f)?f[0]:f
        ar.push([i,j,f])
    }
}

ar = kruskal(ar).map(e=>[v[e[0]],v[e[1]],e[2]]).map(e=>e.flat(1))
ar.forEach(e=>{
    var b = dfs(e[0],e[1],e[2],e[3],1,1,[])
    console.log(b)
    b[1].forEach(g=> {
        grid[g[0]][g[1]] = '.'
    })
})

console.log(grid.map(e=>e.join('')).join('\n'))