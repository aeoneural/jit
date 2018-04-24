/**
 * @param {character[][]} grid
 * @return {number}
 */
var landExpand = function(grid, r, c) { 
    // flag as visited: 
    grid[r][c] = '0'

    if (r - 1 >= 0 && grid[r - 1][c] === '1') { 
        landExpand(grid, r - 1, c);
    }
    if (r + 1 < grid.length && grid[r + 1][c] === '1') { 
        landExpand(grid, r + 1, c);
    }
    if (c - 1 >= 0 && grid[r][c - 1] === '1') {
        landExpand(grid, r, c - 1);
    }
    if (c + 1 < grid[r].length && grid[r][c + 1] === '1') { 
        landExpand(grid, r, c + 1);
    }
}
var numIslands = function (grid) {
    var counter = 0;
    for (var r = 0; r < grid.length; r++) { 
        for ( var c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === '1') {
                counter++;
                landExpand(grid, r, c)
            }   
        }
    }
    return counter;
};

var input1 = [[1, 1, 1],
            [1, 1, 1],
            [0, 0, 0]]
var input2 = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
var test = numIslands(input2)
console.log(test);