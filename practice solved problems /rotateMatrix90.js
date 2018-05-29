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
            result[row][col] = matrix[newRow][newCol];

            // right
            // result[newRow][newCol] = matrix[row][col];
        }
    }
    return result;
}
var rotateMatrixInPlace = function(matrix) { 
    var totalLayers = matrix.length / 2;
    var len = matrix.length - 1; 
    for (var i = 0; i < len; i++) { 
        var temp = matrix[0][i];
        console.log('temp: ', temp);
        matrix[0][i] = matrix[len - i][0];
        matrix[len - i][0] = matrix[len][len - i];
        matrix[len][len - i] = matrix[i][len];
        matrix[i][len] = temp;
    }
    
    return matrix;
}

var test = [ 
    [1, 2, 3, 4], 
    [5, 6, 7, 8], 
    [9, 10, 11, 12], 
    [13, 14, 15, 16]
]
// console.log(rotateMatrix(test))
console.log(rotateMatrixInPlace(test));