var expandIsland = function(r, c, grid) { 
    grid[r][c] = '0'

    if (r - 1 >= 0 && grid[r - 1][c] === '1') {
        expandIsland(r - 1, c, grid);
    }
    if (r + 1 < grid.length && grid[r + 1][c] === '1') {
        expandIsland(r + 1, c, grid);
    }
    if (c - 1 >= 0 && grid[r][c - 1] === '1') {
        expandIsland( r, c - 1, grid);
    }
    if (c + 1 < grid[r].length && grid[r][c + 1] === '1') {
        expandIsland(r, c + 1, grid);
    }

}

var findIslands = function(grid) { 
    var countAllIslands = 0;
    for (var row = 0; row < grid.length; row++) { 
        for (var col = 0; col < grid[row].length; col++) { 
            if (grid[row][col] === '1') { 
                countAllIslands++;
                expandIsland(row, col, grid);
            }

        }

    }
    return countAllIslands;

}
console.log(findIslands([   ['1', '1', '1', '1', '0'], 
                            ['1', '1', '0', '1', '0'], 
                            ['1', '1', '0', '0', '0'], 
                            ['0', '0', '0', '0', '0']]))