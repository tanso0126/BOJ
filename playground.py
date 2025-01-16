from collections import deque

def solve_grass_cutting(w, h, grid):
    # 그리드의 복사본 생성
    result = [list(row) for row in grid]

    # 이동 방향 (상, 하, 좌, 우)
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    # BFS 탐색 함수
    def bfs(start):
        queue = deque([start])
        visited = set()
        visited.add(start)
        while queue:
            x, y = queue.popleft()
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                # 경계 조건을 먼저 확인
                if 0 <= nx < h and 0 <= ny < w and (nx, ny) not in visited:
                    if result[nx][ny] == '.' or result[nx][ny] == '@':
                        visited.add((nx, ny))
                        queue.append((nx, ny))
        return visited

    # 모든 집합을 연결
    clusters = []
    visited_global = set()
    for i in range(h):
        for j in range(w):
            if grid[i][j] == '@' and (i, j) not in visited_global:
                cluster = bfs((i, j))
                clusters.append(cluster)
                visited_global.update(cluster)

    # 최소 비용으로 연결
    def connect_clusters():
        cost = 0
        for cluster in clusters:
            for x, y in cluster:
                for dx, dy in directions:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < h and 0 <= ny < w and grid[nx][ny] == 'w':
                        result[nx][ny] = '.'
                        cost += 1
        return cost

    # 연산 수행
    total_cost = connect_clusters()

    # 결과 출력
    return [''.join(row) for row in result]
# 入力例
W, H = 8, 100
grid = """@wwwwwwwwwwwwww@..wwwwww@wwwwwww.wwwwwwwww@w.wwwwwww@wwwwwwwwww@w.wwwwwwwwwwwwwwwww@wwwwwwwwwwwwwww@
w@wwwwwww@wwwwwwwwwwwww.wwwwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwww@wwwwwwww.wwwwww@wwwwwwwwwww.wwwwwwwwww
wwww@wwwwwww@wwww@wwwwwwwwww@wwwwwwww.wwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwww@wwwwwww
wwwwwwwww.wwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwwww..wwwwwwwwww@wwwwww.wwwww.www
wwww@wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwwwww.wwww@
wwwwww.w.wwwww@wwwwww.wwwwwwwwwwww.wwwwwwwwwwww.wwwwwwwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwwwww@wwwwwwww
wwwwwwwwwwwwwwwwwwwwwwww.wwww@wwwwwwwwww@wwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwww.wwwwwwwwwwww
w.@ww@@wwwwwwwwwwww@wwwww.wwwwwwwww@wwwwwwwwwwwwwwwwwwwwwwwwww@wwwww.wwwwwwww@wwww.wwwww.wwwwwwww@ww""".split('\n')

# 実行
result = solve_grass_cutting(W, H, grid)
print("\n".join(result))
