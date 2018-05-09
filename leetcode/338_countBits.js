/**
 * @param {number} num
 * @return {number[]}
 */

 /* ASK and LEARN
 var countBits = function(num) {
    let dp = new Array(num + 1);
    dp.fill(0);
    for (let i = 1 ; i <= num; i++) {
        dp[i] = dp[i & (i-1)] + 1;
    }
    return dp
};
 */
var count = function(n) { 
    // console.log(n.toString(2));
    var count = 0; 
    while (n > 0) { 
        n = n & (n - 1) 
        count++;
    }
    return count;
}

var countBits = function(num) {
    var arr = [];
    var i = 0;
    while (i < num + 1) { 
        arr.push(count(i))
        i++;
    }
    // console.log(arr);
    return arr;
};
countBits(5)