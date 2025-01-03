var s = `100 8
@wwwwwwwwwwwwww@..wwwwww@wwwwwww.wwwwwwwww@w.wwwwwww@wwwwwwwwww@w.wwwwwwwwwwwwwwwww@wwwwwwwwwwwwwww@
w@wwwwwww@wwwwwwwwwwwww.wwwwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwww@wwwwwwww.wwwwww@wwwwwwwwwww.wwwwwwwwww
wwww@wwwwwww@wwww@wwwwwwwwww@wwwwwwww.wwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwww@wwwwwww
wwwwwwwww.wwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwwww..wwwwwwwwww@wwwwww.wwwww.www
wwww@wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwww.wwww@
wwwwww.w.wwwww@wwwwww.wwwwwwwwwwww.wwwwwwwwwwww.wwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwww
wwwwwwwwwwwwwwwwwwwwwwww.wwww@wwwwwwwwww@wwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwww.wwwwwwwwwwww
w.@ww@@wwwwwwwwwwww@wwwww.wwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwww@wwwww.wwwwwwww@wwww.wwwww.wwwwwwww@ww`
const input = s.split("\n");
const [W, H] = input[0].split(" ").map(Number);
const grid = input.slice(1).map(line => line.split(""));

// 방향 설정 (상하좌우만 허용)
const directions = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
];

// 범위 확인
const isValid = (x, y) => x >= 0 && y >= 0 && x < H && y < W;

// BFS로 연결된 마을 찾기
const bfs = (startX, startY, visited) => {
  const queue = [[startX, startY]];
  const component = [];
  visited[startX][startY] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    component.push([x, y]);

    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      if (isValid(nx, ny) && !visited[nx][ny] && (grid[nx][ny] === '@' || grid[nx][ny] === '.')) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  return component;
};

// 마을끼리의 최단 거리 계산
const findShortestPath = (compA, compB) => {
  let minDistance = Infinity;
  let bestPath = null;

  for (const [ax, ay] of compA) {
    for (const [bx, by] of compB) {
      const distance = Math.abs(ax - bx) + Math.abs(ay - by); // 대각선 제외
      if (distance < minDistance) {
        minDistance = distance;
        bestPath = { start: [ax, ay], end: [bx, by] };
      }
    }
  }

  return { minDistance, bestPath };
};

// 마을 연결 처리
const connectComponents = (start, end) => {
  const [x1, y1] = start;
  const [x2, y2] = end;

  let x = x1, y = y1;

  // x 방향으로 이동
  while (x !== x2) {
    x += x < x2 ? 1 : -1;
    if (grid[x][y] === 'w') grid[x][y] = '.'; // 풀 제거
  }

  // y 방향으로 이동
  while (y !== y2) {
    y += y < y2 ? 1 : -1;
    if (grid[x][y] === 'w') grid[x][y] = '.'; // 풀 제거
  }
};

// 모든 마을 연결
const visited = Array.from({ length: H }, () => Array(W).fill(false));
const components = [];

// 연결된 마을 컴포넌트 찾기
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if ((grid[i][j] === '@') && !visited[i][j]) {
      components.push(bfs(i, j, visited));
    }
  }
}

// 연결해야 할 컴포넌트 처리
while (components.length > 1) {
  let minDistance = Infinity;
  let bestPair = null;

  for (let i = 0; i < components.length; i++) {
    for (let j = i + 1; j < components.length; j++) {
      const { minDistance: dist, bestPath } = findShortestPath(components[i], components[j]);
      if (dist < minDistance) {
        minDistance = dist;
        bestPair = { i, j, bestPath };
      }
    }
  }

  const { i, j, bestPath } = bestPair;

  // 선택된 두 컴포넌트를 연결
  connectComponents(bestPath.start, bestPath.end);

  // 컴포넌트를 병합
  components[i] = components[i].concat(components[j]);
  components.splice(j, 1);
}

// 결과 출력
const result = grid.map(row => row.join("")).join("\n");
console.log(result);