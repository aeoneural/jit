/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    var res = [];
    var n = S.length;
    var pos = -n;
    for (var i = 0; i < S.length; i++) {
        if (S[i] === C) pos = i;
        res[i] = i - pos; 
    }
    for (var i = n - 1; i >= 0; --i) { 
        if (S[i] === C) pos = i;
        res[i] = Math.min(res[i], Math.abs(i - pos));
    }

    // console.log([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
    return res
};
// console.log(shortestToChar("loveleetcode", 'e'));
console.log(shortestToChar("aaba", 'b'))