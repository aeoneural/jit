/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    var max = 0;
    for (var r = 0; r < grid.length; r++) { 
        for (var c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) { 
                max = Math.max(max, countIslandHelper(grid, r, c)); 
            }
        }
    }
    return max; 
};

var countIslandHelper = function(grid, r, c) { 
    
    if (r < grid.length && r >= 0 && c < grid[0].length && c >= 0 && grid[r][c] === 1) { 
        grid[r][c] = 0;  
        return 1 + countIslandHelper(grid, r - 1, c) + countIslandHelper(grid, r + 1, c) + countIslandHelper (grid, r, c - 1 ) + countIslandHelper(grid, r, c + 1);
    }
    return 0;
}
var grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
console.log(maxAreaOfIsland(grid));