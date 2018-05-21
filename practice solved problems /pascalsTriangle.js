/* 
        1
      1   1
    1   2   1
   1  3   3  1
*/

var pascalsTriangle = function(numRows) { 
    var res = [[1]]
    
    for (var i = 1; i < numRows; i++) { 
        var each = [1];

        for (var k = 0; k < res[i - 1].length - 1; k++) { 
            each.push(res[i - 1][k] + res[i - 1][k + 1]);
        }
        each.push(1)
        res.push(each);
    }
    return res; 
}

console.log(pascalsTriangle(5));