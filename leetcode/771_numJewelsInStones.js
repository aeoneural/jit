/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    var set = new Set(); 

    for (var i = 0; i < J.length; i++) { 
        set.add(J[i]);
    }
    var count = 0
    for (var i = 0; i < S.length; i++) {
        if (set.has(S[i])) count++;
    }
    // return count;

    return S.split('').filter((element) => {return J.indexOf(element) > -1}).length
};