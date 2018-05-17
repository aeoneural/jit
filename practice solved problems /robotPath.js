/* 
given current location of robot and MxN matrix, find the fastest path to an edge. 
*/
var robotPath = function(grid, i, j) {
    var res = [];
    // res[i, j] = 'start';
    var visited = [] 
    for (var m = 0; m < grid.length; m++) { 
        var arr = [];
        for (var n = 0; n < grid[0].length; n++) {
            arr.push(0);
        }
        visited.push(arr);
    }


    var visitedCell = function(row, col, grid) { 
        return grid[row][col] === 1
    }
    var isObstacle = function(row, col, grid) { 
        return grid[row][col] === '1';  
    }
    var traverse = function(grid, visited, row, col, path) { 
        // console.log('row: ', row);

        if (row === 0 || col === 0 || row === grid.length - 1 || col === grid[0].length - 1) { 
            path.push([row, col]);
            // console.log('row: ', row);
            // console.log('col: ', col);
            // console.log('path: ', path);
            path.pop();
            return;
        }
        
        visited[row][col] = 1;
        path.push([row, col]);
        // console.log('visited: ', visited);
        if (row > 0 && !isObstacle(row - 1, col, grid) && !visitedCell(row - 1, col, visited)) { 
            traverse(grid, visited, row - 1, col, path);
        }
        if (row < grid.length - 1 && !isObstacle(row + 1, col, grid) && !visitedCell(row + 1, col, visited)) {
            traverse(grid, visited, row + 1, col,  path);
        }
        if (col < grid[0].length - 1 && !isObstacle(row, col + 1, grid) && !visitedCell(row, col + 1, visited)) {
            traverse(grid, visited, row, col + 1, path);
        }
        if (col > 0 && !isObstacle(row, col - 1, grid) && !visitedCell(row, col - 1, visited)) {
            traverse(grid, visited, row, col - 1, path);
        }
        path.pop();        
    }
    return traverse(grid, visited, i, j, []);
}
var arr = [ ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'] ]

var test = robotPath(arr, 2, 2)
console.log(test);