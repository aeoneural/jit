/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var arr = new Array(26).fill(0);
 
    for (var i = 0; i < magazine.length; i++) { 
        // console.log(magazine[i].charCodeAt(0))
        arr[magazine[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (var i = 0; i < ransomNote.length; i++) { 
        if (--arr[ransomNote[i].charCodeAt(0) - 'a'.charCodeAt(0)] < 0) { 
            return false;
        }
    }
    return true;

};
console.log(canConstruct("aa", "aab"))