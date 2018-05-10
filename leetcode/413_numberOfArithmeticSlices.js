/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    var total = 0;
    var cur = 0;
    for (var i = 2; i < A.length; i++) {
        if ((A[i] - A[i - 1]) === (A[i - 1] - A[i - 2]) ) { 
            cur += 1
            total += cur;
        } else { 
            cur = 0;
        }
    }
    return total;
};

var arr = [1,2,3,4, 7, 9, 11, 13]
var test = numberOfArithmeticSlices(arr);
console.log(test);