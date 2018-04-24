/**
 * @param {string[]} strs
 * @return {string}
 */

// we compare each letter starting at index 0 in minimum length word,
// with each letter in the rest of words in array at correspoding indices. 

// var strings = ['hello', 'hel', 'he'] 
// strings [0][0] === strings[1][0] === strings[2][0] (yes)
// strings [0][1] === strings[1][1] === strings[2][1] (yes)
// strings [0][2] === strings[1][2] === strings[2][2] (no as l === l === undefined || different letter)

// output should be: 'he'
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    // const rec = (strs, index) => {
    //     var word = strs[0];
    //     if (index > word.length - 1) {
    //         return word.substr(0, index);
    //     }
    //     var same = true;
    //     for (var i = 1; i < strs.length; i++) {
    //         if (index > strs[i].length - 1 || strs[i][index] !== word[index]) {
    //             same = false;
    //             break;
    //         }
    //     }
    //     return same ? rec(strs,index + 1) : word.substr(0, index);
    // }
    // return rec(strs, 0)
    var index = 0; 
    var word = strs[0];
    var same = true; 
    while (same && index < word.length) { 
        for (var i = 1; i < strs.length; i++) {
            if (index > strs[i].length || strs[i][index] !== word[index]) { 
                same = false;
                break;
            }
        }  
        if(same) { 
            index += 1; 
        }
    }
    return word.substr(0,index);
};

var a = longestCommonPrefix(['c','c']);
console.log(a)