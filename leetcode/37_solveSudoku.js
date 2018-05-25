/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var initializeMatrix = function (m, n, value) {
    var matrix = [];
    for (var i = 0; i < m; i++) {
        matrix[i] = []
        for (var k = 0; k < n; k++) {
            matrix[i].push(value);
        }
    }
    return matrix
}
var hasDuplicate = function(board, row, col, set) { 
    if (board[row][col] === '.') { 
        if (!set.has(board[row][col])) { 
            set.add(board[row][col]);
        } else { 
            return true;
        }
    }
    return false
}
var isValidSudoku = function (board) {
    if (board.length !== 9 || board[0].length !== 9) return false;

    for (var row = 0; row < 9; row++) {
        var rowSet = new Set();
        var colSet = new Set();
        var cubeSet = new Set();

        for (var col = 0; col < 9; col++) {

            // horizontal 
            if (hasDuplicate(board, row, col, rowSet)) return false;

            // vertical 
            if (hasDuplicate(board, col, row, colSet)) return false;

            // cubic 
            var UpperRow = Math.floor(row / 3) * 3;
            var UpperCol = (row % 3) * 3;
            var finalRow = UpperRow + Math.floor(col / 3);
            var finalCol = UpperCol + col % 3;

            if (hasDuplicate(board, col, row, cubeSet)) return false;

        }
    }

    return true;
};
var solveHelper = function(board) { 
    for (var row = 0; row < board.length; row++) { 
        for (var col = 0; col < board[0].length; col++) {
            if (board[row][col] === '.') { 
                for (var char = '1'; char <= '9'; char++) { 
                    board[row][col] = char;
                    if (isValidSudoku(board)) { 
                        if (solveHelper(board)) { 
                            return true;
                        } else { 
                            board[row][col] = '.';
                        }
                    }
                }
                return false // why ? 
            }
        }
    }
    return true;
}
var solveSudoku = function(board) {
    if (board === null || board.length === 0) return 
    console.log('board: ', board);

    return solveHelper(board)
};

var test = initializeMatrix(9, 9, '.')
// console.log(test);
test = 
    [   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']]
var testfunction = solveSudoku(test);
console.log(testfunction);