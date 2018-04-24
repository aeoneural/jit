/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [[1]];
    for (var i = 1; i < numRows; i++) { 
        var each = [1]; 
        for (var k = 0; k < res[i - 1].length - 1; k++) { 
            each.push(res[i - 1][k] + res[i - 1][k + 1]);
        }
        each.push(1);
        res.push(each);
    }
    return res;
};
var a = generate(3);
console.log(a);