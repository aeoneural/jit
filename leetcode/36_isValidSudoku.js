/**
 * @param {character[][]} board
 * @return {boolean}
 
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/
var isValidSudoku = function (board) {
    if (board.length !== 9 || board[0].length !== 9) return false;

    for (var row = 0; row < 9; row++) { 
        var rowSet = new Set();
        var colSet = new Set();
        var cubeSet = new Set();

        for (var col = 0; col < 9; col++) { 
            
            // horizontal 
            if (board[row][col] !== '.') { 
                if (!rowSet(board[row][col])) { 
                    rowSet.add(board[row][col]);
                } else { 
                    return false;
                }

            }
            
            // vertical 
            if (board[col][row] !== '.') { 
                if (!colSet(board[col][row])) { 
                    colSet.add(board[col][row]);
                } else { 
                    return false;
                }
            }

            
            //        0       0       0       1       1       1       2     2      2
            // 0    (0, 0) (0, 1) (0, 2) | (0, 3) (0, 4) (0, 5) | (0, 6) (0, 7) (0, 8) 
            // 0    (1, 0) (1, 1) (1, 2) | (1, 3) (1, 4) (1, 5) | (1, 6) (1, 7) (1, 8)
            // 0    (2, 0) (2, 1) (2, 2) | (2, 3) (2, 4) (2, 5) | (2, 6) (2, 7) (2, 8)
            //      ------------------------------------------------------------------
            // 1    (3, 0) (3, 1) (3, 2) | (3, 3) (3, 4) (3, 5) | (3, 6) (3, 7) (3, 8)
            // 1    (4, 0) (4, 1) (4, 2) | (4, 3) (4, 4) (4, 5) | (4, 6) (4, 7) (4, 8)
            // 1    (5, 0) (5, 1) (5, 2) | (5, 3) (5, 4) (5, 5) | (5, 6) (5, 7) (5, 8)
            //      ------------------------------------------------------------------
            // 2    (6, 0) (6, 1) (0, 2) | (6, 3) (6, 4) (6, 5) | (6, 6) (6, 7) (6, 8)
            // 2    (7, 0) (7, 1) (7, 2) | (7, 3) (7, 4) (7, 5) | (7, 6) (7, 7) (7, 8)
            // 2    (8, 0) (8, 1) (8, 2) | (8, 3) (8, 4) (8, 5) | (8, 6) (8, 7) (8, 8)

            // cubic 
            var UpperRow = Math.floor(row / 3) * 3;
            var UpperCol = (row % 3) * 3;
            var finalRow = UpperRow + Math.floor(col / 3);
            var finalCol = UpperCol + col % 3;
            
            if (board[finalRow][finalCol] !== '.') { 
                if (!cubeSet.has(board[finalRow][finalCol])) { 
                    cubeSet.add(board[findalRow][finalCol]);
                } else { 
                    return false;
                }
            }

        }
    }

    return true;
};