/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isValidChar = function(char) { 
//     return char > 97 && char < 123;
// }
var isAnagram = function(s, t) {
    if (s.length !== t.length) { 
        return false
    }
    // var hashTable = {}; 
    var alphabet = new Array(26).fill(0);

    for (var i = 0; i < s.length; i++) { 
        if (!alphabet[s.charCodeAt(i) - 'a'.charCodeAt(0)]) { 
            alphabet[s.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
        } else {
            alphabet[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        }
    }; 
    for (var i = 0; i < t.length; i++) { 
        if (!alphabet[t.charCodeAt(i) - 'a'.charCodeAt(0)]) { 
            return false;
        }
        alphabet[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
        if (alphabet[t.charCodeAt(i) - 'a'.charCodeAt(0)] < 0) {
            return false;
        }
    }
    return true;
};
var test = isAnagram('aabca', 'aabca');
console.log(test)