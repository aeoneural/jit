var rotateMatrix = function(matrix) { 
    var result = [];
    for (var row = 0; row < matrix.length; row++) {
        var line = []
        for (var col = 0; col < matrix[row].length; col++) {
            line.push(0);
        }
        result.push(line)
    }
    for(var row = 0; row < matrix.length; row++) { 
        for (var col = 0; col < matrix[row].length; col++) { 
            var newRow = matrix[row].length - col - 1; 
            var newCol = row; 
            // left
            // result[row][col] = matrix[newRow][newCol];

            // right
            result[newRow][newCol] = matrix[row][col];
        }
    }
    return result;
}

var test = [ 
    [1, 2, 3, 4], 
    [5, 6, 7, 8], 
    [9, 10, 11, 12], 
    [13, 14, 15, 16]
]
console.log(rotateMatrix(test))