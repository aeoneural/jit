
var initializeMatrix = function(grid, value){ 
    var visited = []
    for (var i = 0; i < grid.length; i++) {
        var layer = [];
        for (var k = 0; k < grid[i].length; k++) {
            layer.push(value);
        }
        visited.push(layer);
    }
    return visited
}
var robotUniquePathRecursive = function(grid) { 
    var totalScores = initializeMatrix(grid, 0);
    var visited = initializeMatrix(grid, 1);
    var paths = 0; 

    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[row].length; col++) {
            if ((row === 0 || col === 0) && grid[row][col] === '.') {

                if (grid[row][col] === '.') {
                    totalScores[row][col] = 1;
                } else {
                    totalScores[row][col] = 0
                }
            }
        }
    }
    console.log('scores so far: ', totalScores);

        
    var traverse = function(row, col) { 
        if (row === 0 || col === 0) return; 
        totalScores[row][col] = totalScores[row - 1][col] + totalScores[row][col + 1]
        visited[row][col] = 1;

        if (row > 0 && !isObstacle(row - 1, col, grid) && visited[row - 1][col] === 0) {
            traverse(row - 1, col);
        }
        if (row < grid.length - 1 && !isObstacle(row + 1, col, grid) && visited[row + 1][col] === 0) {
            traverse(row + 1, col);
        }
        if (col < grid[0].length - 1 && !isObstacle(row, col + 1, grid) && visited[row][col + 1] === 0) {
            traverse(row, col + 1);
        }
        if (col > 0 && !isObstacle(row, col - 1, grid) && visited[row][col - 1] === 0) {
            traverse(row, col - 1);
        }

    }
 
    console.log(totalScores)
    traverse(0, 0);
    return paths;
}
var robotUniquePathIterative = function(grid) { 
    var totalScores = initializeMatrix(grid, 0);
    var visited = initializeMatrix(grid, false);
    var queue = [[1, 1]]; 
    for (var row = 0; row < grid.length; row++) { 
        for (var col = 0; col < grid[row].length; col++) { 
            if ((row === 0 || col === 0) && grid[row][col] === '.') { 
                
                if (grid[row][col] === '.') { 
                    totalScores[row][col] = 1;
                } else { 
                    totalScores[row][col] = 0
                }
            }
        }
    }
    while (queue.length > 0) {
        var currentStep = queue.shift();
        var row = currentStep[0];
        var col = currentStep[1];
        // if (row === 1 && col === 3) console.log('hello from here!')
        if (row > 0 && col > 0) { 
            // console.log('[ ', row, ',', col, ' ]', '====> ', totalScores[row][col - 1] + totalScores[row - 1][col])
            // update it's unique path here.
            totalScores[row][col] = totalScores[row][col - 1] + totalScores[row - 1][col];

            // update visited locations
            visited[row][col] = true;


            if (row > 0 && grid[row - 1][col] === '.' && !visited[row - 1][col]) {
                queue.push([row - 1, col]);
            }

            if (row < grid.length - 1 && grid[row + 1][col] === '.' && !visited[row + 1][col]) {
                queue.push([row + 1, col]);
            }

            if (col > 0 && grid[row][col - 1] === '.' && !visited[row][col - 1]) {
                queue.push([row, col - 1]);
            }

            if (col < grid[row].length - 1 && grid[row][col + 1] === '.' && !visited[row][col + 1]) {
                queue.push([row, col + 1]);
            }
        }    
        
    }
    return totalScores[grid.length - 1][grid[0].length - 1]
}
var exampleInput = [
    ['.', 'X', '.', '.'],
    ['.', '.', '.', 'X'],
    ['X', 'X', 'X', 'X'],
    ['.', '.', '.', '.']
]
exampleInput = [
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '.', '.', '.']
]
var test = robotUniquePathIterative(exampleInput)
var test1 = robotUniquePathRecursive(exampleInput);
// console.log(test);
console.log(test1);

