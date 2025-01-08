import os

def read_input(file_path):
    with open(file_path, 'r') as file:
        N = int(file.readline().strip())
        A = [[0] * (N + 1) for _ in range(N + 1)]
        for i in range(1, N + 1):
            values = list(map(int, file.readline().strip().split()))
            for j in range(len(values)):
                A[i][i + j + 1] = values[j]
    return N, A

file_path = os.path.join(os.path.dirname(__file__), 'JP.txt')
N, A = read_input(file_path)

def Solve(N, A):
    # A[i][j] is cost of moving from level i to level j
    # N is the number of levels
    x, y, sx, sy = 1, 1, 0, 0 # Initialize x and y to 1, sx and sy to 0
    for i in range(2, N + 1): # loop from 2 to N
        print('x:',x,'->',i,',',sx,'+',A[x][i],' / y:',y,'->',i,',',sy,'+',A[y][i])
        if sx + A[x][i] < sy + A[y][i]:
            sx += A[x][i]
            x = i
        else:
            sy += A[y][i]
            y = i
    return sx + sy

result = Solve(N, A)
print(result)

