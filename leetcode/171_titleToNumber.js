/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var chars = {'A':1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6, 'G':7, 'H':8, 'I':9, 'J':10, 'K':11, 'L':12, 'M':13, 'N':14, 'O':15, 'P':16, 'Q':17, 'R':18, 'S':19, 'T':20, 'U':21, 'V':22, 'W':23, 'X':24, 'Y':25, 'Z':26}; 
    var index = 0
    var res = 0
    while ( index < s.length) { 
        res += Math.pow(26, index) * chars[s[index]];
        index += 1; 
    }
    // res += chars[s[s.length-1]]
    return res;
};
var a = titleToNumber('AAA'); 
console.log(a)