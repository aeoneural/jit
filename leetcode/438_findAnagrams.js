/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
    var result = []
    var isAnagram = function (possible, p) {
        var first = {};
        var second = {}
        for (var i = 0; i < possible.length; i++) {
            if (first.hasOwnProperty(possible[i])) {
                first[possible[i]]++
            } else {
                first[possible[i]] = 1;
            }
        }
        for (var i = 0; i < p.length; i++) {
            if (second.hasOwnProperty(p[i])) {
                second[p[i]]++
            } else {
                second[p[i]] = 1;
            }
        }

        if (Object.keys(first).length !== Object.keys(second).length) {
            return false;
        }

        for (var i = 0; i < p.length; i++) {
            if (first[p[i]] !== second[p[i]]) {
                return false;
            }
        }
        return true;
    }

    for (var i = 0; i < s.length - p.length + 1; i++) { 
        var possible = s.substr(i, p.length); 
        if (isAnagram(possible, p)) { 
            result.push(i);
        }
    }
    return result;
};
// 'abab', 'ab'
var test = findAnagrams("cbaebabacd","abc")
console.log(test)

var allAnagrams = function(str){ 
    var all = []; 
    var anagramFinder = function(string, one, depth) { 
        if (string.length === 0) { 
            all.push(one.join(''));
            return;
        }
        for (var i = 0; i < string.length; i++) { 
            one[depth] = string[i]; 
            anagramFinder(string.substring(0, i) + string.substring(i + 1, string.length), one, depth + 1); 

        }

    }
    anagramFinder(str, Array(str.length), 0); 
    return all;

}
// var text = allAnagrams('abc'); 
// console.log(text);