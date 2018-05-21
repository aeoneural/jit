/* 
Given a 2D map find the shortest distance from the starting point to the finish
point. You can only move horizontally or vertically. You cannot leave the
boundaries of the map.
 
Open spaces are represented by .
Walls are represented by x
Points are represented as (row, col) where (0,0) is top left corner
 
Eg:
 
Map:
 
. . .
x x .
. . .
 
Start point: (0,0)
End point: (2,0)
 
Shortest path length: 6

----

input: 2D grid, start point, end point

example: (0, 0)  (2, 1)
. . .
x x .
. . .

[
    [start, '.', '.'],
    ['x', 'x', '.'], 
    ['.', '.', end]
]

steps = 0;
queue = [(row, col)]

output: length of the shortest path

*/
var isVisited = function(row, col, grid) { 
    console.log('row: ', row);
    console.log('col: ', col);
    return grid[row][col] === true;
}
var isValidStep = function(row, col, grid) {
    return grid[row][col] === '.';
}
var findShortestPath = function(start, end, grid) {
    /* 
        [
            [start, 'x', '.'],
            ['x',   'x', '.'], 
            ['.',   'x', end]
        ] 
    */
    
    var queue = [{'pos': start, 
                'sumSoFar': 0}];
    
    var visited = [];
    
    
    for (var i = 0; i < grid.length; i++) { 
        var layer = [];
        for (var k = 0; k < grid[i].length; k++) { 
            layer.push(false);
        }
        visited.push(layer);
    }
    console.log(grid);
    console.log(visited);
    
    while (queue.length > 0) {
        console.log('visited: ', visited);
        // console.log('queue: ', queue);
        var currentLocation = queue.shift();
        var row = currentLocation['pos'][0];
        var col = currentLocation['pos'][1];
        // console.log('later queue: ', queue);

        // console.log('current: ', currentLocation['pos']);
        // console.log('end: ', end);
        visited[row][col] = true;
        if (currentLocation['pos'][0] === end[0] && currentLocation['pos'][1] === end[1]) { 
            return currentLocation['sumSoFar'];
        }
        if (row > 0 && isValidStep(row - 1, col, grid) && !isVisited(row - 1, col, visited)) { 
            queue.push({'pos': [row - 1, col], 'sumSoFar': currentLocation['sumSoFar'] + 1 })
        }
        if (row < grid.length - 1 && isValidStep(row + 1, col, grid) && !isVisited(row + 1, col, visited)) { 
            queue.push({'pos': [row + 1, col],'sumSoFar': currentLocation['sumSoFar'] + 1 })
        }
        if (col > 0 && isValidStep(row, col - 1, grid) && !isVisited(row, col - 1, visited)) { 
            queue.push({'pos': [row, col - 1], 'sumSoFar': currentLocation['sumSoFar'] + 1 })
        }
        if (col < grid[0].length && isValidStep(row, col + 1, grid) && !isVisited(row, col + 1, visited)) { 
            queue.push({'pos': [row, col + 1], 'sumSoFar': currentLocation['sumSoFar'] + 1})
        }
    } 
    return 0;
}
