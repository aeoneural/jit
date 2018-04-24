/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
    var res = ''; 
    while (n !== 0) { 
        res =chars[(n-1)%26] + res; 
        n = Math.floor((n-1)/26);
    }
    console.log(res)
    return res;
};

convertToTitle(702);

