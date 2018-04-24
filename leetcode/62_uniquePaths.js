/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var max = m > n ? m : n; 
    var min = m > n ? n : m; 
    var result = 1; 
    console.log(max, " : ", min)
    for (var i = max; i <= (m + n - 2); i++) {
        result *= i;
    }
    console.log('result: ', result);
    for (var i = 2; i < min; i++) { 
        result = Math.floor(result / i);
    }
    return result;

    // if (m <= 1) { 
    //     return 1; 
    // }
    // var arr = [];
    // for (var i = 0; i < m; i++) {
    //     arr.push(new Array(n));
    // }
    // arr[0][0] = 'start';
    // arr[1][0] = 1; 
    // arr[0][1] = 1;
    // for (var row = 0; row < m; row++) { 
    //     for (var col = 0; col < n; col++) { 
    //         if (col === 0 || row === 0) { 
    //             arr[row][col] = 1
    //         } else { 
    //             var current = arr[row - 1][col] + arr[row][col - 1];
    //             // console.log('current cell: ', current)
    //             arr[row][col] = current;
    //         }
    //     }
    // }
    // // console.log(arr);
    // return arr[m - 1][n - 1];
};

var a = uniquePaths(4, 5);
console.log(a);