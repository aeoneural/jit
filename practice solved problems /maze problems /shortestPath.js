var initializeMatrix = function(m, n, value) { 
    var matrix = [];
    for (var i = 0; i < m; i++) { 
        matrix[i] = []
        for (var k = 0; k < n; k++) {
            matrix[i].push(value);
        }
    }
    return matrix
}
var shortestPath = function(grid, startR, startC, endR, endC) {
    if (grid[endR][endC] === 'X') throw new Error('Destination itself is a obstacle')
    var queue = [{'loc': [startR, startC], 'parent': null}];
    var current = 0; 
    var end = 0 
    var visited = initializeMatrix(grid.length, grid[0].length, false);

    while (current <= end) { 
        var currentLocation = queue[current];
        // console.log(currentLocation)
        var row = currentLocation['loc'][0];
        var col = currentLocation['loc'][1];  

        // we found the end
        if (row === endR && col === endC) {
            var currentParent = currentLocation['parent'];
            var path = []
            
            while (currentParent !== null) { 
                path.push(queue[currentParent]['loc'])
                currentParent = queue[currentParent]['parent'];
            }
            console.log('path', path);
            console.log('found', path.length);
            break;
        } 
        visited[row][col] = true;

        // up 
        if (row > 0 && grid[row - 1][col] === '.' && visited[row - 1][col] === false) { 
            var up = {'loc': [row - 1, col], 'parent': current}
            queue.push(up);
            end++;

        }

        // down
        if (row < grid.length - 1 && grid[row + 1][col] === '.' && visited[row + 1][col] === false) {
            var down = { 'loc': [row + 1, col], 'parent': current }
            queue.push(down);
            end++;
        }

        // left
        if (col > 0 && grid[row][col - 1] === '.' && visited[row][col - 1] === false) {
            var left = { 'loc': [row, col - 1], 'parent': current }
            queue.push(left);
            end++;
        }
        
        // right
        if (row < grid[row].length - 1 && grid[row][col + 1] === '.' && visited[row][col + 1] === false) {
            var right = { 'loc': [row, col + 1], 'parent': current }
            queue.push(right);
            end++;
        }
        current++;
    }
}

var testGrid = initializeMatrix(4, 4, '.')
    testGrid = [['.', '.', '.', '.'],
                ['X', '.', 'X', '.'],
                ['.', '.', '.', '.'],
                ['.', '.', '.', '.']]
// console.log(testGrid);
shortestPath(testGrid, 0, 0, 3, 3);