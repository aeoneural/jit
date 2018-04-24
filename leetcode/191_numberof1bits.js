/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var res = 0; 
    var num = n;
    for (var i = 0; i < 32; i++) { 

        if (num&1) res++; 
        num = num >> 1
    }
 
    console.log(res)
    return res;
};
hammingWeight(00000000000000000000000000000111);